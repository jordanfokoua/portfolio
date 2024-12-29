import { Experience } from '../types/experience';

export const EXPERIENCES: Experience[] = [
	{
		id: 1,
		title: 'Software Engineer',
		company: 'DataDome',
		company_url: 'https://datadome.co/',
		year: 'April 2023 - Present',
		description:
			'Bot protection platform that leverages machine learning to protect websites, mobile apps and APIs from automated threats without impacting the flow of business-critical traffic.',
		details: [
			'Responsible for the development, ownership, and maintenance of our JavaScript SDK modules and components, widely used by customers around the world.',
			'Reduced Total Blocking Time (TBT) by 91% and bundle size of our JavaScript SDK by 53%, improving website performance for 400+ customers across 2,000+ applications by optimizing and refactoring code.',
			'Developed and implemented CI/CD workflows using GitHub Actions, Jenkins, Docker, and CircleCI, increasing deployment efficiency by 70%.',
			'Increased test coverage to 86% for JavaScript SDK by integrating Puppeteer, Mocha, Jest, and WebDriverIO, ensuring robust codebases and reducing production bugs by 40%.',
			'Migrated bundling tools from Gulp and Browserify to Rollup, resulting in a 53% reduction in bundle size and faster load times, thereby improving user experience.',
		],
	},
	{
		id: 2,
		title: 'Software Engineer',
		company: 'Witco',
		company_url: 'https://witco.io/',
		year: 'January 2021 - March 2023',
		description:
			'Witco is a SaaS platform that helps companies improve their employees’ experience by providing a single point of contact for all their needs.',
		details: [
			'Led a team of four to refactor a user-facing incident module into a ticket-based “Requests Center,” enhancing extensibility and test coverage, improving user experience and stability, and reducing incident resolution time by 40%.',
			'Maintained an event-driven architecture for statistics (using AWS Lambda, Kinesis Firehose, AWS S3, Hapi.js, and InfluxDB) that handled up to 500,000 events per day with a 99.9% success rate.',
			'Optimized MongoDB operations by using the ESR Rule to handle dynamic filters, complex sorting, and range-based queries, lowering average query times from 5–10 seconds to under 1 second.',
			'Handled customer-facing support tasks, collaborating closely with integration partners and end users to tailor solutions for seamless data exchanges and improved user satisfaction.',
		],
	},
	{
		id: 3,
		title: 'Software Engineer',
		company: 'CANAL+',
		company_url: 'https://www.canalplus.com/',
		year: 'December 2019 - October 2020',
		description:
			'CANAL+ is a French premium television channel launched in 1984. It is 100% owned by the Canal+ Group, which in turn is owned by Vivendi SA.',
		details: [
			'Led a complete overhaul of a back-office web application using React, Redux for state management, and Storybook for UI documentation—significantly streamlining development.',
			'Implemented robust unit and integration testing with Jest, achieving 84% coverage, ensuring code reliability and maintainability.',
			'Optimized SQL queries for Highcharts visualizations, cutting load times from 16 seconds to 10 seconds.',
			'Migrated Node.js from v5 to v12 on a remote AWS EC2 instance using Docker and SSH tunneling, boosting performance and security.',
		],
	},
	{
		id: 4,
		title: 'Software Engineer',
		company: 'eFashion Paris',
		company_url: 'https://www.efashion-paris.com/',
		year: 'December 2018 - October 2019',
		description:
			'eFashion Paris is a B2B marketplace for fashion professionals. It is a subsidiary of the French Federation of Women’s Ready-to-Wear.',
		details: [
			'Scaled from 4,000 to 12,000 requests/second during flash sales by improving database queries, adding a CDN, and tuning service architecture, message queues, and Sequelize models.',
			'Built a hybrid e-commerce mobile app with React Native, Redux, Styled Components, and Storybook, set up push notifications (OneSignal & Batch), and deployed the first version to both app stores using Fastlane.',
			'Redesigned an e-commerce platform and dashboard with a team of five developers using Vue.js, Vuex, Jest, and RESTful APIs.',
			'Integrated shipping and payment APIs (Chronopost, La Poste, UPS, Colissimo, PayGreen) for tracking and transactions.',
			'Used Mocha, Chai, and Sinon for integration tests, reviewed code, and followed best practices such as linting and Git hooks.',
		],
	},
	{
		id: 5,
		title: 'Frontend Developer',
		company: 'Dipita Technologies',
		company_url: 'https://www.seedstarsworld.com/startup/66462/',
		year: 'June 2017 - September 2018',
		description:
			'Dipita Technologies is a startup that provides innovative solutions to improve the quality of life of people in Africa.',
		details: [
			'Developed desktop, web, and PWA applications with React, Vue.js, and Electron.',
			'Contributed to a hybrid mobile app for vehicle inspections using Ionic, integrating appointment management and push notifications via OneSignal.',
			'Deployed two staff management web apps using Vue.js, backed by an Express-REST API.',
			'Built a full e-commerce application with Ionic.',
		],
	},
];
