import { FC, ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
	reducedFadeVariants,
	sectionContainerVariants,
	sectionItemVariants,
} from '../motionConfig';

interface SectionProps {
	children: ReactNode;
	className?: string;
	id: string;
	number?: string;
	heading?: string;
}

const Section: FC<SectionProps> = ({ children, id, className = '', number, heading }) => {
	const reduceMotion = useReducedMotion();
	const containerVariants: Variants = reduceMotion ? reducedFadeVariants : sectionContainerVariants;
	const itemVariants: Variants = reduceMotion
		? reducedFadeVariants
		: sectionItemVariants;

	return (
		<motion.section
			id={id}
			className={`flex flex-col justify-start md:justify-center px-[4vw] text-left text-white leading-normal ${className} min-h-screen border-b border-primary/25`}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
			variants={containerVariants}
		>
			{heading && (
				<motion.div variants={itemVariants} className="mb-8 mt-4">
					<h2 className="font-display text-3xl md:text-4xl tracking-tight text-primary drop-shadow-[0_0_24px_rgba(240,219,79,0.15)]">
						<span className="text-white/90 text-lg md:text-xl font-medium mr-2 tabular-nums">
							{number ? `${number}.` : ''}
						</span>
						{heading}
					</h2>
				</motion.div>
			)}
			<motion.div variants={itemVariants}>{children}</motion.div>
		</motion.section>
	);
};

export default Section;
