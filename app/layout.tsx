'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang="en">
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<body
					className={`${inter.className} ${
						theme === 'dark' ? 'dark-theme' : 'light-theme'
					}`}
				>
					{children}
				</body>
			</ThemeContext.Provider>
		</html>
	);
}
