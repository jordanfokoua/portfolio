import React, { useState } from 'react';
import styles from './ExperienceTimeline.module.css';
import { EXPERIENCES } from '../../constants/experience';
import { Experience } from '../../types/experience';
import FadeInOut from '../../shared/FadeInOut';

const ExperienceTimeline = () => {
	const [selectedXp, setSelectedXp] = useState<any>(EXPERIENCES[0]);
	const [show, setShow] = useState(true);

	const handleSelect = (exp: Experience) => {
		setShow(false);
		setTimeout(() => {
			setSelectedXp(exp);
		}, 300);
		setTimeout(() => {
			setShow(true);
		}, 500);
	};

	return (
		<div className={styles.timelineContainer}>
			<div className={styles.timelineDots}>
				{}
				{EXPERIENCES.map((exp) => (
					<div
						key={exp.id}
						className={styles.timelineItem}
						onClick={() => handleSelect(exp)}
						role="button"
						aria-label={`Select experience at ${exp.company}`}
					>
						<div
							className={`${styles.timelineDot} ${
								selectedXp?.id === exp.id ? styles.selected : ''
							}`}
						></div>
						<span className={styles.companyName}>{exp.company}</span>
					</div>
				))}
			</div>

			<div className={`${styles.xpContent}`}>
				<FadeInOut show={show} duration={200}>
					<div className={`${styles.xpContentTitle}`}>
						{selectedXp?.title}{' '}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className={`companyHandle`}
							href={selectedXp?.company_url}
							data-replace={'@ ' + selectedXp?.company}
						>
							<span> @ {selectedXp?.company}</span>
						</a>
					</div>
					<span>{selectedXp?.year}</span>
					<p>{selectedXp?.description}</p>
					{selectedXp?.details && (
						<div className={styles.details}>
							<ul>
								{selectedXp?.details.map((detail: any) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						</div>
					)}
				</FadeInOut>
			</div>
		</div>
	);
};

export default ExperienceTimeline;
