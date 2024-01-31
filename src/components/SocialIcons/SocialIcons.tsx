import React from 'react';
import { PROFILE } from '../../constants/profile';

const socialIcons = [
	{
		name: 'GitHub',
		href: 'https://github.com/' + PROFILE.GITHUB,
		iconClass: 'fab fa-github',
	},
	{
		name: 'Medium',
		href: 'https://medium.com/' + PROFILE.MEDIUM,
		iconClass: 'fab fa-medium',
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/' + PROFILE.LINKEDIN,
		iconClass: 'fab fa-linkedin',
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/' + PROFILE.TWITTER,
		iconClass: 'fab fa-twitter',
	},
	{
		name: 'Email',
		href: 'mailto:' + PROFILE.EMAIL,
		iconClass: 'fas fa-envelope',
	},
];

const SocialIcons: React.FC = () => {
	return (
		<div className="hidden md:flex flex-col items-center fixed left-0 bottom-0 p-5 z-50 space-y-4">
			{socialIcons.map((icon) => (
				<a
					key={icon.name}
					href={icon.href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-xl transition-colors duration-300 hover:text-primary hover:scale-110"
				>
					<i className={icon.iconClass}></i>
				</a>
			))}
			<div className="w-px h-24 bg-white"></div>
		</div>
	);
};

export default SocialIcons;
