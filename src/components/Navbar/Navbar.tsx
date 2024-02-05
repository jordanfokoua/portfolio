import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between py-4 px-4 text-white fixed top-0 left-0 w-full z-50 bg-background-4 backdrop-blur-md">
			<Logo className="h-12" />

			<button className="md:hidden z-50 px-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					{isMenuOpen ? (
						<path
							d="M6 18L18 6M6 6l12 12"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					) : (
						<path
							d="M4 6h16M4 12h16M4 18h16"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					)}
				</svg>
			</button>

			<ol
				className={`${styles.navMenu} absolute md:relative md:flex md:items-center top-full left-0 md:left-auto md:top-auto w-full md:w-auto bg-background-4 transition-all duration-300 ease-in-out ${
					isMenuOpen ? 'block' : 'hidden'
				}`}
			>
				{menuItems.map((item) => (
					<li
						key={item.id}
						className="px-3 py-4"
					>
						<a href={item.link}>{item.name}</a>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Navbar;
