import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Intro.module.css';

import { PROFILE } from '../../constants/profile';

const Intro: React.FC = () => {
	return (
		<section id="intro" className={styles.intro}>
			<p className={styles.greeting}>Hello, I am</p>
			<TypeAnimation
				sequence={[`${PROFILE.NAME} ${PROFILE.LASTNAME}.`, 1000]}
				wrapper="span"
				speed={10}
				style={{ fontSize: '4em', display: 'inline-block' }}
				repeat={Infinity}
				className={styles.name}
			/>
			<h3 className={styles.role}>{PROFILE.ROLE}</h3>
			<p className={styles.description}>
				Delving into the realm of full stack web application development, I combine innovation with
				technical expertise. Currently, I'm applying my skills as a bot buster{' '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					className={`companyHandle`}
					href={PROFILE.COMPANY_URL}
					data-replace={'@ ' + PROFILE?.COMPANY_NAME}
				>
					<span> @ {PROFILE?.COMPANY_NAME}</span>
				</a>{' '}
				, contributing to the frontline of digital security.
			</p>
		</section>
	);
};

export default Intro;
