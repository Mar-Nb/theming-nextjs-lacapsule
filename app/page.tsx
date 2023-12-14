'use client';

import { useContext } from 'react';
import { ThemeContext } from './layout';
import {
	FlexColumnContainer,
	FlexContainer,
	Hero,
	InnerSection,
	Section,
	SectionImagePart,
	SectionTextPart
} from '@/components/Container';
import {
	ReversedButtonDark,
	ReversedButtonLight,
	ThemeButtonDark,
	ThemeButtonLight
} from '@/components/Buttons';

import Header from '@/components/Header';
import logo from '../public/startpage-logo-dark-new.svg';
import Image from 'next/image';
import Input from '@/components/Input';
import Argument from '@/components/Argument';
import HideAddLink from '@/components/HideAddLink';
import manInLaptop from '../public/man-in-laptop.svg';
import girlOnBrowser from '../public/girl-on-browser.svg';

export default function Home() {
	const { theme } = useContext(ThemeContext);

	const argumentsText = [
		"Pas d'historique de recherche.",
		'Pas de ciblage publicitaire',
		'Pas de trace numérique'
	];

	return (
		<main>
			<Hero>
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
			</Hero>

			<Section
				style={{
					backgroundImage: 'url("/startpage-wave-bg.svg")',
					backgroundPosition: '50% 100%'
				}}
			>
				<InnerSection>
					<SectionTextPart>
						<h2>L&apos;internet sans suivi.</h2>
						<p>
							Un moyen plus sûr de rechercher et de naviguer en ligne sans
							collecte, suivi ou ciblage de données personnelles.
						</p>
						{theme === 'dark' && (
							<ThemeButtonDark>Ajouter à Firefox</ThemeButtonDark>
						)}
						{theme === 'light' && (
							<ThemeButtonLight>Ajouter à Firefox</ThemeButtonLight>
						)}
					</SectionTextPart>

					<SectionImagePart>
						<Image
							src={manInLaptop}
							alt="Big laptop with man inside image"
							fill={true}
						/>
					</SectionImagePart>
				</InnerSection>
			</Section>

			<Section>
				<InnerSection>
					<SectionImagePart>
						<Image src={girlOnBrowser} alt="Girl on a browser image" />
					</SectionImagePart>

					<SectionTextPart>
						<h2>Le moteur de recherche le plus privé au monde.</h2>
						<p>
							Le moteur de recherche de Startpage et la fonction « Mode anonyme
							» sont des moyens simples et gratuits de prendre le contrôle de
							votre vie privée en ligne. Nous ne sauvegarderons ni ne vendrons
							jamais votre historique de recherche.
						</p>
						{theme === 'dark' && (
							<ReversedButtonDark>Ajouter à Firefox</ReversedButtonDark>
						)}
						{theme === 'light' && (
							<ReversedButtonLight>Ajouter à Firefox</ReversedButtonLight>
						)}
					</SectionTextPart>
				</InnerSection>
			</Section>
		</main>
	);
}
