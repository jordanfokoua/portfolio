import React from 'react';
import styles from './Logo.module.css';
import { PROFILE } from '../../constants/profile';

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<span className={styles.initials}>{PROFILE.INITIALS}</span>
		</div>
	);
};

export default Logo;
