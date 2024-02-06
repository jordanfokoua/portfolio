import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import HamburgerMenu from '../../shared/Menu/Hamburger';

interface MenuItem {
	id: number;
	name: string;
	link: string;
}

const menuItems: MenuItem[] = [
	{
		id: 1,
		name: 'About',
		link: '#about',
	},
	{
		id: 2,
		name: 'Experience',
		link: '#experience',
	},
	{
		id: 3,
		name: 'Contact',
		link: '#contact',
	},
];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = (value: boolean) => {
		setIsOpen(value);
	};

	return (
		<nav
			className="flex items-center justify-between py-4 px-4 text-white fixed top-0 left-0 w-full z-50 bg-background-4 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-background-4"
		>
			<Logo />

			<HamburgerMenu onClick={handleMenuClick} />

			<ol
				className={`absolute md:relative md:flex md:items-center top-full left-0 md:left-auto md:top-auto w-full md:w-auto bg-background-4 transition-all ease-out duration-300 transform ${
					isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
				} md:translate-y-0 md:opacity-100`}
			>
				{menuItems.map((item, index) => (
					<li key={item.id} className="px-3 py-2 md:py-0">
						<a href={item.link} className="block md:inline-block">
							<span className="mr-2 font-bold">{`${index + 1}.`}</span>
							{item.name}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Navbar;
