import React, { useState, useEffect, FC, CSSProperties, ReactNode } from 'react';

type AnimationType = 'in' | 'out' | 'both';

interface FadeInOutProps {
	show: boolean;
	duration: number;
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	animation?: AnimationType;
}

const UNMOUNTED: StatusType = 'unmounted';
const EXITED: StatusType = 'exited';
const ENTERING: StatusType = 'entering';
const ENTERED: StatusType = 'entered';
const EXITING: StatusType = 'exiting';

type StatusType = 'unmounted' | 'exited' | 'entering' | 'entered' | 'exiting';

const transitionStyles: { [key in StatusType]: CSSProperties } = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
	unmounted: {},
};

const FadeInOut: FC<FadeInOutProps> = ({
	show,
	duration,
	children,
	className,
	style,
	animation,
}) => {
	const [status, setStatus] = useState<StatusType>(UNMOUNTED);

	useEffect(() => {
		if (show) {
			if (animation === 'in' || animation === 'both') {
				performEnter();
			}
		} else {
			if (
				(animation === 'out' || animation === 'both') &&
				(status === ENTERING || status === ENTERED)
			) {
				performExit();
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [show, animation]);

	const performEnter = () => {
		setStatus(ENTERING);
		setTimeout(() => {
			setStatus(ENTERED);
		}, duration);
	};

	const performExit = () => {
		setStatus(EXITING);
		setTimeout(() => {
			setStatus(EXITED);
		}, duration);
	};

	if (status === UNMOUNTED || (status === EXITED && animation === 'in')) {
		return null;
	}

	return (
		<div
			className={className}
			style={{
				...style,
				transition: `opacity ${duration}ms ease-in-out`,
				...transitionStyles[status],
			}}
		>
			{children}
		</div>
	);
};

FadeInOut.defaultProps = {
	show: false,
	duration: 300,
	animation: 'both',
};

export default FadeInOut;
