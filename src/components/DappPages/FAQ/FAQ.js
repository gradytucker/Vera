import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import blueGlow from '../../../assets/images/BLUE_round.svg';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import InformationButton from '../../Button/InformationButton/InformationButton';
import PrimaryButton from '../../Button/Primary/PrimaryButton';
import InformationButtonGreyed from '../../Button/InformationButton/InformationButtonGreyed';
import Countdown from 'react-countdown';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import lockIcon from '../../../assets/svgs/bountylock.svg';
import unlockIcon from '../../../assets/svgs/bountyunlock.svg';
import * as contractMethods from '../../../contract/contract_methods';
import React from 'react';
import Web3 from 'web3';
import SkeletonEpoch from '../../skeletonLoads/skeletonEpoch';
import { Accordion, AccordionItem } from 'react-light-accordion';
import '../../Theme/accordionStyle.css';

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
	padding: 50px 24px 0 24px;
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

const Faq1 = () => (
	<p style={{ padding: '18px' }}>
		Vera is a secure digital fabric for smart city living and modern digital needs. It is a blockchain protocol that
		will allow ubiquitous access to real life functionality and data such as pharmacy scripts, taxes, insurance,
		identification, transport, welfare, police checks and records, COVID vaccination reports, etc. while preserving
		the lease exposure principle and full privacy.
	</p>
);

const Faq2 = () => (
	<p style={{ padding: '18px' }}>
		The problem that Vera solves is two-fold. Firstly, it solves the problem of least exposure when it comes to
		personal information and data for real life scenarios, but implementing a zero-knowledge proof procedure for
		accessing personal information.
	</p>
);

const Faq3 = () => (
	<p style={{ padding: '18px' }}>
		Vera works by implementing zero-knowledge proof procedures on a blockchain environment. All data is encrypted
		on-chain with a public key for each user. Vera stores a list of available verifiers in a whitelist. When a
		verifier requests information, they query the user’s address. As a governing body limits the access that the
		verifier has, they will only receive information that is pertinent to their role or occupation. Upon the user
		accepting the information request, the data on-chain is decrypted with the user’s private key signed, the
		requesting address is verified in the whitelist, and the output result is emitted encrypted with a timestamp,
		which can then be verified with the verifier’s private key querying the blockchain.
	</p>
);

const mystyle = {
	color: 'white',
	backgroundColor: 'DodgerBlue',
	padding: '10px',
	fontFamily: 'Arial',
};

const EpochPage = () => {
	return (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>FAQ</AboutSectionHeader>
					<AboutSectionSubHeader></AboutSectionSubHeader>
				</PageHeader>

				<DappCardWrapper>
					<Accordion atomic={true}>
						<AccordionItem title="What is Vera?">
							<Faq1 />
						</AccordionItem>

						<AccordionItem title="What problem is Vera solving?" style={mystyle}>
							<Faq2 />
						</AccordionItem>

						<AccordionItem title="How does Vera work?">
							<Faq3 />
						</AccordionItem>
					</Accordion>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default EpochPage;
