import Button from '../../shared/Button/Button';
import { PROFILE } from '../../constants/profile';
import React from 'react';
import Section from '../../shared/Section/Section';

const Contact: React.FC = () => {
	const sendEmail = () => {
		window.open(`mailto:${PROFILE.EMAIL}`);
	};

	return (
		<Section id="contact" className="justify-center" heading="Let's Get In Touch" number="04">
			<div className="flex flex-col items-center">
				<p className="text-center  mb-4">{PROFILE.CONTACT_MESSAGE}</p>
				<Button
					onClick={sendEmail}
					label="Say Hello"
					className="self-center bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
				/>
			</div>
		</Section>
	);
};

export default Contact;
