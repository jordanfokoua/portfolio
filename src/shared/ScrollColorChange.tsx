import { useState, useEffect, ReactNode, FC } from 'react';
import { COLORS } from '../constants/colors';

interface ScrollColorChangeProps {
	children?: ReactNode;
	className?: string;
}

const ScrollColorChange: FC<ScrollColorChangeProps> = ({ children, className }) => {
	const [backgroundColor, setBackgroundColor] = useState(COLORS.BACKGROUND_4);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
			if (scrollPercentage < 0.25) {
				setBackgroundColor(COLORS.BACKGROUND_4);
			} else if (scrollPercentage < 0.50) {
				setBackgroundColor(COLORS.BACKGROUND_2);
			} else if (scrollPercentage < 0.75) {
				setBackgroundColor(COLORS.BACKGROUND_3);
			} else {
				setBackgroundColor(COLORS.BACKGROUND_4);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={className} style={{ height: 'auto', transition: 'background-color 0.5s', backgroundColor }}>
			{children}
		</div>
	);
};

export default ScrollColorChange;
