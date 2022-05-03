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
import topBlur from '../../../assets/images/top-blur.png';
import VeraArch from '../../../assets/images/Vera_Architecture.png';
import ctc from '../../../assets/images/copytoclipboard.png';

const topBG = styled.img`
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: -1;
	width: 100%;
`;

const CopyIcon = styled.img`
	width: 15px;
	height: 15px;
	cursor: pointer;
`;

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
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ padding: '18px' }}>
			Vera is a secure digital fabric for smart city living and modern digital needs. It is a blockchain protocol
			that will allow ubiquitous access to real life functionality and data such as pharmacy scripts, taxes,
			insurance, identification, transport, welfare, police checks and records, COVID vaccination reports, etc.
			while preserving the lease exposure principle and full privacy.
		</p>
	</div>
);

const Faq2 = () => (
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ padding: '18px' }}>
			Vera solves the issue of preserving privacy when it comes to personal information and data for real life
			scenarios that is stored in digital form. The protocol implements a minimum amount of exposure in this
			process by implementing a zero-knowledge proof procedure for accessing and revealing personal information be
			it to users themselves or to requested authorized verifying parties
		</p>
	</div>
);

const Faq3 = () => (
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>How it works:</p>
		<p style={{ padding: '18px' }}>
			Vera works by implementing zero-knowledge proof procedures on a blockchain environment. All data is
			encrypted on-chain with a public key for each user. Vera stores a list of available verifiers in a
			whitelist. When a verifier requests information, they query the user’s address. As a governing body limits
			the access that the verifier has, they will only receive information that is pertinent to their role or
			occupation. Upon the user accepting the information request, the data on-chain is decrypted with the user’s
			private key signed, the requesting address is verified in the whitelist, and the output result is emitted
			encrypted with a timestamp, which can then be verified with the verifier’s private key querying the
			blockchain.
		</p>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>Architecture diagram:</p>
		<img style={{ width: '70%', margin: '0 auto', paddingBottom: '18px' }} src={VeraArch}></img>
	</div>
);

const Faq4 = () => (
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>View our contract on PolygonScan:</p>
		<p style={{ padding: '18px' }}>
			<a href="https://mumbai.polygonscan.com/address/0xfa9582be0a57466cd0948cd4b8406af25e9d5c9e" target="_blank">
				https://mumbai.polygonscan.com/address/0xfa9582be0a57466cd0948cd4b8406af25e9d5c9e
			</a>
		</p>
	</div>
);

const Faq5 = () => (
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>View our site through IPFS:</p>
		<p style={{ padding: '18px' }}>
			<a href="https://ipfs.io/ipfs/QmSDkoLjojYra9RRM1ZH4j5qrFYutzCmBTQd5LzjpajduH/#" target="_blank">
				https://ipfs.io/ipfs/QmSDkoLjojYra9RRM1ZH4j5qrFYutzCmBTQd5LzjpajduH/#
			</a>
		</p>
	</div>
);

