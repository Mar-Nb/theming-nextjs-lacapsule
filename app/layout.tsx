'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeContext } from '@/styles/themeContext';
import { useState } from 'react';

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState('dark');

	return (
		<html lang="fr">
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<GlobalStyles />
				<body className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
					{children}
				</body>
			</ThemeContext.Provider>
		</html>
	);
}
