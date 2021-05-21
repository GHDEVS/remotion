import {InvokeCommand} from '@aws-sdk/client-lambda';
import {renderFrames, stitchFramesToVideo} from '@remotion/renderer';
import fs from 'fs';
import path from 'path';
import {lambdaClient} from '../aws-clients';
import {ChunkTimingData} from '../chunk-optimization/types';
import {
	LambdaPayload,
	LambdaPayloads,
	LambdaRoutines,
	LAMBDA_INITIALIZED_KEY,
} from '../constants';
import {getBrowserInstance} from '../get-browser-instance';
import {lambdaWriteFile} from '../io';
import {randomHash} from '../random-hash';
import {timer} from '../timer';
import {tmpDir} from '../tmpdir';

const renderHandler = async (params: LambdaPayload) => {
	if (params.type !== LambdaRoutines.renderer) {
		throw new Error('Params must be renderer');
	}

	const browserInstance = await getBrowserInstance();
	const outputDir = '/tmp/remotion-render-' + randomHash();
	if (fs.existsSync(outputDir)) {
		(fs.rmSync ?? fs.rmdirSync)(outputDir);
	}

	fs.mkdirSync(outputDir);

	if (typeof params.chunk !== 'number') {
		throw new Error('must pass chunk');
	}

	if (!params.frameRange) {
		throw new Error('must pass framerange');
	}

	console.log(`Started rendering ${params.chunk}, frame ${params.frameRange}`);
	const start = Date.now();
	const chunkTimingData: ChunkTimingData = {
		timings: {},
		chunk: params.chunk,
		frameRange: params.frameRange,
		startDate: start,
	};
	const {assetsInfo} = await renderFrames({
		compositionId: params.composition,
		config: {
			durationInFrames: params.durationInFrames,
			fps: params.fps,
			height: params.height,
			width: params.width,
		},
		imageFormat: 'jpeg',
		// TODO: Pass input props
		inputProps: {},
		frameRange: params.frameRange,
		onFrameUpdate: (i: number, output: string) => {
			chunkTimingData.timings[i] = Date.now() - start;
			if (i === 1) {
				lambdaWriteFile({
					bucketName: params.bucketName,
					body: '0',
					key: `${LAMBDA_INITIALIZED_KEY}-${params.chunk}.txt`,
					forceS3: false,
				});
			}

			console.log('Rendered frames', i, output);
		},
		parallelism: 1,
		onStart: () => {
			console.log('Starting');
		},
		outputDir,
		puppeteerInstance: browserInstance,
		serveUrl: params.serveUrl,
	});
	const uploadMetricsData = lambdaWriteFile({
		bucketName: params.bucketName,
		body: JSON.stringify(chunkTimingData, null, 2),
		key: `${LAMBDA_INITIALIZED_KEY}-${params.chunk}.txt`,
		forceS3: false,
	});
	const outdir = tmpDir('bucket');

	const outputLocation = path.join(
		outdir,
		`chunk-${String(params.chunk).padStart(8, '0')}.mp4`
	);

	const stitchLabel = timer('stitcher');
	await stitchFramesToVideo({
		assetsInfo: {
			...assetsInfo,
			// Make all assets remote
			assets: assetsInfo.assets.map((asset) => {
				return asset.map((a) => {
					return {
						...a,
						isRemote: true,
					};
				});
			}),
		},
		downloadDir: '/tmp',
		dir: outputDir,
		force: true,
		fps: params.fps,
		height: params.height,
		width: params.width,
		outputLocation,
		// TODO
		codec: 'h264',
		// TODO
		imageFormat: 'jpeg',
	});
	stitchLabel.end();

	await lambdaWriteFile({
		forceS3: false,
		bucketName: params.bucketName,
		key: `chunk-${String(params.chunk).padStart(8, '0')}.mp4`,
		body: fs.createReadStream(outputLocation),
	});
	await uploadMetricsData;
	console.log('Done rendering!', outputDir, outputLocation);
};

export const rendererHandler = async (params: LambdaPayload) => {
	if (params.type !== LambdaRoutines.renderer) {
		throw new Error('Params must be renderer');
	}

	try {
		await renderHandler(params);
	} catch (err) {
		// If this error is encountered, we can just retry as it
		// is a very rare error to occur
		if (
			err.message.includes('FATAL:zygote_communication_linux.cc') &&
			params.retriesLeft > 0
		) {
			const retryPayload: LambdaPayloads[LambdaRoutines.renderer] = {
				...params,
				retriesLeft: params.retriesLeft - 1,
			};
			await lambdaClient.send(
				new InvokeCommand({
					FunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME,
					// @ts-expect-error
					Payload: JSON.stringify(retryPayload),
					InvocationType: 'Event',
				})
			);
		}

		console.log('Error occurred', err);
		await lambdaWriteFile({
			forceS3: false,
			bucketName: params.bucketName,
			key: `error-chunk-${params.chunk}-${Date.now()}.txt`,
			body: JSON.stringify({
				error: err.message,
				stack: err.stack,
			}),
		});
	}
};