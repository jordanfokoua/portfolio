import { useRef, useEffect, useState, ReactNode, FC } from 'react';
import { useOnScreen } from '../../hooks/screen';
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
		<section
			id={id}
			ref={ref}
			className={`flex flex-col justify-center self-center items-center h-screen px-[10vw] border-t border-primary text-left text-white leading-normal ${className}`}
		>
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
