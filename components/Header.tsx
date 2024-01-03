import styled from 'styled-components';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/styles/themeContext';

const HeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.5rem;
`;

const RightDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
`;

const Icon = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	position: relative;
	cursor: pointer;
`;

export default function Header() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<HeaderDiv>
			<Icon>
				<Image
					src={theme === 'light' ? '/sun.svg' : '/moon.svg'}
					alt="toggle theme icon"
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					fill={true}
				/>
			</Icon>

			<RightDiv>
				<span>Privacy, Please !</span>

				<Icon>
					<Image
						src={theme === 'light' ? '/dark-burger.svg' : '/light-burger.svg'}
						alt="burger menu"
						fill={true}
					/>
				</Icon>
			</RightDiv>
		</HeaderDiv>
	);
}
