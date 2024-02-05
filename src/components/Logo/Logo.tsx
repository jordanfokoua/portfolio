import React from 'react';
import logo from '../../assets/images/logo.png';

interface LogoProps {
	className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
	const classes = `w-10 h-10 ${className}`;
	return <img src={logo} alt="Logo" className={classes} />;
};

export default Logo;
