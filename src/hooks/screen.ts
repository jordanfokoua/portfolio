import { RefObject, useState, useEffect } from 'react';

export const useOnScreen = (ref: RefObject<Element>, rootMargin: string = '0px'): boolean => {
	const [isIntersecting, setIntersecting] = useState<boolean>(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
			{
				rootMargin,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [ref, rootMargin]);

	return isIntersecting;
};
