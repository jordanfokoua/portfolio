import React from 'react';
import globalStyles from '../../styles/global.module.css';
import Button from '../../shared/Button/Button';
import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
	const sendEmail = () => {
		window.open(`mailto:${PROFILE.EMAIL}`);
	};

	return (
		<Section id="contact" className={`${globalStyles.section} ${styles.contact}`}>
			<h2 className={`${globalStyles.sectionHeading}`}>
				<span className={globalStyles.sectionNumber}>03.{'  '}</span>Let's Get In Touch
			</h2>
			<div className={`${styles.contact}`}>
				<p>{PROFILE.CONTACT_MESSAGE}</p>
				<Button onClick={sendEmail} label="Say Hello" className={`${styles.contactButton}`} />
			</div>
		</Section>
	);
};

export default Contact;
