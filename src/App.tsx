import './App.css';

import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
// Components
import Navbar from './components/Navbar/Navbar';
import React from 'react';
// Shared components
import ScrollColorChange from './shared/ScrollColorChange';
import SocialIcons from './components/SocialIcons/SocialIcons';

const App: React.FC = () => {
	return (
		<ScrollColorChange className='px-4 md:px-52' >
			<SocialIcons />
			<Navbar />
			<Intro />
			<About />
			<Experience />
			<Blog />
			<Contact />
			<Footer />
		</ScrollColorChange>
	);
};

export default App;
