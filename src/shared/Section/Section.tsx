import { useRef, useEffect, useState, ReactNode, FC } from 'react';
import { useOnScreen } from '../../hooks/screen';
import FadeInOut from '../FadeInOut';

interface SectionProps {
	children: ReactNode;
	className?: string;
	id: string;
	number?: string;
	heading?: string;
}

const Section: FC<SectionProps> = ({ children, ...props }) => {
	const { id, className = '', number, heading } = props;
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
			className={`flex flex-col justify-start md:justify-center h-screen px-[4vw] border-b border-primary text-left text-white leading-normal ${className}`}
		>
			{hasAppeared ? (
				<FadeInOut show={true} duration={500} animation="in">
					{heading && (
						<h2 className="mb-8 text-3xl text-[#F0DB4F]">
							<span className="text-white text-xl font-light mr-1">
								{number ? number + '. ' : ''}
							</span>
							{heading}
						</h2>
					)}
					{children}
				</FadeInOut>
			) : (
				<>{children}</>
			)}
		</section>
	);
};

export default Section;
