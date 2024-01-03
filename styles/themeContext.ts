import { Dispatch, SetStateAction, createContext } from 'react';

interface ThemeContextProps {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'dark',
	setTheme: null as never
});
