import styled from 'styled-components';
import theme from '../../Theme/theme';
import ETF_big from '../../../assets/images/etf_big.png';
import vault from '../../../assets/images/vault_render_big.png';
import graph from '../../../assets/images/hands.jpg';
import lock from '../../../assets/images/lock_cube.png';
import scales from '../../../assets/images/9800.jpg';
import InformationButtonAccent from '../../Button/InformationButtonAccent/InformationButtonAccent';
import PrimaryButton from '../../Button/Primary/PrimaryButton';
import SecondaryButton from '../../Button/Secondary/SecondaryButton';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import blueGlow from '../../../assets/images/BLUE_round.svg';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import pinkGlow from '../../../assets/images/PINK_round.svg';
import darkBlueGlow from '../../../assets/images/PURPLE_round.svg';
import WHB from '../../../assets/images/Web-Header-Background.svg';
import SSTarrow from '../../../assets/images/uiButtons/double-arrow-up.svg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollToTop from 'react-scroll-to-top';
import { useHistory } from 'react-router';

const PageWrapper = styled.div`
	padding: 0 10px 64px 10px;
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

const AboutSection = styled.section`
	display: flex;
	justify-content: space-between;
	border-radius: 50px;
	position: relative;
	background-color: transparent;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding-top: 20px;
	position: relative;
`;

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding: 48px 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
`;

const HeroSectionWrapper = styled.div`
	border-radius: 15px;
	padding: 0px 5% 24px 5%;
	margin-top: 0px;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	position: relative;
	background-color: transparent;
	@media ${bp.sm} {
		padding: 0px 5% 24px 5%;
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
		font-size: 60px;
	}
`;

const AboutImageParent = styled.div`
	width: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 400px;
		align-items: center;
		display: flex;
	}
`;

const AboutImageParentLeft = styled.div`
	width: 100%;
	max-width: 500px;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 400px;
		align-items: center;
		display: flex;
	}
	@media ${bp.lg} {
		margin-left: 100px;
	}
`;

const AboutImageParentRight = styled.div`
	width: 100%;
	max-width: 500px;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 400px;
		align-items: center;
		display: flex;
	}
	@media ${bp.lg} {
		margin-right: 100px;
	}
`;

const AboutImg = styled.img`
	max-width: 60%;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 600px;
	}
	@media ${bp.xl} {
		max-width: 600px;
	}
`;

const AboutPara = styled.p`
	color: ${theme.color.text.secondary};
	max-width: 700px;
	text-align: flex-start;
	font-size: 18px;
	@media ${bp.sm} {
		text-align: left;
	}
`;

const AboutWrapperTextLeft = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
`;

const AboutWrapperTextRight = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
`;

const AboutTextWrapperContainer = styled.div`
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media ${bp.sm} {
		align-items: flex-start;
	}
`;

const HeroSectionHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-top: 0px;
	margin-bottom: 0px;
	text-align: flex-start;
	max-width: 600px;
	font-size: 46px;
	@media ${bp.sm} {
		margin-top: 0px;
		margin-bottom: 16px;
		text-align: left;
		font-size: 80px;
	}
`;

const HeroImg = styled.img`
	margin-top: 0px;
	max-width: 70%;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 500px;
		margin-top: 0px;
	}
`;

const HeroPara = styled.p`
	color: ${theme.color.text.primary};
	max-width: 900px;
	text-align: flex-start;
	font-size: 18px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 24px;
	}
`;

const HeroWrapper = styled.div`
	position: relative;
	background-color: transparent;
	max-width: 900px;
	@media ${bp.sm} {
		max-width: 100vw;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		position: relative;
	}
`;

const HeroTextWrapper = styled.div`
	max-width: 900px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-right: 50px;
	@media ${bp.sm} {
		align-items: flex-start;
	}
`;

const SSTimg = styled.img`
	width: 30px;
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
		max-width: 300px;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		left: -1%;
		max-width: 300px;
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

