import { useState, useEffect, ReactNode, FC } from 'react';
import { useSpring, animated } from '@react-spring/web';
import throttle from 'lodash.throttle';
import { COLORS } from '../constants/colors';

interface ScrollColorChangeProps {
	children?: ReactNode;
	className?: string;
}

const ScrollColorChange: FC<ScrollColorChangeProps> = ({ children, className }) => {
	const [scrollY, setScrollY] = useState(0);

	const [{ backgroundColor }, setBgColor] = useSpring(() => ({
		backgroundColor: COLORS.BACKGROUND_3,
	}));

	useEffect(() => {
		const handleScroll = throttle(() => {
			setScrollY(window.scrollY);
		}, 100);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			handleScroll.cancel();
		};
	}, []);

	useEffect(() => {
		const scrollPercentage = scrollY / (document.body.scrollHeight - window.innerHeight);
		let color = COLORS.BACKGROUND_3;

		if (scrollPercentage < 0.2) {
			color = COLORS.BACKGROUND_3;
		} else if (scrollPercentage < 0.4) {
			color = COLORS.BACKGROUND_2;
		} else if (scrollPercentage < 0.6) {
			color = COLORS.BACKGROUND_1;
		} else if (scrollPercentage < 0.8) {
			color = COLORS.BACKGROUND_2;
		} else {
			color = COLORS.BACKGROUND_3;
		}

		setBgColor.start({ backgroundColor: color });
	}, [scrollY, setBgColor]);
	return (
		<animated.div
			className={className}
			style={{
				height: 'auto',
				backgroundColor,
			}}
		>
			{children}
		</animated.div>
	);
};

export default ScrollColorChange;
