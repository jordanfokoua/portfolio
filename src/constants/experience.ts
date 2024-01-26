import { Experience } from "../types/experience";

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
			'Conducted proactive technology monitoring in emerging JavaScript and web development technologies, resulting in significant improvements in detection algorithms.',
			'Acted as a technical consultant for the support team, ensuring smooth client integration and resolving complex technical challenges.',
			'Managed critical incidents from identification to resolution, leading post-incident reviews to drive systemic improvements.',
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
			"Spearheaded a team to develop the 'Request Center' module, leveraging technologies like GraphQL, Apollo, MongoDB, Angular, React, and React Native with a Test-Driven Development (TDD) approach.",
			'Integrated external services such as CMMS, wellness, concierge, and catering with Meteor JS, Angular, and React Native.',
			'Established unit and integration testing environments, implemented Continuous Integration (CI) with Git hooks, and documented coding guidelines and READMEs to enhance code quality.',
			'Optimized an event-driven architecture using AWS Lambda, Kinesis Firehose, AWS S3, Hapi.js, and InfluxDB.',
			'Collaborated on revamping the incident module, focusing on backend and frontend improvements.',
			'Enhanced developer infrastructure with custom error handling for the Apollo server, automated integration of webviews and iframes, and streamlined MongoDB transactions and schema management with Plop.',
			'Led a dojo on unit and integration testing, sharing best practices and knowledge with the team.',
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
			'Authored comprehensive technical specifications for the project overhaul, including technical requirements, functional specifications, and needs assessment.',
			'Adhered to best coding practices by integrating Husky, ESLint, and Prettier into the project, ensuring high code quality and consistency.',
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
			'Developed a hybrid e-commerce app with React Native, integrating push notifications (One Signal to Batch), unit tests (Jest/Enzyme), and deployed via Fastlane.',
			'Worked with a 5-member team on a VueJs e-commerce platform overhaul, focusing on UI components, RESTFUL API integration, Jest testing, and VueX state management.',
			'Enhanced API security with Node Js, Express Js, Sequelize, and Passport.js for robust authentication.',
			'Implemented shipping (Chronopost, UPS, Colissimo) and Paygreen payment APIs for comprehensive tracking and payment features.',
			'Optimized backend to handle 12,000 requests/second for flash sales, using Sequelize data models and efficient request queuing.',
			'Contributed to integration testing with Mocha, Chai, Sinon, and enforced coding best practices with code reviews, linting, and Git hooks.',
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
