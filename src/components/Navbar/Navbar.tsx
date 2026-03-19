import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import HamburgerMenu from '../../shared/Menu/Hamburger';
import Logo from '../Logo/Logo';

interface MenuItem {
	id: number;
	name: string;
	link: string;
}

const menuItems: MenuItem[] = [
	{ id: 1, name: 'About', link: '#about' },
	{ id: 2, name: 'Experience', link: '#experience' },
	{ id: 3, name: 'Blog', link: '#blog' },
	{ id: 4, name: 'Contact', link: '#contact' },
];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const reduceMotion = useReducedMotion();

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<motion.nav
			className="flex items-center justify-between py-4 px-4 text-white fixed top-0 left-0 w-full z-50 border-b border-primary/15 bg-background-4/70 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background-4/50"
			initial={reduceMotion ? false : { y: -16, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: 'spring', stiffness: 120, damping: 22 }}
		>
			<motion.div whileHover={reduceMotion ? undefined : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
				<a href="#intro" className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80">
					<Logo />
				</a>
			</motion.div>

			<HamburgerMenu onClick={toggleMenu} isOpen={isOpen} />

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-background-4/98 z-40 md:hidden"
						initial={{ opacity: 0, x: -24 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -24 }}
						transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
					>
						{menuItems.map((item, index) => (
							<motion.a
								key={item.id}
								href={item.link}
								className="text-xl text-white py-3 font-medium"
								onClick={closeMenu}
								initial={reduceMotion ? false : { opacity: 0, x: -12 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: reduceMotion ? 0 : 0.05 * index }}
							>
								<span className="font-display text-primary mr-2 tabular-nums">{`${index + 1}.`}</span>
								{item.name}
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<ol className="hidden md:flex md:items-center gap-2 lg:gap-8">
				{menuItems.map((item, index) => (
					<li key={item.id}>
						<a
							href={item.link}
							className="group relative flex items-center px-1 py-1 text-sm font-medium tracking-wide text-white/90 hover:text-white transition-colors"
							onClick={closeMenu}
						>
							<span className="font-display text-primary mr-2 tabular-nums text-base">{`${index + 1}.`}</span>
							{item.name}
							{!reduceMotion && (
								<motion.span
									className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-primary shadow-[0_0_12px_rgba(240,219,79,0.5)]"
									initial={{ scaleX: 0 }}
									whileHover={{ scaleX: 1 }}
									transition={{ type: 'spring', stiffness: 380, damping: 30 }}
								/>
							)}
						</a>
					</li>
				))}
			</ol>
		</motion.nav>
	);
};

export default Navbar;