const Faq6 = () => (
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>
			When testing this prototype, add these accounts to your metamask wallet (ensure that the sample user at
			least one other account is imported in order to run requests and verifications):
		</p>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>police officer:</p>

		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• address: 0x5c9580b38556c8f5c25411a35404f6c618057e32
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x5c9580b38556c8f5c25411a35404f6c618057e32');
					alert('copied: 0x5c9580b38556c8f5c25411a35404f6c618057e32 ');
				}}
			/>
		</div>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• private key: 0x880192be8ea9a4230a04a510e298767a6f649dd298eeae54375a65a4b2f2a9da
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x880192be8ea9a4230a04a510e298767a6f649dd298eeae54375a65a4b2f2a9da');
					alert('copied: 0x880192be8ea9a4230a04a510e298767a6f649dd298eeae54375a65a4b2f2a9da ');
				}}
			/>
		</div>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>paramedic:</p>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• address: 0x2f7e17df8dc2db7cada6f18f4b8a7718d5b67391
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x2f7e17df8dc2db7cada6f18f4b8a7718d5b67391');
					alert('copied: 0x2f7e17df8dc2db7cada6f18f4b8a7718d5b67391 ');
				}}
			/>
		</div>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• private key: 0xc1b13e4f205aa3b8bee180a759c34e6b627d3e89934b668b6ad142cb15febe2b
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0xc1b13e4f205aa3b8bee180a759c34e6b627d3e89934b668b6ad142cb15febe2b');
					alert('copied: 0xc1b13e4f205aa3b8bee180a759c34e6b627d3e89934b668b6ad142cb15febe2b ');
				}}
			/>
		</div>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>security officer:</p>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• address: 0x7a1e966d1bdb4231b82c62e7de59e338c897832d
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x7a1e966d1bdb4231b82c62e7de59e338c897832d');
					alert('copied: 0x7a1e966d1bdb4231b82c62e7de59e338c897832d ');
				}}
			/>
		</div>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• private key: 0xc8bcbf880b2dafc32ab45aed1dc30c462c3af4314abbbd921e052442f92055e2
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0xc8bcbf880b2dafc32ab45aed1dc30c462c3af4314abbbd921e052442f92055e2');
					alert('copied: 0xc8bcbf880b2dafc32ab45aed1dc30c462c3af4314abbbd921e052442f92055e2 ');
				}}
			/>
		</div>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>pharmacist:</p>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				{' '}
				• address: 0x3db35b4b935f39280a6720ac6b1be8ac030d1db6
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x3db35b4b935f39280a6720ac6b1be8ac030d1db6');
					alert('copied: 0x3db35b4b935f39280a6720ac6b1be8ac030d1db6 ');
				}}
			/>
		</div>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• private key: 0x35676018a65ea8f63c7d4e0bae98845c6742545afd0b842bfd473a307b4f4b3a
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x35676018a65ea8f63c7d4e0bae98845c6742545afd0b842bfd473a307b4f4b3a');
					alert('copied: 0x35676018a65ea8f63c7d4e0bae98845c6742545afd0b842bfd473a307b4f4b3a ');
				}}
			/>
		</div>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>sample user:</p>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px' }}>
				• address: 0x17912977c84beaf1f5f228f1dd7782fa6bf7f574
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0x17912977c84beaf1f5f228f1dd7782fa6bf7f574');
					alert('copied: 0x17912977c84beaf1f5f228f1dd7782fa6bf7f574 ');
				}}
			/>
		</div>
		<div style={{ display: 'flex' }}>
			<p style={{ paddingLeft: '18px', paddingRight: '18px', paddingBottom: '18px' }}>
				• private key: 0xa8393d077a13cd68b4fc928b37e93c35f1bfc613597a5c21aeb9ee32f0273ccf
			</p>
			<CopyIcon
				src={ctc}
				onClick={() => {
					navigator.clipboard.writeText('0xa8393d077a13cd68b4fc928b37e93c35f1bfc613597a5c21aeb9ee32f0273ccf');
					alert('copied: 0xa8393d077a13cd68b4fc928b37e93c35f1bfc613597a5c21aeb9ee32f0273ccf ');
				}}
			/>
		</div>
	</div>
);

const Faq7 = () => (
	<div
		style={{
			height: 'max-content',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		}}
	>
		<p style={{ paddingTop: '18px', paddingLeft: '18px', fontSize: '16px' }}>View our github:</p>
		<p style={{ padding: '18px' }}>
			<a href="https://github.com/gradytucker/Vera/" target="_blank">
				https://github.com/gradytucker/Vera/
			</a>
		</p>
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
						<AccordionItem title="What is your Contract address?">
							<Faq4 />
						</AccordionItem>
						<AccordionItem title="What are your IPFS details?">
							<Faq5 />
						</AccordionItem>
						<AccordionItem title="Is there prototype data I can use to use this?">
							<Faq6 />
						</AccordionItem>
						<AccordionItem title="Where is your codebase?">
							<Faq7 />
						</AccordionItem>
					</Accordion>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default FAQPage;
