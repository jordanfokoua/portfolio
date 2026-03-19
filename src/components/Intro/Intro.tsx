import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { TypeAnimation } from 'react-type-animation';
import Section from '../../shared/Section/Section';
import { PROFILE } from '../../constants/profile';

const Intro: React.FC = () => {
	const reduceMotion = useReducedMotion();

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

	const orbMotion = reduceMotion
		? {}
		: {
				animate: {
					scale: [1, 1.06, 1],
					opacity: [0.35, 0.5, 0.35],
				},
				transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
			};

	return (
		<Section
			id="intro"
			className="relative flex flex-col justify-center items-start h-screen text-white overflow-hidden"
		>
			{!reduceMotion && (
				<>
					<motion.div
						className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
						{...orbMotion}
					/>
					<motion.div
						className="pointer-events-none absolute -right-16 bottom-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
						animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
						transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
					/>
				</>
			)}

			<div className="relative z-[1] max-w-4xl">
				<animated.p style={greetingProps} className="text-primary text-base font-medium tracking-wide mt-2">
					Hello, I am
				</animated.p>

				<animated.div style={nameProps} className="w-full lg:w-auto mt-3">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, filter: 'blur(8px)' }}
						animate={reduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)' }}
						transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
					>
						<TypeAnimation
							sequence={[`${PROFILE.NAME} ${PROFILE.LASTNAME}.`, 1000]}
							wrapper="span"
							speed={10}
							style={{ fontSize: '3em', fontWeight: 700 }}
							repeat={Infinity}
							className="font-display text-5xl lg:text-7xl font-bold block tracking-tight text-white [text-shadow:0_0_48px_rgba(240,219,79,0.25)]"
						/>
					</motion.div>
				</animated.div>

				<animated.h3
					style={roleProps}
					className="text-grey text-xl lg:text-2xl mt-4 font-medium tracking-wide"
				>
					{PROFILE.ROLE}
				</animated.h3>
				<animated.p
					style={descriptionProps}
					className="max-w-full lg:max-w-[36rem] text-left text-base lg:text-lg leading-relaxed mt-4 text-white/85"
				>
					Delving into the realm of full stack web application development, I combine innovation with
					technical expertise. Currently, I'm applying my skills as a bot buster
					<a
						className="companyHandle text-primary no-underline hover:underline"
						target="_blank"
						rel="noopener noreferrer"
						href={PROFILE.COMPANY_URL}
						data-replace={`@${PROFILE.COMPANY_NAME}`}
					>
						<span>@{PROFILE?.COMPANY_NAME}</span>
					</a>
				</animated.p>
			</div>

			<motion.a
				href="#about"
				className="absolute bottom-10 left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center gap-2 text-primary/80 text-xs font-semibold uppercase tracking-[0.2em] md:left-[calc(50%-4rem)]"
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.4, duration: 0.5 }}
			>
				<span>Scroll</span>
				<span className="scroll-hint inline-block h-8 w-5 rounded-full border-2 border-primary/50 p-1">
					<span className="block h-2 w-1 rounded-full bg-primary mx-auto" />
				</span>
			</motion.a>
		</Section>
	);
};

export default Intro;
