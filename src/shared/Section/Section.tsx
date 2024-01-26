import React, { useRef, useEffect, useState, ReactNode, FC } from 'react';
import { useOnScreen } from '../../hooks/screen';
import globalStyles from '../../styles/global.module.css';
import FadeInOut from '../FadeInOut';

interface SectionProps {
	children: ReactNode;
	className?: string;
	id: string;
}

const Section: FC<SectionProps> = ({ children, ...props }) => {
	const { id, className = '' } = props;
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);
	const [hasAppeared, setHasAppeared] = useState(false);

	useEffect(() => {
		if (isVisible && !hasAppeared) {
			setHasAppeared(true);
		}
	}, [isVisible, hasAppeared]);

	return (
		<section id={id} ref={ref} className={`${globalStyles.section} ${className}`}>
			{hasAppeared ? (
				<FadeInOut show={true} duration={500} animation="in">
					{children}
				</FadeInOut>
			) : (
				<>{children}</>
			)}
		</section>
	);
};

export default Section;
