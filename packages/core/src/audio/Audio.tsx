import React from 'react';
import {Sequence} from '../sequencing';
import {validateStartFromProps} from '../validate-start-from-props';
import {AudioForDevelopment} from './AudioForDevelopment';
import {RemotionAudioProps, RemotionMainAudioProps} from './props';

export const Audio: React.FC<RemotionAudioProps & RemotionMainAudioProps> = (
	props
) => {
	const {startAt, endAt, ...otherProps} = props;
	if (typeof startAt !== 'undefined' || typeof endAt !== 'undefined') {
		validateStartFromProps(startAt, endAt);
		const startAtFrameNo = startAt ?? 0;
		const endAtFrameNo = endAt ?? Infinity;
		return (
			<Sequence from={0 - startAtFrameNo} durationInFrames={endAtFrameNo}>
				<Audio {...otherProps} />
			</Sequence>
		);
	}
	if (process.env.NODE_ENV === 'development') {
		return <AudioForDevelopment {...props} />;
	}
	return null;
};