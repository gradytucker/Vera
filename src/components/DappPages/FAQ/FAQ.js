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
		Vera solves the issue of preserving privacy when it comes to personal information and data for real life
		scenarios that is stored in digital form. The protocol implements a minimum amount of exposure in this process
		by implementing a zero-knowledge proof procedure for accessing and revealing personal information be it to users
		themselves or to requested authorized verifying parties
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

const Faq4 = () => (
	<div>
		<p style={{ padding: '18px' }}>contract address: 0xFA9582bE0a57466CD0948cd4b8406Af25e9D5c9E</p>
		<p style={{ padding: '18px' }}>curren IPFS hash: QmUTzLcjcmw1UB4AJMnxVFdz94MsrbNnc4FjarK37YV6aK</p>
	</div>
);

const Faq5 = () => (
	<div>
		<p style={{ padding: '18px' }}>police-man address: 0x5c9580b38556c8f5c25411a35404f6c618057e32</p>
		<p style={{ padding: '18px' }}>paramedic address: 0x2f7e17df8dc2db7cada6f18f4b8a7718d5b67391</p>
		<p style={{ padding: '18px' }}>security officer address: 0x7a1e966d1bdb4231b82c62e7de59e338c897832d</p>
		<p style={{ padding: '18px' }}>pharamacist address: 0x3db35b4b935f39280a6720ac6b1be8ac030d1db6</p>
		<p style={{ padding: '18px' }}>daily user address: 0x17912977c84beaf1f5f228f1dd7782fa6bf7f574</p>
	</div>
);

const mystyle = {
	color: 'white',
	backgroundColor: 'DodgerBlue',
	padding: '10px',
	fontFamily: 'Arial',
};

const FAQPage = () => {
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
						<AccordionItem title="blockchain data">
							<Faq4 />
						</AccordionItem>
						<AccordionItem title="Vera technical data">
							<Faq5 />
						</AccordionItem>
					</Accordion>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default FAQPage;
