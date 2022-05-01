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
import VerifyTicket from '../../DisplayComponents/VerifyTickets';
import noWalletFace from '../../../assets/images/connectWallet.png';
import smartCity from '../../../assets/images/smartCity.png';

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
	font-size: 24px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 24px;
	}
`;

const SubPageHeader = styled.div`
	width: 85%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 40px;
	margin: 0 auto;
	align-items: space-between;
	position: relative;
	background-color: transparent;
`;

const NoWalletIMG = styled.img`
	width: 50%;
	margin-bottom: 20px;
`;

const NoWalletMessage = styled.div`
	color: #939393;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-text: center;
	opacity: 70%;
	margin: 0 auto;
	padding-top: 10vh;
`;

const EpochPage = () => {
	const [walletConnectedMode, setWalletConnectedMode] = React.useState(false);
	const [currentAccount, setCurrentAccount] = React.useState('');
	const [walletHasSwappedThisSession, setWalletHasSwappedThisSession] = React.useState(0);
	const [newVerifications, setNewVerifications] = React.useState([
		['Priceline Pharmacy', 'prescriptions'],
		['Myki public transport', 'public transport'],
		['Liquorland', 'identity'],
		['Liquorland', 'identity'],
	]);

	/* listen to event emitted from change in local storage, set Wallet Connect Mode for 
	appropriate component rerender */
	window.addEventListener('storage', function getFromStorage() {
		// When local storage changes, dump the list to
		// the console.
		if (localStorage.getItem('account') === '' || localStorage.getItem('account') === null) {
			setWalletConnectedMode(false);
		} else if (localStorage.getItem('account') !== '' || localStorage.getItem('account') !== null) {
			setWalletConnectedMode(true);
			setWalletHasSwappedThisSession(walletHasSwappedThisSession + 1);
		}
		window.removeEventListener('storage', getFromStorage);
	});

	// initialise getting lastEpochBalance time for calculating time to next epoch rebalance, and then get the value of the bounty reward.
	React.useEffect(() => {
		const getContractData = async () => {
			const getAndSetVesselContractData = async () => {
				try {
					if (!window.ethereum || localStorage.getItem('account') === '') {
						console.log('no account found');
						throw new Error('No crypto wallet found. Please install it.');
					}
					const web3 = new Web3(window.ethereum);
					web3.eth.setProvider(Web3.givenProvider);
					const accounts = await window.ethereum.request({ method: 'eth_accounts' });
					if (accounts !== null && accounts.length !== 0) {
						setWalletConnectedMode(true);
						setCurrentAccount(accounts[0]);
						console.log(accounts);
					} else {
						setWalletConnectedMode(false);
					}

					// if wallet not connected, just pull contract data
				} catch (err) {
					console.log(err.message);
				}
			};
			await getAndSetVesselContractData();
		};

		getContractData();
	}, [walletConnectedMode, walletHasSwappedThisSession]);

	const handleVerificationAccept = i => {
		setNewVerifications(newVerifications => [
			...newVerifications.slice(0, i),
			...newVerifications.slice(i + 1, newVerifications.length),
		]);
	};

	return walletConnectedMode === true && newVerifications.length !== 0 ? (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>My Verifications</AboutSectionHeader>
				</PageHeader>
				<DappCardWrapper>
					<SubPageHeader>
						<AboutSectionSubHeader>New</AboutSectionSubHeader>
					</SubPageHeader>
					<AssetAllocationContainer>
						<VerifyTicket
							tickets={newVerifications}
							onAccept={i => {
								handleVerificationAccept(i);
							}}
						/>
					</AssetAllocationContainer>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	) : walletConnectedMode === true && newVerifications.length == 0 ? (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>My Verifications</AboutSectionHeader>
				</PageHeader>
				<DappCardWrapper>
					<AssetAllocationContainer>
						<NoWalletMessage>
							<NoWalletIMG src={smartCity} />
							You have no new verifications waiting!
						</NoWalletMessage>
					</AssetAllocationContainer>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	) : walletConnectedMode === false ? (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>My Verifications</AboutSectionHeader>
				</PageHeader>
				<DappCardWrapper>
					<AssetAllocationContainer>
						<NoWalletMessage>
							<NoWalletIMG src={noWalletFace} />
							Please connect your wallet to view your verifications
						</NoWalletMessage>
					</AssetAllocationContainer>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	) : null;
};

export default EpochPage;
