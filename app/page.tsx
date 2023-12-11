'use client';

import { useContext } from 'react';
import { ThemeContext } from './layout';

export default function Home() {
	const { theme, setTheme } = useContext(ThemeContext);

	function toggleTheme() {
		return theme === 'dark' ? 'light' : 'dark';
	}

	return (
		<main>
			<div>
				<button onClick={() => setTheme(toggleTheme())}>Toggle !</button>
			</div>
		</main>
	);
}
