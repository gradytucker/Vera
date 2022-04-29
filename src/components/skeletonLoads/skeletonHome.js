import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import Footer from '../Navigation/Footer/Footer';
import blueGlow from '../../assets/images/BLUE_round.svg';
import greenGlow from '../../assets/images/GREEN_round.svg';
import darkBlueGlow from '../../assets/images/PURPLE_round.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import SkeletonAssetCards from '../skeletonLoads/skeletonAssetCards';
import InformationButtonGreyed from '../Button/InformationButton/InformationButtonGreyed';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import React from 'react';

const PageWrapper = styled.div`
	padding: 0 28px 64px 28px;
	max-width: 1560px;
	margin: 0 auto;
	height: 100%;
	background-color: transparent;
	position: relative;
	overflow: hidden;

	@media ${bp.sm} {
		position: relative;
	}
	@media ${bp.xl} {
		position: relative;
		max-height: 100%;
	}
`;

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding: 0 24px 0 24px;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
	margin: 0px auto;
`;

const DappCardWrapper = styled.div`
	border-radius: 15px;
	padding: 0 24px 0 24px;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background-color: transparent;
	margin: 0px auto;
	margin-bottom: 100px;
`;

const PageHeader = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 40px;
	margin: 0 auto;
	align-items: space-between;
	position: relative;
	background-color: transparent;
	@media ${bp.sm} {
		flex-direction: row;
	}
`;

const AssetAllocationContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	width: 100%;
	align-items: center;
	margin-bottom: 10px;
	margin-top: -10px;
	@media ${bp.smd} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		align-items: center;
		margin-bottom: 10px;
		margin-top: -10px;
	}
`;

const UserAndGraphContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	width: 100%;
	align-items: center;
	@media ${bp.sm} {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		align-items: flex-end;
	}
	@media ${bp.md} {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		align-items: flex-end;
	}
	@media ${bp.lg} {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		align-items: flex-end;
	}
	@media ${bp.xl} {
		display: flex;
		flex-direction: column;
		margin-top: -15px;
		align-items: flex-end;
	}
`;

const AboutSectionHeader = styled.h1`
	max-width: 700px;
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 36px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 50px;
	}
`;

const AboutSectionSubHeader = styled.div`
	color: ${theme.color.text.primary};
	margin-bottom: 0px;
	text-align: flex-start;
	justify-content: flex-start;
	justify-text: flex-start;
	font-size: 20px;
	margin-right: 20px;
	&:hover {
		cursor: pointer;
	}
	@media ${bp.md} {
		margin-right: 20px;
		text-align: left;
		font-size: 28px;
	}
`;

const AboutSectionSubHeaderInactive = styled.div`
	color: ${theme.color.text.secondary};
	margin-bottom: 0px;
	text-align: flex-start;
	justify-content: flex-start;
	justify-text: flex-start;
	font-size: 20px;
	margin-right: 20px;
	&:hover {
		cursor: pointer;
	}
	@media ${bp.md} {
		margin-right: 20px;
		text-align: left;
		font-size: 28px;
	}
`;

const AssetCardsContainer = styled.div`
	padding-top: 50px;
	padding-bottom: 10px;
	position: relative;
	justify-content: center;
	margin-left: 20px;
	margin-right: 20px;
	@media ${bp.sm} {
		width: 55%;
		display: flex;
		justify-content: center;
	}
`;

const BackgroundBlurLeft = styled.img`
	left: -30%;
	opacity: 30%;
	position: absolute;
	z-index: -1;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		left: -5%;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		left: -1%;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const BackgroundBlurRight = styled.img`
	position: absolute;
	z-index: -1;
	opacity: 30%;
	right: 0;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const UserBoxContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	background: rgba(30, 55, 52, 0.62);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin-bottom: 20px;
	justify-content: center;
	color: ${theme.color.text.primary};
	border: 0px solid rgba(255, 255, 255, 0.2);
	width: 110%;
	@media ${bp.sm} {
		width: 70%;
		max-width: 70%;
	}
	@media ${bp.smd} {
		width: 350px;
	}
	@media ${bp.md} {
		width: 400px;
	}
	@media ${bp.lg} {
		width: 500px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	@media ${bp.md} {
		color: ${theme.color.text.primary};
		margin-bottom: 16px;
		text-align: flex-start;
		font-size: 24px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 4px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
`;

const BoxSubHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 14px;
	display: flex;
	justify-content: flex-start;
	padding-bottom: 4px;

	@media ${bp.md} {
		color: ${theme.color.text.primary};
		margin-bottom: 16px;
		text-align: flex-start;
		font-size: 16px;
		font-weight: 700;
		display: flex;
		justify-content: flex-start;
		padding-bottom: 4px;
	}
`;

const VoteContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
	width: 40%;
`;

const SubheaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-left;
	width: 300px;
	@media ${bp.md} {
		width: 400px;
	}
`;

const VoteDescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 100px;
	font-size: 12px;
	margin-bottom: 40px;
	padding-left: 5px;
	padding-right: 10px;
	@media ${bp.sm} {
		font-size: 16px;
	}
`;

const HomePage = () => {
	return (
		<>
			<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
				<PageWrapper>
					<PageHeader>
						<TitleContainer>
							<AboutSectionHeader>Voting</AboutSectionHeader>

							<SubheaderContainer>
								<AboutSectionSubHeader>Asset Allocation</AboutSectionSubHeader>

								<AboutSectionSubHeaderInactive>Votes</AboutSectionSubHeaderInactive>
							</SubheaderContainer>
						</TitleContainer>
						<UserAndGraphContainer>
							<UserBoxContent>
								<BoxHeader>Voting</BoxHeader>
								<VoteContainer>
									<BoxSubHeader>How does voting work?</BoxSubHeader>
									<VoteDescriptionContainer>
										Users can vote on the percentage allocation of tokens in the fund. In doing so,
										users decide how Vessel evolves.
									</VoteDescriptionContainer>

									<InformationButtonGreyed>Loading...</InformationButtonGreyed>
								</VoteContainer>
							</UserBoxContent>
						</UserAndGraphContainer>
					</PageHeader>

					<BackgroundBlurLeft src={greenGlow} alt="blue Glow" />

					<DappCardWrapper>
						<AssetAllocationContainer>
							<AssetCardsContainer>
								<SkeletonAssetCards />
							</AssetCardsContainer>
						</AssetAllocationContainer>
					</DappCardWrapper>

					<BackgroundBlurLeft src={darkBlueGlow} alt="blue Glow" />
					<SectionWrapper>
						<BackgroundBlurRight src={blueGlow} alt="blue Glow" />
					</SectionWrapper>
				</PageWrapper>
			</AnimationOnScroll>
			<Footer />
		</>
	);
};

export default HomePage;
