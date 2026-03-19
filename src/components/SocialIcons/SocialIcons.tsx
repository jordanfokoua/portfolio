import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROFILE } from '../../constants/profile';
import { animated, useTrail } from '@react-spring/web';

const socialIcons = [
	{ name: 'GitHub', href: 'https://github.com/' + PROFILE.GITHUB, iconClass: 'fab fa-github' },
	{ name: 'Medium', href: 'https://medium.com/' + PROFILE.MEDIUM, iconClass: 'fab fa-medium' },
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/' + PROFILE.LINKEDIN,
		iconClass: 'fab fa-linkedin',
	},
	{ name: 'Twitter', href: 'https://twitter.com/' + PROFILE.TWITTER, iconClass: 'fab fa-twitter' },
	{ name: 'Email', href: 'mailto:' + PROFILE.EMAIL, iconClass: 'fas fa-envelope' },
];

const SocialIcons: React.FC = () => {
	const reduceMotion = useReducedMotion();
	const trail = useTrail(socialIcons.length, {
		from: { opacity: 0, transform: 'translateY(20px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
	});

	return (
		<div className="hidden md:flex flex-col items-center fixed left-0 bottom-0 p-5 z-50 space-y-4">
			{trail.map((props, index) => (
				<motion.div key={socialIcons[index].name} whileHover={reduceMotion ? undefined : { y: -4, scale: 1.08 }}>
					<animated.a
						href={socialIcons[index].href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-xl transition-colors duration-300 hover:text-primary block drop-shadow-[0_0_12px_rgba(240,219,79,0.15)]"
						style={props}
					>
						<i className={socialIcons[index].iconClass}></i>
					</animated.a>
				</motion.div>
			))}
			<motion.div
				className="w-px h-24 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent origin-top"
				initial={reduceMotion ? false : { scaleY: 0 }}
				animate={{ scaleY: 1 }}
				transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
			/>
		</div>
	);
};

export default SocialIcons;
