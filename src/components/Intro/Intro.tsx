import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { TypeAnimation } from 'react-type-animation';
import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';

const Intro: React.FC = () => {
	const greetingProps = useSpring({
		from: { opacity: 0, transform: 'translateY(20px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
		delay: 100,
	});

	const nameProps = useSpring({
		from: { opacity: 0, transform: 'translateY(20px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
		delay: 400,
	});

	const roleProps = useSpring({
		from: { opacity: 0, transform: 'translateY(20px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
		delay: 700,
	});

	const descriptionProps = useSpring({
		from: { opacity: 0, transform: 'translateY(20px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
		delay: 1000,
	});

	return (
		<Section id="intro" className="flex flex-col justify-center items-start h-screen text-white">
			<animated.p style={greetingProps} className="text-primary text-base font-light mt-2">
				Hello, I am
			</animated.p>

			<animated.div style={nameProps} className="w-full lg:w-auto mt-2">
				<TypeAnimation
					sequence={[`${PROFILE.NAME} ${PROFILE.LASTNAME}.`, 1000]}
					wrapper="span"
					speed={10}
					style={{ fontSize: '3em', fontWeight: 600 }}
					repeat={Infinity}
					className="text-5xl lg:text-6xl font-bold block"
				/>
			</animated.div>

			<animated.h3 style={roleProps} className="text-grey-300 text-2xl lg:text-3xl mt-2">
				{PROFILE.ROLE}
			</animated.h3>
			<animated.p
				style={descriptionProps}
				className="max-w-full lg:max-w-[32vw] text-left text-lg leading-relaxed mt-2"
			>
				Delving into the realm of full stack web application development, I combine innovation with
				technical expertise. Currently, I'm applying my skills as a bot buster
				<a
					className="companyHandle text-primary no-underline hover:underline"
					target="_blank"
					rel="noopener noreferrer"
					href={PROFILE.COMPANY_URL}
					data-replace={`@ ${PROFILE.COMPANY_NAME}`}
				>
					<span> @ {PROFILE?.COMPANY_NAME}</span>
				</a>
			</animated.p>
		</Section>
	);
};

export default Intro;
