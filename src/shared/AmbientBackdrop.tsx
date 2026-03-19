import { FC } from 'react';

/**
 * Fixed, non-interactive layer: soft primary-colored blooms + grain for depth.
 * Uses existing palette only (#f0db4f on dark).
 */
const AmbientBackdrop: FC = () => {
	return (
		<div
			className="ambient-backdrop pointer-events-none fixed inset-0 z-[1] overflow-hidden"
			aria-hidden="true"
		>
			<div className="ambient-blob ambient-blob--a" />
			<div className="ambient-blob ambient-blob--b" />
			<div className="ambient-blob ambient-blob--c" />
			<div className="ambient-grain" />
		</div>
	);
};

export default AmbientBackdrop;
