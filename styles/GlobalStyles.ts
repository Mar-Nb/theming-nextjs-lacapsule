import { createGlobalStyle, css } from 'styled-components';
import { Inter } from 'next/font/google';
import { GlobalTheme } from './GlobalTheme';

const inter = Inter({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '700']
});

const styles = css`
	* {
		font-family: inherit;
	}

	body {
		font-size: 14px;
		font-family: ${inter.style.fontFamily};
		transition: background-color 0.3s ease-in-out;
		margin: 0;
	}

	body.dark-theme {
		background-color: ${GlobalTheme.bgColor.dark};
		color: ${GlobalTheme.colors.dark};
	}

	body.light-theme {
		background-color: ${GlobalTheme.bgColor.light};
		color: ${GlobalTheme.colors.light};
	}

	section h2 {
		font-size: 3.5rem;
		margin: 0;
	}

	section p {
		font-size: larger;
	}

	.card {
		padding: 1.25rem;
		width: 33.33%;
		border-radius: 6px;
	}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
