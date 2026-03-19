import { motion, useReducedMotion } from 'framer-motion';
import Button from '../../shared/Button/Button';
import { PROFILE } from '../../constants/profile';
import React from 'react';
import Section from '../../shared/Section/Section';

const Contact: React.FC = () => {
	const reduceMotion = useReducedMotion();

	const sendEmail = () => {
		window.open(`mailto:${PROFILE.EMAIL}`);
	};

	return (
		<Section id="contact" className="justify-center" heading="Let's Get In Touch" number="04">
			<div className="flex flex-col items-center max-w-xl mx-auto text-center">
				<motion.p
					className="text-white/85 mb-8 text-lg leading-relaxed"
					initial={reduceMotion ? false : { opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ type: 'spring', stiffness: 100, damping: 22 }}
				>
					{PROFILE.CONTACT_MESSAGE}
				</motion.p>
				<motion.div
					className="contact-cta-glow rounded-xl p-[2px]"
					initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
				>
					<div className="rounded-[10px] bg-background-3/90 backdrop-blur-sm px-1 py-1">
						<Button
							onClick={sendEmail}
							label="Say Hello"
							className="self-center font-display font-bold tracking-wide py-3 px-8 rounded-lg border-2 border-primary"
						/>
					</div>
				</motion.div>
			</div>
		</Section>
	);
};

export default Contact;
