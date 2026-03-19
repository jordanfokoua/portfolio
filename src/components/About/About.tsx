import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';

const About: React.FC = () => {
	const reduceMotion = useReducedMotion();

	const listParent = reduceMotion
		? { hidden: {}, visible: {} }
		: {
				hidden: {},
				visible: { transition: { staggerChildren: 0.08 } },
			};

	const listItem = reduceMotion
		? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
		: {
				hidden: { opacity: 0, y: 16 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
				},
			};

	return (
		<Section id="about" className="justify-center" heading="About Me" number="01">
			<div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-16">
				<motion.div
					className="w-full md:w-4/6 md:mb-0 space-y-4 text-white/90 leading-relaxed"
					variants={listParent}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{PROFILE.ABOUT.map((paragraph, index) => (
						<motion.div key={index} variants={listItem}>
							{paragraph}
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="flex flex-col w-full md:max-w-sm"
					initial={reduceMotion ? false : { opacity: 0, x: 24 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ type: 'spring', stiffness: 90, damping: 22 }}
				>
					<p className="text-primary font-display font-semibold tracking-wide text-sm uppercase">
						Stack & tools
					</p>
					<p className="mt-2 text-white/80 text-sm">Technologies I&apos;ve recently engaged with:</p>
					<motion.ul
						className="columns-2 md:columns-2 list-none p-0 mt-4 gap-x-6"
						variants={listParent}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.15 }}
					>
						{PROFILE.SKILLS.map((skill, index) => (
							<motion.li
								key={index}
								variants={listItem}
								className="relative pl-6 mb-3 text-sm before:content-[''] before:absolute before:left-0 before:top-[0.45em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:shadow-[0_0_10px_rgba(240,219,79,0.6)]"
							>
								{skill}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</div>
		</Section>
	);
};

export default About;
