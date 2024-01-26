import React from 'react';
import globalStyles from '../../styles/global.module.css';
import ExperienceTimeline from './ExperienceTimeline';
import Section from '../../shared/Section/Section';

const Experience: React.FC = () => {
	return (
		<Section id="experience" className={`${globalStyles.section}`}>
			<h2 className={`${globalStyles.sectionHeading}`}>
				<span className={globalStyles.sectionNumber}>02.{'  '}</span>Experience
			</h2>
			<div className={globalStyles.sectionContent}>
				<ExperienceTimeline />
			</div>
		</Section>
	);
};

export default Experience;
