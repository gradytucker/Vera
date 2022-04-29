import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import Footer from '../Navigation/Footer/Footer';
import blueGlow from '../../assets/images/BLUE_round.svg';
import greenGlow from '../../assets/images/GREEN_round.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import InformationButtonGreyed from '../Button/InformationButton/InformationButtonGreyed';
import Countdown from 'react-countdown';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

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
`;

const AssetAllocationContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	width: 100%;
	align-items: center;
	margin-bottom: 10px;
	margin-top: 30px;
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
	width: 90%;
	align-items: center;
	@media ${bp.md} {
		display: flex;
		flex-direction: row;
		margin-top: 50px;
		align-items: center;
		justify-content: space-between;
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
	width: 300px;
	color: ${theme.color.text.primary};
	margin-bottom: 0px;
	text-align: flex-start;
	justify-content: flex-start;
	justify-text: flex-start;
	font-size: 16px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 16px;
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
	background: rgba(40, 50, 50, 0.7);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin-bottom: 20px;
	color: ${theme.color.text.primary};
	border: 0px solid rgba(255, 255, 255, 0.5);
	width: 88vw;
	@media ${bp.sm} {
		width: 100%;
		margin-left: 20px;
		margin-right: 20px;
	}
`;

const UserBoxDataBox = styled.div`
	display: flex;
	padding: 14px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(155, 155, 155, 0.2);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	margin: 5px;
	height: 90px;
	font-size: 14px;
`;

const UserBoxDataSubtitle = styled.div`
	display: flex;
	display-direction: row;
	width: fit-content;
`;

const UserBoxDataContainerTimer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 25.5vh;
`;

const UserBoxDataContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 22vh;
`;

const UserBoxDeltaContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #fff;
	margin-top: -80px;
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 18px;
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

const UserBoxCountdownContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	color: ${theme.color.text.secondary};
	width: 90%;
	@media ${bp.sm} {
		width: 100%;
	}
`;

const CountdownContentContainer = styled.div`
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CountdownContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
`;

const ClaimStatusUnlocked = styled.div`
	width: 40px;
	font-size: 14px;
	color: #53f4d2;
	font-weight: 100;
`;

const keyframesFullView = keyframes`
  100% {
    width: 100%;
  }
`;

const keyframesShimmer = keyframes`
  0% {
    background-position: -80vw 0;
  }
  100% {
    background-position: 80vw 0;
  }
