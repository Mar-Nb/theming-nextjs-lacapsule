import { GlobalTheme } from '@/styles/GlobalTheme';
import styled from 'styled-components';

export const ThemeButton = styled.button`
	border-radius: 6px;
	font-weight: 500;
	padding: 9px 10px;
	transition: background 0.2s ease;
	font-size: 0.85rem;
	color: inherit;
	border-width: 1px;
	border-style: solid;
	background: transparent;
	cursor: pointer;
`;

export const ThemeButtonDark = styled(ThemeButton)`
	border-color: ${GlobalTheme.bgColor.button.dark};

	&:hover {
		background: ${GlobalTheme.border.button.dark};
	}
`;

export const ThemeButtonLight = styled(ThemeButton)`
	border-color: ${GlobalTheme.bgColor.button.light};

	&:hover {
		background: ${GlobalTheme.border.button.light};
	}
`;

export const ReversedButtonDark = styled(ThemeButton)`
	border-color: ${GlobalTheme.bgColor.button.dark};
	background: ${GlobalTheme.bgColor.button.dark};

	&:hover {
		background: transparent;
	}
`;

export const ReversedButtonLight = styled(ThemeButton)`
	border-color: ${GlobalTheme.bgColor.button.light};
	background: ${GlobalTheme.bgColor.button.light};

	&:hover {
		background: transparent;
	}
`;
