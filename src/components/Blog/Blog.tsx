import BlogPostCard from './BlogPostCard';
import { Post } from '../../types/blog';
import React from 'react';
import Section from '../../shared/Section/Section';
import { blogPosts } from '../../services/post.service';

const Blog: React.FC = () => {
	// const [posts, setPosts] = useState([...blogPosts]);

	// useEffect(() => {
	// 	const loadPosts = async () => {
	// 		const fetchedPosts = await fetchPosts();
	// 		console.log('🚀 ~ loadPosts ~ fetchedPosts:', fetchedPosts);
	// 		setPosts([ ...fetchedPosts, ...posts]);
	// 	};

	// 	loadPosts();
	// }, []);

	return (
		<Section id="blog" className="justify-center" heading="My latest articles" number="03">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-8">
				{blogPosts.map((post: Post, index: number) => (
					<BlogPostCard post={post} key={index} />
				))}
			</div>
		</Section>
	);
};

export default Blog;
