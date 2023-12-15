'use client';

import { useContext } from 'react';
import { ThemeContext } from './layout';
import {
	FlexColumnContainer,
	FlexContainer,
	GridCardRow,
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
import { GlobalTheme } from '@/styles/GlobalTheme';
import Card from '@/components/Card';

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

			<Section
				style={{
					backgroundColor:
						theme === 'dark'
							? GlobalTheme.bgColor.darkSection.dark
							: GlobalTheme.bgColor.darkSection.light
				}}
			>
				<FlexColumnContainer style={{ gap: '1.5rem' }}>
					<h2 style={{ textAlign: 'center' }}>
						Une recherche de qualité se traduit par une véritable
						confidentialité.
					</h2>
					<span>
						Startpage fournit des résultats de recherche Google via notre
						technologie exclusive de protection des données personnelles.
					</span>

					<GridCardRow>
						<Card
							image="/encrypted-connection.svg"
							title="Connexion chiffrée"
							subtitle="Votre adresse IP est supprimée de tous nos serveurs locaux."
						/>
						<Card
							image="/price-trackers.svg"
							title="Bloquer les traceurs de prix"
							subtitle="Nous empêchons les tiers d'installer des dispositifs de suivi des prix sur vous."
						/>
						<Card
							image="/retargeting-ads.svg"
							title="Éviter le reciblage des annonces"
							subtitle="Nous empêchons des tiers d'accéder à vos données personnelles pour vous cibler."
						/>
					</GridCardRow>

					<GridCardRow>
						<Card
							image="/browse-anonymously.svg"
							title="Naviguer anonymement"
							subtitle="Le proxy « Mode anonyme » masque votre identité lorsque vous naviguez sur d'autres sites Web."
						/>
						<Card
							image="/unprofiled-news.svg"
							title="Recevoir des actualités sans profil"
							subtitle="Accédez à des actualités qui ne sont pas basées sur votre comportement de navigation."
						/>
						<Card
							image="/online-profiling.svg"
							title="Empêcher le profilage en ligne"
							subtitle="Nous ne créons pas de profils de données personnelles basés sur vos activités Internet."
						/>
					</GridCardRow>
				</FlexColumnContainer>
			</Section>
		</main>
	);
}
