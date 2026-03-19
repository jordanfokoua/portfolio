
import React from 'react';
import styles from './Footer.module.css';
import { PROFILE } from '../../constants/profile';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p className="relative z-[1] text-sm text-white/70 tracking-wide">
				© {new Date().getFullYear()} {PROFILE.NAME} {PROFILE.LASTNAME}. Made with{' '}
				<span className="text-primary inline-block animate-pulse">♥</span>
			</p>
		</footer>
	);
};

export default Footer;
