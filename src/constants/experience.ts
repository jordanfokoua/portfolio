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
			"Led development and maintenance of DataDome's JavaScript tags and server-side modules, including Node.js and Cloudflare, enhancing client integration.",
			"Established best practices for deployment, optimizing JavaScript components' performance, resilience, security, and privacy.",
			'Acted as a technical consultant for the support team, ensuring smooth client integration and resolving complex technical challenges.',
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
			"Led 'Request Center' module development with GraphQL, Apollo, MongoDB, Angular, React, and React Native using TDD.",
			'Set up unit/integration testing, Continuous Integration via Git hooks, and documented coding standards for quality improvement.',
			'Utilized AWS Lambda, Kinesis Firehose, S3, Hapi.js, and InfluxDB for an optimized event-driven architecture.',
			'Upgraded developer tools with custom Apollo server error handling, webviews/iframe integration, and efficient MongoDB schema management.',
		],
	},
	{
		id: 3,
		title: 'Software Engineer',
		company: 'CANAL+',
		company_url: 'https://www.canalplus.com/',
		year: 'May 2020 - October 2020',
		description:
			'CANAL+ is a French premium television channel launched in 1984. It is 100% owned by the Canal+ Group, which in turn is owned by Vivendi SA.',
		details: [
			'Implemented a graphical visualization module using HighchartsJS for enhanced data representation.',
			'Optimized SQL queries reducing the load time of graphs with over 1000 curves from 16 seconds to just 10 seconds, significantly improving performance.',
			'Managed the migration from Node v5 to Node v12 on a remote AWS EC2 instance, utilizing Docker and SSH tunneling for a seamless transition.',
		],
	},
	{
		id: 4,
		title: 'Software Engineer',
		company: 'eFashion Paris',
		company_url: 'https://www.efashion-paris.com/',
		year: 'April 2019 - January 2020',
		description:
			'eFashion Paris is a B2B marketplace for fashion professionals. It is a subsidiary of the French Federation of Women’s Ready-to-Wear.',
		details: [
			'Built a React Native e-commerce app, incorporating push notifications, unit testing, and Fastlane deployment.',
			'Contributed to a VueJs e-commerce site revamp with a team, focusing on UI, API integration, testing, and state management.',
			'Strengthened API security using Node Js, Express Js, and Passport.js for enhanced authentication.',
			'Integrated shipping and payment APIs for full-featured tracking and transactions.',
			'Boosted backend performance to manage 12K requests/second during flash sales by optimizing Sequelize models and request handling.',
		],
	},
	{
		id: 5,
		title: 'Frontend Developer',
		company: 'Dipita Technologies',
		company_url: 'https://www.seedstarsworld.com/startup/66462/',
		year: 'June 2017 - January 2019',
		description:
			'Dipita Technologies is a startup that provides innovative solutions to improve the quality of life of people in Africa.',
		details: [
			'Developed desktop, web apps, and PWAs using React, VueJs, and Electron with a TDD approach (unit and integration tests).',
			'Created a hybrid mobile app for vehicle technical inspections with Ionic, managing bookings and push notifications via One Signal.',
			'Deployed 2 web applications for staff management using Vue.Js, consuming an Express-REST API.',
			'Extended Ionic framework capabilities to build a complete e-commerce application.',
		],
	},
];
