import React, { useState } from 'react';
import { EXPERIENCES } from '../../constants/experience';
import { Experience } from '../../types/experience';
import { useSpring, animated } from '@react-spring/web';

const ExperienceTimeline = () => {
	const [selectedXp, setSelectedXp] = useState<any>(EXPERIENCES[0]);

	const [contentProps, setContentProps] = useSpring(() => ({
		opacity: 1,
		transform: 'translateY(0px)',
		from: { opacity: 0, transform: 'translateY(-30px)' },
		config: { tension: 220, friction: 120 },
	}));

	const handleSelect = (exp: Experience) => {
		setContentProps({ opacity: 0, transform: 'translateY(-30px)' });
		setTimeout(() => {
			setSelectedXp(exp);
			setContentProps({ opacity: 1, transform: 'translateY(0px)' });
		}, 300);
	};

	return (
		<div className="flex flex-col md:flex-row h-full w-[91vw] mx-auto justify-between items-start">
			<div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-1/6 text-left mb-4 md:mb-0 px-0 whitespace-nowrap">
				{EXPERIENCES.map((exp) => (
					<div
						key={exp.id}
						className={`flex p-2 px-4 md:flex-col items-left mb-2 cursor-pointer text-gray-400 w-full text-sm ${
							selectedXp?.id === exp.id ? 'bg-gray-200 border-b-2 border-yellow-400 px-2' : ''
						}`}
						onClick={() => handleSelect(exp)}
						role="button"
						aria-label={`Select experience at ${exp.company}`}
					>
						{exp.company}
					</div>
				))}
			</div>

			<animated.div
				className="overflow-hidden h-[60vh] transition-all w-full md:w-4/6 my-2"
				style={contentProps}
			>
				<div className="text-xl font-medium">
					{selectedXp?.title}{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="companyHandle mb-1"
						href={selectedXp?.company_url}
						data-replace={`@ ${selectedXp?.company}`}
					>
						<span> @ {selectedXp?.company}</span>
					</a>
				</div>
				<span className="font-light text-sm">{selectedXp?.year}</span>
				<p className="text-justify mt-2 hidden md:block">{selectedXp?.description}</p>
				{selectedXp?.details && (
					<ul className="list-disc pl-5 mt-2">
						{selectedXp?.details.map((detail: any, index: number) => (
							<li key={index} className="mb-2">
								{detail}
							</li>
						))}
					</ul>
				)}
			</animated.div>
		</div>
	);
};

export default ExperienceTimeline;
