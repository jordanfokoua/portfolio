import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

class IntersectionObserverMock implements IntersectionObserver {
	readonly root = null;
	readonly rootMargin = '';
	readonly thresholds = [];
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
	takeRecords = () => [];
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: IntersectionObserverMock,
});
