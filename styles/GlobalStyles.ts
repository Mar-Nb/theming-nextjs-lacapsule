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

	.dark-theme footer {
		background-color: ${GlobalTheme.bgColor.footer.dark};
	}

	.light-theme footer {
		background-color: ${GlobalTheme.bgColor.footer.light};
	}

	footer {
		padding: 1.5rem 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		cursor: pointer;
	}

	.dark-theme footer a:hover {
		color: ${GlobalTheme.colors.link.dark};
	}

	.light-theme footer a:hover {
		color: ${GlobalTheme.colors.link.light};
	}

	.social {
		opacity: 1;
		filter: brightness(0) invert(1);
		transition: opacity 0.2s ease 0s;
		object-fit: contain;
	}

	.socialContainer {
		width: 36px;
		height: 36px;
		border-radius: 9999px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.dark-theme .socialContainer {
		background-color: ${GlobalTheme.bgColor.footerSocial.dark};

		&:hover {
			background-color: ${GlobalTheme.colors.link.dark};
		}
	}

	.light-theme .socialContainer {
		background-color: ${GlobalTheme.bgColor.footerSocial.light};

		&:hover {
			background-color: ${GlobalTheme.colors.link.light};
		}
	}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
