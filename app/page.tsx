'use client';

import { useContext } from 'react';
import { ThemeContext } from './layout';
import { FlexColumnContainer, FlexContainer } from '@/components/Container';
import { ThemeButtonDark, ThemeButtonLight } from '@/components/Buttons';

import Header from '@/components/Header';
import logo from '../public/startpage-logo-dark-new.svg';
import Image from 'next/image';
import Input from '@/components/Input';
import Argument from '@/components/Argument';
import HideAddLink from '@/components/HideAddLink';

export default function Home() {
	const { theme } = useContext(ThemeContext);

	const argumentsText = [
		"Pas d'historique de recherche.",
		'Pas de ciblage publicitaire',
		'Pas de trace numérique'
	];

	return (
		<main>
			<div className="hero">
				<Header />

				<FlexContainer>
					<FlexColumnContainer style={{ gap: '.75rem' }}>
						<FlexColumnContainer style={{ gap: '2rem' }}>
							<Image src={logo} alt="logo" width={240} />
							<Input placeholder="" bgColor="transparent" width="35rem" />
						</FlexColumnContainer>

						<FlexColumnContainer style={{ gap: '2rem' }}>
							<span
								style={{
									textAlign: 'center',
									fontSize: 20,
									fontWeight: 'bold',
									maxWidth: '35rem'
								}}
							>
								Pourquoi procéder à des recherches privées avec Startpage ?
							</span>

							<FlexContainer
								style={{ gap: '1rem', maxWidth: '35rem', flexWrap: 'wrap' }}
							>
								{argumentsText.map((args, i) => (
									<Argument key={i} text={args} />
								))}
							</FlexContainer>

							{theme === 'dark' && (
								<ThemeButtonDark>Ajouter à Firefox</ThemeButtonDark>
							)}
							{theme === 'light' && (
								<ThemeButtonLight>Ajouter à Firefox</ThemeButtonLight>
							)}
						</FlexColumnContainer>

						<HideAddLink />
					</FlexColumnContainer>
				</FlexContainer>
			</div>
		</main>
	);
}
