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

	.hero {
		height: 100vh;
		min-height: 550px;
		background-image: url('/dark.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center bottom;
	}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
