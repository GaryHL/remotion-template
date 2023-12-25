import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

const Frames = () => {
	let durationInFps = 15;

	let content = [
		{text: 'Piensa diferente.', emoji: '🍎'},
		{text: 'Diseñado por Apple en California.', emoji: '🌟'},
		{text: 'Las mejores cosas de la vida son gratis.', emoji: '💫'},
		{text: 'Aquí están los locos.', emoji: '🚀'},
		{text: 'Mantén el hambre, mantén la locura.', emoji: '🍏'},
	];

	return (
		<>
			{content.map((item, index) => (
				<Sequence from={durationInFps * index} durationInFrames={durationInFps}>
					<div className="text-6xl font-extrabold w-full text-center flex justify-center items-center min-h-full">
						{item.text + ' ' + item.emoji}
					</div>
				</Sequence>
			))}
		</>
	);
};

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 flex min-h-full items-center justify-center">
		<Frames/>
		</AbsoluteFill>
	);
};
