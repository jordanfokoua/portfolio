import React from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import Section from '../../shared/Section/Section';

const Experience: React.FC = () => {
	return (
		<Section id="experience" heading="Experience" number="02" className="pt-8">
			<div className={`flex flex-col md:flex-row justify-between`}>
				<ExperienceTimeline />
			</div>
		</Section>
	);
};

export default Experience;
