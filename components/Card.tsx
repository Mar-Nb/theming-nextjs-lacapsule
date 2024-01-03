import Image from 'next/image';
import { FlexColumnContainer } from './Container';
import { GlobalTheme } from '@/styles/GlobalTheme';
import { ThemeContext } from '@/styles/themeContext';
import { useContext } from 'react';

type CardProps = {
	image: string;
	title: string;
	subtitle: string;
};

export default function Card(props: CardProps) {
	const { theme } = useContext(ThemeContext);

	return (
		<FlexColumnContainer
			className="card"
			style={{
				height: '280px',
				gap: '.25rem',
				backgroundColor:
					theme === 'dark'
						? `${GlobalTheme.bgColor.card.dark}`
						: GlobalTheme.bgColor.card.light
			}}
		>
			<Image src={props.image} width={100} height={100} alt="card image" />
			<h3>{props.title}</h3>
			<p style={{ textAlign: 'center' }}>{props.subtitle}</p>
		</FlexColumnContainer>
	);
}
