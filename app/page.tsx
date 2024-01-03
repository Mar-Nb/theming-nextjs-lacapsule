'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/styles/themeContext';
import { GlobalTheme } from '@/styles/GlobalTheme';
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
import Card from '@/components/Card';
import worldMap from '../public/map-desktop.svg';
import QuoteCard from '@/components/QuoteCard';

export default function Home() {
	const { theme } = useContext(ThemeContext);

	const argumentsText = [
		"Pas d'historique de recherche.",
		'Pas de ciblage publicitaire',
		'Pas de trace numérique'
	];

	const newspaper = [
		`news-bloomberg-${theme}.svg`,
		`news-new-york-times-${theme}.svg`,
		`news-techradar-${theme}.svg`,
		`news-zdnet-${theme}.svg`,
		`news-fast-company-${theme}.svg`
	];

	const footerSocials = [
		'twitter.svg',
		'reddit.svg',
		'instagram.svg',
		'facebook.svg',
		'youtube.svg',
		'mastodon.svg'
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
					backgroundPosition: '50% 100%',
					backgroundSize: 'cover',
					minHeight: '700px'
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

			<Section>
				<FlexColumnContainer style={{ gap: '2rem' }}>
					<FlexColumnContainer style={{ gap: '3rem' }}>
						<h2>Approuvé par les utilisateurs du monde entier.</h2>
						<Image src={worldMap} alt="World map" />

						<FlexContainer style={{ width: '90%', gap: '1.5rem' }}>
							<QuoteCard
								profilePic="/head-laura-brandimarte.jpg"
								workTitle="Professeur MIS des questions sociales et éthiques de l'Internet"
								desc="« Startpage contribue à rendre possible la réglementation de la confidentialité en ligne en masquant nos recherches sur Internet et en fournissant des résultats basés sur nos requêtes, et non sur qui/où nous sommes et quel est notre historique de navigation. »"
								name="Laura Brandimarte"
							/>

							<QuoteCard
								profilePic="/snowden.jpg"
								workTitle="Président de la Fondation pour la liberté de la presse"
								desc="« Faites attention à ce que vous partagez avec les grands fournisseurs de services… Il existe des alternatives comme Startpage… qui ne stockent pas ces informations. »"
								name="Edward Snowden"
							/>

							<QuoteCard
								profilePic="/schrems.jpg"
								workTitle="Fondateur de NOYB - Centre européen des droits numériques"
								desc="« Startpage a soutenu le travail de NOYB depuis le tout début et nous permet ainsi de faire appliquer efficacement la loi européenne sur la protection des données et de renforcer notre soutien à des alternatives favorables à la protection des données. »"
								name="Max Schrems"
							/>
						</FlexContainer>
					</FlexColumnContainer>

					<FlexColumnContainer
						style={{ alignItems: 'flex-start', width: '90%' }}
					>
						<p style={{ fontSize: 'larger', fontWeight: 'bolder' }}>
							Présenté dans :
						</p>

						<FlexContainer
							style={{
								gap: '4rem',
								justifyContent: 'flex-start',
								alignItems: 'center',
								alignSelf: 'stretch'
							}}
						>
							{newspaper.map((paper, i) => (
								<svg
									width="200"
									height={paper.includes('zd') ? '70' : '26'}
									xmlnsXlink="http://www.w3.org/1999/xlink"
									key={i}
								>
									<image href={`/${paper}`} width="100%" height="100%" />
								</svg>
							))}
						</FlexContainer>
					</FlexColumnContainer>
				</FlexColumnContainer>
			</Section>

			<Section
				style={{
					backgroundImage: 'url("/startpage-wave-reversed-bg.svg")',
					backgroundPosition: '50% 0%',
					backgroundSize: 'cover',
					padding: '10rem 2rem 8rem'
				}}
			>
				<FlexColumnContainer style={{ gap: '1rem' }}>
					<h3 style={{ fontSize: '22px' }}>
						Protégez votre vie privée, une recherche à la fois.
					</h3>
					<Input
						placeholder="Démarrez votre recherche !"
						width="35rem"
						bgColor={
							theme === 'dark'
								? GlobalTheme.bgColor.dark
								: GlobalTheme.bgColor.light
						}
					/>
				</FlexColumnContainer>
			</Section>

			<footer>
				<FlexContainer style={{ gap: '.75rem' }}>
					<Image
						src="/privacy-badge.svg"
						alt="privacy-badge"
						width={72}
						height={72}
					/>
					<p style={{ maxWidth: '160px', color: '#ebecf7' }}>
						En savoir plus sur les recherches en mode privé
					</p>
				</FlexContainer>

				<FlexColumnContainer style={{ gap: '.75rem' }}>
					<Image src={logo} alt="logo" width={100} />
					<FlexContainer style={{ gap: '1rem' }}>
						<a>Confidentialité</a>
						<a>La Société</a>
						<a>Presse</a>
					</FlexContainer>
				</FlexColumnContainer>

				<FlexContainer style={{ gap: '.5rem' }}>
					{footerSocials.map((social, i) => (
						<div className="socialContainer" key={i}>
							<Image
								src={`/${social}`}
								alt={social}
								width={16}
								height={16}
								className="social"
							/>
						</div>
					))}
				</FlexContainer>
			</footer>
		</main>
	);
}
