import React from 'react';
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
	const trail = useTrail(socialIcons.length, {
		from: { opacity: 0, transform: 'translateY(20px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
	});

	return (
		<div className="hidden md:flex flex-col items-center fixed left-0 bottom-0 p-5 z-50 space-y-4">
			{trail.map((props, index) => (
				<animated.a
					key={socialIcons[index].name}
					href={socialIcons[index].href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-xl transition-colors duration-300 hover:text-primary hover:scale-110"
					style={props}
				>
					<i className={socialIcons[index].iconClass}></i>
				</animated.a>
			))}
			<div className="w-px h-24 bg-white"></div>
		</div>
	);
};

export default SocialIcons;
