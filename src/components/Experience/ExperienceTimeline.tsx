import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EXPERIENCES } from '../../constants/experience';
import { Experience } from '../../types/experience';

const ExperienceTimeline = () => {
	const [selectedXp, setSelectedXp] = useState<Experience>(EXPERIENCES[0]);
	const reduceMotion = useReducedMotion();

	return (
		<div className="flex flex-col md:flex-row h-full w-full max-w-[91vw] mx-auto justify-between items-start gap-6 md:gap-10">
			<div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-[220px] lg:w-56 text-left mb-2 md:mb-0 px-0 gap-2 md:gap-1 pb-2 md:pb-0">
				{EXPERIENCES.map((exp) => {
					const active = selectedXp?.id === exp.id;
					return (
						<motion.button
							key={exp.id}
							type="button"
							className={`flex-shrink-0 text-left rounded-lg px-4 py-3 md:py-3 text-sm transition-colors border border-transparent ${
								active
									? 'bg-primary/15 text-primary border-primary/40 shadow-[0_0_24px_rgba(240,219,79,0.12)]'
									: 'text-grey hover:text-white hover:bg-white/5 border-white/5'
							}`}
							onClick={() => setSelectedXp(exp)}
							aria-pressed={active}
							aria-label={`Select experience at ${exp.company}`}
							whileHover={reduceMotion ? undefined : { x: 4 }}
							whileTap={{ scale: 0.98 }}
							layout
						>
							<span className="font-display font-semibold tracking-tight block">{exp.company}</span>
							<span className="text-xs opacity-70 mt-0.5 block">{exp.year}</span>
						</motion.button>
					);
				})}
			</div>

			<div className="overflow-hidden min-h-[50vh] md:min-h-[60vh] w-full md:flex-1 my-2 rounded-2xl border border-primary/20 bg-background-2/40 p-6 md:p-8 backdrop-blur-sm">
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedXp.id}
						initial={reduceMotion ? false : { opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
						transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="text-xl md:text-2xl font-display font-semibold text-white">
							{selectedXp.title}{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="companyHandle mb-1 inline"
								href={selectedXp.company_url}
								data-replace={`@${selectedXp.company}`}
							>
								<span>@{selectedXp.company}</span>
							</a>
						</div>
						<span className="inline-block mt-2 text-sm font-medium text-primary/90 tracking-wide">
							{selectedXp.year}
						</span>
						<p className="text-justify mt-4 text-white/85 leading-relaxed hidden md:block">
							{selectedXp.description}
						</p>
						{selectedXp.details && (
							<ul className="list-none pl-0 mt-4 space-y-3">
								{selectedXp.details.map((detail, index) => (
									<motion.li
										key={index}
										className="relative pl-5 text-white/80 text-sm md:text-base leading-relaxed before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
										initial={reduceMotion ? false : { opacity: 0, x: -8 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: reduceMotion ? 0 : 0.06 * index }}
									>
										{detail}
									</motion.li>
								))}
							</ul>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ExperienceTimeline;
