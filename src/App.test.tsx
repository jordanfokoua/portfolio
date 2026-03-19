import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
	test('renders intro greeting', async () => {
		render(<App />);
		expect(await screen.findByText(/Hello, I am/i)).toBeInTheDocument();
	});
});
