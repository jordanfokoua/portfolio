import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<Logo />

			<ol className={styles.navMenu}>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ol>
		</nav>
	);
};

export default Navbar;
