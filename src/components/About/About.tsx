import React from 'react';
import styles from './About.module.css';
import globalStyles from '../../styles/global.module.css';
import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';

const About: React.FC = () => {
	return (
		<Section id="about" className={`${styles.about} ${globalStyles.section}`}>
			<h2 className={`${globalStyles.heading} ${globalStyles.sectionHeading}`}>
				<span className={globalStyles.sectionNumber}>01.{'  '}</span>About Me
			</h2>
			<div className={globalStyles.sectionContent}>
				<div className={styles.description}>
					{PROFILE.ABOUT.map((paragraph, index) => (
						<div key={index} className={styles.descriptionContent}>
							{paragraph}
						</div>
					))}
				</div>
				<div className={styles.skillsBlock}>
					Here are some technologies I've recently engaged with:
					<ul className={styles.skills}>
						{PROFILE.SKILLS.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default About;