const BackgroundBlurCenter = styled.img`
	position: absolute;
	z-index: -1;
	opacity: 90%;
	right: 0;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		min-width: 100%;
		margin-top: -100px;
	}
`;

const HomePage = () => {
	const history = useHistory();

	return (
		<>
			<ScrollToTop
				smooth
				width="480"
				height="480"
				color="#000000"
				style={{
					'background-color': 'transparent',
					'box-shadow': 'none',
					zIndex: 9999,
					transition: 'opacity 1s ease-in-out',
					'&:active': {
						visibility: 'visible',
						transition: 'opacity 1s ease-in-out',
						opacity: '1',
					},
				}}
				component={<SSTimg src={SSTarrow} alt="sst" />}
			/>
			<BackgroundBlurCenter src={WHB} alt="header wave" />
			<PageWrapper>
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
					<AboutSection>
						<HeroSectionWrapper>
							<HeroWrapper>
								<AboutImageParent>
									<HeroImg src={ETF_big} alt="etf-img" />
								</AboutImageParent>
								<HeroTextWrapper>
									<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
										<HeroSectionHeader>A secure digital fabric</HeroSectionHeader>
									</AnimationOnScroll>
									<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} delay={500}>
										<HeroPara>for smart city living and modern digital needs</HeroPara>
									</AnimationOnScroll>
									<ButtonContainer>
										<PrimaryButton
											onClick={e => {
												e.preventDefault();
												window.open('http://app.vessel.finance/#/', '_blank');
											}}
										>
											My Requests
										</PrimaryButton>
										<SecondaryButton
											onClick={e => {
												e.preventDefault();
												window.open(
													'https://pancake.kiemtienonline360.com/#/swap?outputCurrency=0x00f2967e9bC4Def83cD87407678D0C6035c19813',
													'_blank',
												);
											}}
										>
											About
										</SecondaryButton>
									</ButtonContainer>
								</HeroTextWrapper>
							</HeroWrapper>
						</HeroSectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				{/*<BackgroundBlurRight src={darkBlueGlow} alt="Green Glow" />*/}
				<AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParentRight>
									<AboutImg src={scales} alt="scales" />
								</AboutImageParentRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Privacy and Freedom</AboutSectionHeader>
									<AboutPara>
										Vera protocol offers a zero knowledge proof solution to protect your identity
										and personal information at all times
									</AboutPara>
									<ButtonContainer>
										{/* anchor link to synthetic mutual fund About section */}
									</ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				{/*<BackgroundBlurLeft src={blueGlow} alt="pink Glow" />*/}

				<AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutImageParentLeft>
									<AboutImg src={vault} alt="vault" />
								</AboutImageParentLeft>
								<AboutTextWrapperContainer>
									{/* anchor link to Reserve and supply About section */}
									<AboutSectionHeader>Secure Blockchain Encryption</AboutSectionHeader>
									<AboutPara>
										All data and requests are verified and proven on the blockchain
									</AboutPara>
									<ButtonContainer></ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				{/*<BackgroundBlurRight src={pinkGlow} alt="dark blue Glow" />*/}

				<AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParentRight>
									<AboutImg src={lock} alt="lock" />
								</AboutImageParentRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>An all-in-one platform </AboutSectionHeader>
									<AboutPara>
										Forget about having seperate accounts for multiple service platforms, keep all
										your data and verification tools in one secure and frictionless environment
									</AboutPara>
									{/* anchor link to DAO, deflation and safety section About section */}
									<ButtonContainer></ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				{/*<BackgroundBlurLeft src={greenGlow} alt="blue Glow" />*/}

				<AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutImageParentLeft>
									<AboutImg src={graph} alt="graphs" />
								</AboutImageParentLeft>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Instantly request and verify</AboutSectionHeader>
									<AboutPara>
										From Identification, Payments, Transport, Licenses and Pharmacy scripts,
										verifying yourself has never been more seamless
									</AboutPara>
									<ButtonContainer>
										{/* anchor link to market analysis About section */}
									</ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default HomePage;
