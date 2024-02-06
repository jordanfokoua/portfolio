import React, { useState } from 'react';
import { COLORS } from '../../constants/colors';
import './Button.css';
import { animated, useSpring } from '@react-spring/web';

interface ButtonProps {
	label?: string;
	className?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label = 'Click Me!', className, onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	const springStyle = useSpring({
		backgroundColor: isHovered ? COLORS.PRIMARY : 'transparent',
		color: isHovered ? COLORS.BACKGROUND_3 : COLORS.PRIMARY,
		borderColor: isHovered ? COLORS.BACKGROUND_3 : COLORS.PRIMARY,
		config: { mass: 1, tension: 210, friction: 20 },
	});

	return (
		<animated.button
			className={`${className} animated-button`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				...springStyle,
				borderRadius: '10px',
				padding: '0.75em 1.25em',
				fontSize: '1.2rem',
				cursor: 'pointer',
				width: 'fit-content',
			}}
			onClick={onClick}
		>
			{label}
		</animated.button>
	);
};

export default Button;
