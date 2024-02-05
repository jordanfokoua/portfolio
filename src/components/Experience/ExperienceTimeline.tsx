import React, { useState } from 'react';
import { EXPERIENCES } from '../../constants/experience';
import { Experience } from '../../types/experience';
import FadeInOut from '../../shared/FadeInOut';

const ExperienceTimeline = () => {
	const [selectedXp, setSelectedXp] = useState<any>(EXPERIENCES[0]);
	const [show, setShow] = useState(true);

	const handleSelect = (exp: Experience) => {
		setShow(false);
		setTimeout(() => {
			setSelectedXp(exp);
		}, 300);
		setTimeout(() => {
			setShow(true);
		}, 500);
	};

	return (
		<div className="flex flex-col md:flex-row h-full w-[91vw] mx-auto h-100vh justify-between items-start">
			<div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-1/6 text-left md:mb-0 md:px-0 whitespace-nowrap">
				{EXPERIENCES.map((exp) => (
					<div
						key={exp.id}
						className={`flex p-2 px-4 md:flex-col items-left mb-2 cursor-pointer text-gray-400 w-full text-sm  ${
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

			<div className="overflow-hidden transition-all w-full md:w-4/6 my-2 h-full">
				<FadeInOut show={show} duration={200}>
					<div className="text-xl font-medium">
						{selectedXp?.title}{' '}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="companyHandle mb-1"
							href={selectedXp?.company_url}
							data-replace={'@ ' + selectedXp?.company}
						>
							<span> @ {selectedXp?.company}</span>
						</a>
					</div>
					<span className="font-light text-sm">{selectedXp?.year}</span>
					<p className="text-justify mt-2 hidden md:block"> {selectedXp?.description}</p>
					{selectedXp?.details && (
						<ul className="list-disc">
							{selectedXp?.details.map((detail: any, index: number) => (
								<li
									key={index}
									className="relative pl-5 mb-2 before:content-['+'] before:absolute before:left-0 before:top-0 before:text-primary"
								>
									{detail}
								</li>
							))}
						</ul>
					)}
				</FadeInOut>
			</div>
		</div>
	);
};

export default ExperienceTimeline;
