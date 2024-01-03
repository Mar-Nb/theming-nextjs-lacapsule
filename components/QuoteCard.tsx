import { FlexColumnContainer, FlexContainer } from './Container';
import { ThemeContext } from '@/styles/themeContext';
import { useContext } from 'react';
import { GlobalTheme } from '@/styles/GlobalTheme';

import Image from 'next/image';

type QuoteCardProps = {
	profilePic: string;
	desc: string;
	name: string;
	workTitle: string;
};

export default function Card(props: QuoteCardProps) {
	const { theme } = useContext(ThemeContext);

	return (
		<FlexColumnContainer
			className="card"
			style={{
				height: '250px',
				justifyContent: 'space-between',
				gap: '1.25rem',
				backgroundColor:
					theme === 'dark'
						? GlobalTheme.bgColor.quote.dark
						: GlobalTheme.bgColor.quote.light
			}}
		>
			<span style={{ fontSize: 'larger' }}>{props.desc}</span>

			<FlexContainer
				style={{ gap: '.75rem', width: '100%', justifyContent: 'flex-start' }}
			>
				<Image
					src={props.profilePic}
					width={50}
					height={50}
					alt="card image"
					style={{ borderRadius: '9999px' }}
				/>

				<FlexColumnContainer style={{ alignItems: 'flex-start' }}>
					<span style={{ fontWeight: 'bold' }}>{props.name}</span>
					<span style={{ color: 'lightgrey' }}>
						<small>{props.workTitle}</small>
					</span>
				</FlexColumnContainer>
			</FlexContainer>
		</FlexColumnContainer>
	);
}
