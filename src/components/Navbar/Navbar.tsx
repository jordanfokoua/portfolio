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

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className="flex items-center justify-between py-4 px-4 text-white fixed top-0 left-0 w-full z-50 bg-background-4 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-background-4">
			<Logo />

			<HamburgerMenu onClick={toggleMenu} />

			<div
				className={`absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-background-4 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} md:hidden`}
			>
				{menuItems.map((item, index) => (
					<a key={item.id} href={item.link} className="text-xl text-white py-2" onClick={closeMenu}>
						<span className="font-bold">{`${index + 1}.`}</span> {item.name}
					</a>
				))}
			</div>

			<ol className={`hidden md:flex md:items-center space-x-8`}>
				{menuItems.map((item, index) => (
					<li key={item.id}>
						<a href={item.link} className="flex items-center" onClick={closeMenu}>
							<span className="font-bold text-primary mr-2">{`${index + 1}.`}</span>
							{item.name}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Navbar;
