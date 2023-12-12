'use client';

import { useContext } from 'react';
import { ThemeContext } from './layout';
import Header from '@/components/Header';

export default function Home() {
	const { theme, setTheme } = useContext(ThemeContext);

	function toggleTheme() {
		return theme === 'dark' ? 'light' : 'dark';
	}

	return (
		<main>
			<div className="hero">
				<Header />
				<button onClick={() => setTheme(toggleTheme())}>Toggle !</button>
			</div>
		</main>
	);
}
