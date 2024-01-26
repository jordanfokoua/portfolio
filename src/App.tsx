import React from 'react';
// Components
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SocialIcons from './components/SocialIcons/SocialIcons';
// Shared components
import ScrollColorChange from './shared/ScrollColorChange';

import './App.css';

const App: React.FC = () => {
	return (
		<ScrollColorChange className="App">
			<SocialIcons />
			<Navbar />
			<Intro />
			<About />
			<Experience />
			<Contact />
			<Footer />
		</ScrollColorChange>
	);
};

export default App;
