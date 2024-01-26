import React from 'react';
import styles from './SocialIcons.module.css';
import { PROFILE } from '../../constants/profile';

const SocialIcons: React.FC = () => {
	return (
		<div className={styles.socialIcons}>
			<a
				href={'https://github.com/' + PROFILE.GITHUB}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.icon}
			>
				<i className="fab fa-github"></i>
			</a>
			<a
				href={'https://medium.com/' + PROFILE.MEDIUM}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.icon}
			>
				<i className="fab fa-medium"></i>
			</a>
			<a
				href={'https://www.linkedin.com/in/' + PROFILE.LINKEDIN}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.icon}
			>
				<i className="fab fa-linkedin"></i>
			</a>
			<a
				href={'https://github.com/' + PROFILE.TWITTER}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.icon}
			>
				<i className="fab fa-twitter"></i>
			</a>
			<a href={'mailto:' + PROFILE.EMAIL} className={styles.icon}>
				<i className="fas fa-envelope"></i>
			</a>
			<div className={styles.line}></div>
		</div>
	);
};

export default SocialIcons;
