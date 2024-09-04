import React from 'react';

interface HamburgerMenuProps {
	onClick: (isOpen: boolean) => void;
	isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick, isOpen }) => {
	const handleMenuClick = () => {
		onClick(!isOpen);
	};

	return (
		<button
			onClick={handleMenuClick}
			className="md:hidden z-50 focus:outline-none relative w-12 h-12"
			aria-label="Toggle menu"
		>
			<div
				className={`w-full h-full flex justify-center items-center relative transition-transform duration-300 ${
					isOpen ? 'rotate-45' : 'rotate-0'
				}`}
			>
				<div
					className={`absolute transition-opacity duration-300 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M3 6h18M3 12h18M3 18h18" />
					</svg>
				</div>
				<div
					className={`absolute rotate-45 transition-opacity duration-300 ${
						isOpen ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			</div>
		</button>
	);
};

export default HamburgerMenu;
