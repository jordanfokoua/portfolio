import React, { FC, useState } from 'react';
import { COLORS } from '../../constants/colors';
import './Button.css';

interface ButtonProps {
	label?: string;
	className?: string;
	onClick ?: () => void;
}

const Button: FC<ButtonProps> = ({ label, className, onClick  }) => {
	const [isHovered, setIsHovered] = useState(false);
	const fontColor = isHovered ? COLORS.BACKGROUND_4 : COLORS.PRIMARY;
	const backgroundColor = isHovered ? COLORS.PRIMARY : 'transparent';

	const style = {
		backgroundColor,
		color: fontColor,
		borderRadius: '10px',
		padding: '0.75em 1.25em',
		fontSize: '1.2rem',
		borderColor: fontColor,
		cursor: 'pointer',
		width: 'fit-content',
	};

	return (
		<button
			className={`${className} animated-button ${isHovered ? 'hovered' : ''}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={style}
			onClick={onClick }
		>
			{label}
		</button>
	);
};

export default Button;

Button.defaultProps = {
	label: 'Click Me!',
	className: '',
};