`;

const shimmerAnimation = css`
	background: linear-gradient(to right, #9b9b9b22 4%, #666666 25%, #9b9b9b22 36%);
	background-size: 80vw 100%;
	animation: ${keyframesShimmer} 2s infinite linear;
`;

const ShimmerWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	height: 40px;
	width: 0px;
	margin-bottom: 10px;
	color: #aaaaaa;
	animation: ${keyframesFullView} 0s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const DataArea = styled.div`
	display: block;
	width: 100%;
`;

const Field = styled.div`
	height: 30px;
	background: #777;

	margin-bottom: 16px;
	border-radius: 8px;
	${({ w50 }) => w50 && 'width: 50%;'}
	${shimmerAnimation}
`;

const ShortField = styled.div`
	height: 10px;
	background: #777;
	margin-top: 5px;
	border-radius: 8px;
	${({ w50 }) => w50 && 'width: 50%;'}
	${shimmerAnimation}
`;

const WideShortField = styled.div`
	height: 10px;
	background: #777;
	margin-top: 16px;
	border-radius: 8px;
	${({ w50 }) => w50 && 'width: 50%;'}
	${shimmerAnimation}
`;

const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
	return (
		<span>
			{' '}
			<CountdownContentContainer>
				<CountdownContainer>
					<UserBoxDataBox>
						{' '}
						<ShimmerWrapper>
							<DataArea>
								<Field />
							</DataArea>
						</ShimmerWrapper>
						<UserBoxDataSubtitle>days</UserBoxDataSubtitle>
					</UserBoxDataBox>
					<UserBoxDataBox>
						{' '}
						<ShimmerWrapper>
							<DataArea>
								<Field />
							</DataArea>
						</ShimmerWrapper>
						<UserBoxDataSubtitle>hours</UserBoxDataSubtitle>
					</UserBoxDataBox>
					<UserBoxDataBox>
						{' '}
						<ShimmerWrapper>
							<DataArea>
								<Field />
							</DataArea>
						</ShimmerWrapper>
						<UserBoxDataSubtitle>minutes</UserBoxDataSubtitle>
					</UserBoxDataBox>
					<UserBoxDataBox>
						{' '}
						<ShimmerWrapper>
							<DataArea>
								<Field />
							</DataArea>
						</ShimmerWrapper>
						<UserBoxDataSubtitle>seconds</UserBoxDataSubtitle>
					</UserBoxDataBox>
				</CountdownContainer>
				<UserBoxCountdownContent>
					{' '}
					<ShimmerWrapper>
						<DataArea>
							<WideShortField />
						</DataArea>
					</ShimmerWrapper>
				</UserBoxCountdownContent>
			</CountdownContentContainer>
		</span>
	);
};

const HomePage = () => {
	return (
		<>
			<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
				<PageWrapper>
					<PageHeader>
						<AboutSectionHeader>Epoch</AboutSectionHeader>
						<AboutSectionSubHeader>
							Every 7 days the epoch is reset, triggering a rebalance of the synthetic wrapper.
						</AboutSectionSubHeader>
					</PageHeader>

					<BackgroundBlurLeft src={blueGlow} alt="blue Glow" />

					<DappCardWrapper>
						<AssetAllocationContainer>
							<UserAndGraphContainer>
								<UserBoxContent>
									<BoxHeader>Reset</BoxHeader>
									<UserBoxDataContainerTimer>
										<Countdown
											autoStart={true}
											date={Date.now()}
											renderer={countDownRenderer}
											key={Date.now()}
										/>
									</UserBoxDataContainerTimer>
								</UserBoxContent>
								<UserBoxContent>
									<BoxHeader>Collect Bounty</BoxHeader>
									<UserBoxDataContainer>
										<UserBoxDataBox>
											{' '}
											<ShimmerWrapper>
												<DataArea>
													<Field />
												</DataArea>
											</ShimmerWrapper>
											<UserBoxDataSubtitle>$VSL reward</UserBoxDataSubtitle>
										</UserBoxDataBox>
										<UserBoxDataBox>
											{' '}
											<ShimmerWrapper>
												<DataArea>
													<Field />
												</DataArea>
											</ShimmerWrapper>
											<UserBoxDataSubtitle>
												status: &nbsp;
												<ClaimStatusUnlocked>
													<ShortField />
												</ClaimStatusUnlocked>
											</UserBoxDataSubtitle>
										</UserBoxDataBox>
									</UserBoxDataContainer>

									<InformationButtonGreyed>Loading...</InformationButtonGreyed>
								</UserBoxContent>
							</UserAndGraphContainer>
						</AssetAllocationContainer>

						<BackgroundBlurRight src={greenGlow} alt="blue Glow" />
					</DappCardWrapper>
					<UserBoxDeltaContainer>
						<UserBoxDataBox>
							<ShimmerWrapper>
								<DataArea>
									<Field />
								</DataArea>
							</ShimmerWrapper>
							<UserBoxDataSubtitle> Change in token</UserBoxDataSubtitle>
						</UserBoxDataBox>
						<UserBoxDataBox>
							<ShimmerWrapper>
								<DataArea>
									<Field />
								</DataArea>
							</ShimmerWrapper>
							<UserBoxDataSubtitle> Change in wrapper</UserBoxDataSubtitle>
						</UserBoxDataBox>
					</UserBoxDeltaContainer>
				</PageWrapper>
			</AnimationOnScroll>
			<Footer />
		</>
	);
};

export default HomePage;
