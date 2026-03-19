import { motion, useReducedMotion } from 'framer-motion';
import { Post } from '../../types/blog';

type BlogPostCardProps = {
	post: Post;
	index?: number;
};

const truncateExcerpt = (excerpt: string, maxWords: number) => {
	const words = excerpt.split(' ');
	if (words.length > maxWords) {
		return words.slice(0, maxWords).join(' ') + '...';
	}
	return excerpt;
};

const BlogPostCard = (props: BlogPostCardProps) => {
	const { post, index = 0 } = props;
	const reduceMotion = useReducedMotion();

	return (
		<motion.article
			className="group relative cursor-pointer rounded-2xl border border-primary/15 bg-background-2/50 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
			onClick={() => window.open(post.url, '_blank')}
			initial={reduceMotion ? false : { opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ delay: reduceMotion ? 0 : 0.08 * index, type: 'spring', stiffness: 80, damping: 22 }}
			whileHover={
				reduceMotion
					? undefined
					: {
							y: -10,
							boxShadow: '0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(240,219,79,0.25)',
						}
			}
			whileTap={{ scale: 0.99 }}
		>
			<div className="relative h-56 md:h-64 overflow-hidden">
				<motion.div
					className="h-full w-full bg-cover bg-center"
					style={{ backgroundImage: `url(${post.feature_image})` }}
					whileHover={reduceMotion ? undefined : { scale: 1.06 }}
					transition={{ duration: 0.45, ease: 'easeOut' }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background-4/90 via-transparent to-transparent opacity-90" />
			</div>
			<div className="relative p-5 md:p-6">
				<span className="inline-block rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
					{new Date(post.published_at).toLocaleDateString()}
				</span>
				<h2 className="mt-3 font-display text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
					{post.title}
				</h2>
				<p className="text-grey text-sm mt-2 leading-relaxed line-clamp-3">{truncateExcerpt(post.excerpt, 22)}</p>
				<span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
					Read article
					<span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
						→
					</span>
				</span>
			</div>
		</motion.article>
	);
};

export default BlogPostCard;
