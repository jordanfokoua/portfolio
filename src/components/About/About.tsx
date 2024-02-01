import React from 'react';
import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';
import globalStyles from '../../styles/global.module.css';

const About: React.FC = () => {
	return (
		<Section id="about">
			<h2 className={`${globalStyles.heading} ${globalStyles.sectionHeading}`}>
				<span className={globalStyles.sectionNumber}>01.{'  '}</span>About Me
			</h2>
			<div className={`flex flex-col md:flex-row justify-around`}>
				<div className="w-full md:w-1/2 md:mb-0">
					{PROFILE.ABOUT.map((paragraph, index) => (
						<div key={index} className="mb-3">
							{paragraph}
						</div>
					))}
				</div>
				<div className="flex flex-col">
					<p>Here are some technologies I've recently engaged with:</p>
					<ul className="columns-2 md:columns-2 list-none p-0 mt-2">
						{PROFILE.SKILLS.map((skill, index) => (
							<li
								key={index}
								className="relative pl-5 mb-2 before:content-['+'] before:absolute before:left-0 before:top-0 before:text-primary"
							>
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
};

export default About;
