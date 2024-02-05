import React from 'react';
import Button from '../../shared/Button/Button';
import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
	const sendEmail = () => {
		window.open(`mailto:${PROFILE.EMAIL}`);
	};

	return (
		<Section id="contact" className='justify-center' heading="Let's Get In Touch" number="03">
			<div className={`${styles.contact}`}>
				<p>{PROFILE.CONTACT_MESSAGE}</p>
				<Button onClick={sendEmail} label="Say Hello" className={`${styles.contactButton}`} />
			</div>
		</Section>
	);
};

export default Contact;
