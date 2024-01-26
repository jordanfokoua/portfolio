
import React from 'react';
import styles from './Footer.module.css';
import { PROFILE } from '../../constants/profile';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p>© {new Date().getFullYear()} {PROFILE.NAME} {PROFILE.LASTNAME}. Made with ❤️</p>
		</footer>
	);
};

export default Footer;
