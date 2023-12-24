'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface ThemeContextProps {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'dark',
	setTheme: null as any
});

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
