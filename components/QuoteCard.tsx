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
	const backgroundColor =
		GlobalTheme.bgColor.quote[theme as keyof typeof GlobalTheme.bgColor.quote];
	const workTitleColor =
		GlobalTheme.colors.quoteWorkTitle[
			theme as keyof typeof GlobalTheme.colors.quoteWorkTitle
		];

	return (
		<FlexColumnContainer
			className="card"
			style={{
				height: '250px',
				justifyContent: 'space-between',
				gap: '1.25rem',
				backgroundColor
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
					<span style={{ color: workTitleColor }}>
						<small>{props.workTitle}</small>
					</span>
				</FlexColumnContainer>
			</FlexContainer>
		</FlexColumnContainer>
	);
}
