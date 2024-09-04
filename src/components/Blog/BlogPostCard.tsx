import { Post } from '../../types/blog';

type BlogPostCardProps = {
	post: Post;
};

const truncateExcerpt = (excerpt: string, maxWords: number) => {
	const words = excerpt.split(' ');
	if (words.length > maxWords) {
		return words.slice(0, maxWords).join(' ') + '...';
	}
	return excerpt;
};

const BlogPostCard = (props: BlogPostCardProps) => {
	const { post } = props;
	return (
		<div
			className="bg-[#101010] rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
			onClick={() => window.open(post.url, '_blank')}
		>
			<div
				className="h-64 bg-cover bg-center rounded-t-lg"
				style={{ backgroundImage: `url(${post.feature_image})` }}
			></div>
			<div className="p-5">
				<h2 className="text-xl font-semibold text-gray-900 mb-1">{post.title}</h2>
				<span className="bg-red-600 text-white text-xs font-bold uppercase rounded-lg py-1 ">
					{new Date(post.published_at).toLocaleDateString()}
				</span>
				<p className="text-gray-600 text-sm mb-4">{truncateExcerpt(post.excerpt, 20)}</p>
			</div>
		</div>
	);
};

export default BlogPostCard;
