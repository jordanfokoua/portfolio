import { Post } from '../types/blog';
import axios from 'axios';

const GHOST_API_URL = 'https://blog-jordanfokoua.ghost.io';
const GHOST_CONTENT_API_KEY = '9d0eaffef0a31750ccfd5b6a14';

export const blogPosts: Post[] = [
	{
		title: 'Boost Your Git Game with Worktrees',
		feature_image:
			'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fHRyZWV8ZW58MHx8fHwxNzI1NDAzMTUxfDA&ixlib=rb-4.0.3&q=80&w=2000',
		published_at: '2024-09-04T00:00:00.000Z',
		slug: 'boost-your-git-game-with-worktrees',
		excerpt:
			'Managing multiple branches in a Git repository can sometimes be cumbersome, especially when switching between them frequently. If you’ve ever wished for an easier way to handle different branches simultaneously without the hassle of constantly stashing or committing changes, Git’s worktree feature is your solution.',
		url: 'https://blog.jordanfokoua.dev/boost-your-git-game-with-worktrees/',
	},
	{
		title: 'Creating a J2EE CRUD app in 10 Steps with JSF + Primefaces + JPA + MySQL',
		feature_image:
			'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGphdmF8ZW58MHx8fHwxNzI1NDEyMzYzfDA&ixlib=rb-4.0.3&q=80&w=2000',
		published_at: '2019-01-02T00:00:00.000Z',
		slug: 'creating-a-j2ee-crud-app-in-10-steps-with-jsf-primefaces-jpa-mysql-1',
		excerpt:
			'This tutorial will guide you through creating a simple CRUD (Create, Read, Update, Delete) application using JavaServer Faces (JSF), the PrimeFaces framework, Java Persistence API (JPA), and the MySQL database management system. The application will perform basic operations (create, read, update, and delete) on data stored in a MySQL database',
		url: 'https://medium.com/hackernoon/creating-a-j2ee-crud-app-in-10-steps-with-jsf-primefaces-jpa-mysql-39a1421b8845',
	},
	{
		title: 'Master Coding while playing',
		feature_image:
			'https://images.unsplash.com/photo-1555864326-5cf22ef123cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE2fHxnYW1lfGVufDB8fHx8MTcyNTQxMjU4MHww&ixlib=rb-4.0.3&q=80&w=2000',
		published_at: '2019-02-04T00:00:00.000Z',
		slug: 'master-coding-while-playing',
		excerpt:
			'Difficulties learning a programming language, understanding some concepts? You are reading the right article. This is a selection of free sites where you can enjoy learning or improving your skills in JavScript, Python, CSS, HTML5, Java, etc by going through a game or various types of challenges.',
		url: 'https://medium.com/hackernoon/master-coding-while-playing-69ff218dc8c5',
	},
];

export const fetchPosts = async () => {
	try {
		const response = await axios.get(`${GHOST_API_URL}/ghost/api/v3/content/posts/`, {
			params: {
				key: GHOST_CONTENT_API_KEY,
				limit: 5, // Fetch a limited number of posts, change as needed
			},
		});
		return response.data.posts;
	} catch (error) {
		console.error('Error fetching posts:', error);
		return [];
	}
};
