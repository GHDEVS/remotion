import {_Object} from '@aws-sdk/client-s3';
import {estimatePrice} from '../../pricing/calculate-price';
import {lambdaTimingsPrefix, RenderMetadata} from '../../shared/constants';
import {parseLambdaTimingsKey} from '../../shared/parse-lambda-timings-key';
import {calculateChunkTimes} from './calculate-chunk-times';
import {findOutputFileInBucket} from './find-output-file-in-bucket';
import {getCurrentRegionInFunction} from './get-current-region';
import {getTimeToFinish} from './get-time-to-finish';

// TODO: Should differentiate between finished and in progress
export const estimatePriceFromBucket = ({
	renderId,
	contents,
	renderMetadata,
	bucketName,
	memorySizeInMb,
}: {
	renderId: string;
	contents: _Object[];
	renderMetadata: RenderMetadata | null;
	bucketName: string;
	memorySizeInMb: number;
}) => {
	if (!renderMetadata) {
		return null;
	}

	const finishedTimings = contents.filter((c) =>
		c.Key?.startsWith(lambdaTimingsPrefix(renderId))
	);

	const parsedTimings = finishedTimings.map((f) =>
		parseLambdaTimingsKey(f.Key as string)
	);

	const outputFile = findOutputFileInBucket({
		bucketName,
		contents,
		renderMetadata,
	});

	const timeToFinish = getTimeToFinish({
		lastModified: outputFile?.lastModified ?? null,
		renderMetadata,
	});

	const elapsedTime =
		timeToFinish === null
			? Date.now() - (renderMetadata?.startedDate ?? 0)
			: timeToFinish;

	const unfinished = Math.max(
		0,
		(renderMetadata?.totalChunks ?? 0) - parsedTimings.length
	);
	const timeElapsedOfUnfinished = new Array(unfinished)
		.fill(true)
		.map(() => elapsedTime)
		.reduce((a, b) => a + b, 0);

	const accruedSoFar = Number(
		estimatePrice({
			region: getCurrentRegionInFunction(),
			durationInMiliseconds:
				calculateChunkTimes({
					contents,
					renderId,
					type: 'combined-time-for-cost-calculation',
				}) + timeElapsedOfUnfinished,
			memorySizeInMb,
		}).toPrecision(5)
	);
	return accruedSoFar;
};