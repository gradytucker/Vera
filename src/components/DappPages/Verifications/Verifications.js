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
import { userData } from '../../../Data/userData';
import { serviceLevelsJSON } from '../../../Data/VeraPriveleges';
import SecondaryButton from '../../Button/Secondary/SecondaryButtonNoArrow';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		'max-height': '50%',
		width: '40%',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		'overflow-y': 'scroll',
		padding: '50px',
	},
};

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
	padding-bottom: 10vh;
	font-family: 'expletus-sans-regular';
`;

const VerificationsPage = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
	}
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [walletConnectedMode, setWalletConnectedMode] = React.useState(false);
	const [currentAccount, setCurrentAccount] = React.useState('');
	const [walletHasSwappedThisSession, setWalletHasSwappedThisSession] = React.useState(0);
	const [newVerifications, setNewVerifications] = React.useState([]);
	const [acceptHandled, setAcceptHandled] = React.useState(0);

	var CryptoJS = require('crypto-js');

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
						const thisAccount = accounts[0];
						setWalletConnectedMode(true);
						setCurrentAccount(accounts[0]);

						if (accounts[0] === '0x17912977c84beaf1f5f228f1dd7782fa6bf7f574') {
							var userDataDb = [];
							for (var key in userData) {
								var ciphertext = CryptoJS.AES.encrypt(
									JSON.stringify(userData[key]),
									'0xa8393d077a13cd68b4fc928b37e93c35f1bfc613597a5c21aeb9ee32f0273ccf',
								).toString();
								userDataDb.push([key, ciphertext]);
							}
							localStorage.setItem('onboardUserData', JSON.stringify(userDataDb));
						}

						if (localStorage.getItem(thisAccount) === null) {
							setNewVerifications([]);
						} else {
							setNewVerifications(JSON.parse(localStorage.getItem(thisAccount))[1]);
						}
					} else {
						setWalletConnectedMode(false);
					}

					// if wallet not connected, just show skeleton
				} catch (err) {
					console.log(err.message);
				}
			};
			await getAndSetVesselContractData();
		};

		getContractData();
	}, [walletConnectedMode, walletHasSwappedThisSession, acceptHandled]);

	const sleep = milliseconds => {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	};

	// function for computing Verification of requesters
	const handleVerificationAccept = async (addr, ts, nce, prkey) => {
		try {
			if (!window.ethereum || localStorage.getItem('account') === '') {
				throw new Error('No crypto wallet found. Please install it.');
			}

			const web3 = new Web3(window.ethereum);
			web3.eth.setProvider(Web3.givenProvider);
			const contract = new web3.eth.Contract(contractMethods.cABI);
			const accounts = await window.ethereum.request({ method: 'eth_accounts' });
			const account = accounts[0];
			const contractAddress = contractMethods.cAddr;

			const transactionParameters = {
				from: account,
				to: contractAddress,
				gasPrice: web3.eth.gasPrice,
				gas: '21000',
				data: contract.methods
					.computeVerification(String(prkey), String(addr), String(ts), String(nce))
					.encodeABI(),
			};

			const txHash = await window.ethereum.request({
				method: 'eth_sendTransaction',
				params: [transactionParameters],
			});

			console.log('txhash created: ' + txHash);

			var transactionReceipt = null;
			while (transactionReceipt === null) {
				transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
				await sleep(1000);
			}
			console.log(transactionReceipt);
			console.log('returned event hash: ' + transactionReceipt.logs[0].data);
			if (transactionReceipt.status === true) {
				console.log('accept successfully handled. rerendering...');
				var stringToPass = '';
				const AddrPermissionBits = JSON.parse(serviceLevelsJSON[String(addr)].permissionbits);
				const encryptedData = [JSON.parse(localStorage.getItem('onboardUserData'))];
				console.log(AddrPermissionBits);
				console.log(encryptedData);
				for (var i = 0; i < AddrPermissionBits.length; i++) {
					console.log(AddrPermissionBits[i]);
					if (Number(AddrPermissionBits[i]) === 1) {
						console.log(encryptedData[0][i]);
						var ciphertext = String(encryptedData[0][i][1]);
						console.log(ciphertext);
						var bytes = CryptoJS.AES.decrypt(
							ciphertext,
							'0xa8393d077a13cd68b4fc928b37e93c35f1bfc613597a5c21aeb9ee32f0273ccf',
						);
						var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
						console.log('decrypted data: ' + decryptedData);
						stringToPass += decryptedData;
					}
				}
				console.log(stringToPass);
				var eventHash = transactionReceipt.logs[0].data;
				var polygonLink = 'https://mumbai.polygonscan.com/tx/' + txHash;

				var userDb3 = JSON.parse(localStorage.getItem(addr)); // requestors db
				var userDb4 = JSON.parse(localStorage.getItem(currentAccount)); // currentUsersDb
				//
				// add return contents to requestors db request spot
				for (var i = 0; i < userDb3[0].length; i++) {
					if (userDb3[0][i][0] == currentAccount) {
						userDb3[0][i][2] = [eventHash, stringToPass, polygonLink];
						console.log(userDb3);
					}
				}

				alert('you accepted a request from : ' + addr);
				for (var i = 0; i < userDb4[1].length; i++) {
					console.log(userDb4[1][i][0][1], addr);
					if (userDb4[1][i][0][1] == addr) {
						console.log(userDb4[1]);
						userDb4[1] = [...userDb4[1].slice(0, i), ...userDb4[1].slice(i + 1, userDb4[1].length)];
						console.log(userDb4[1]);
					}
				}
				localStorage.setItem(addr, JSON.stringify(userDb3));
				localStorage.setItem(currentAccount, JSON.stringify(userDb4));

				setAcceptHandled(acceptHandled + 1);
			} else {
				console.log('transaction failed, not rerendering.');
			}
		} catch (err) {
			console.log(err.message);
		}
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

						{currentAccount === '0x17912977c84beaf1f5f228f1dd7782fa6bf7f574' ? (
							<SecondaryButton onClick={openModal}>My account</SecondaryButton>
						) : null}
						<Modal
							isOpen={modalIsOpen}
							onAfterOpen={afterOpenModal}
							onRequestClose={closeModal}
							style={customStyles}
							contentLabel="Example Modal"
						>
							<h2>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										paddingBottom: '10px',
										borderBottom: '1px solid #000',
									}}
								>
									{'👤 ' +
										Object.values(userData).reverse()[6].replace(/;/g, ', ').replace('&', '') +
										' ' +
										Object.values(userData).reverse()[5].replace(/;/g, ', ').replace('&', '') +
										':'}
									<InformationButton onClick={closeModal}>close</InformationButton>
								</div>
							</h2>
							{[...Array(24)].map((e, i, j) => {
								return (
									<div
										style={{
											marginTop: '20px',
											marginBottom: '20px',
											border: '0px solid #000',
											borderRadius: '30px',
											padding: '20px',
											boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
											background: 'linear-gradient(250deg, #f1c7cd 0%, #f1d693 180%)',
										}}
									>
										<div
											key={i}
											style={{
												fontSize: '18px',
											}}
										>
											{Object.keys(userData).reverse()[i] + ':'}
										</div>
										<div
											key={i}
											style={{
												marginLeft: '10px',
												marginTop: '5px',
												fontSize: '14px',
											}}
										>
											{'• ' +
												Object.values(userData)
													.reverse()
													[i].replace(/;/g, ', ')
													.replace('&', '')}
										</div>
									</div>
								);
							})}
						</Modal>
					</SubPageHeader>
					<AssetAllocationContainer>
						<VerifyTicket
							tickets={newVerifications}
							onAccept={(addr, ts, nce, prkey) => {
								handleVerificationAccept(addr, ts, nce, prkey);
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
					<SubPageHeader>
						<AboutSectionSubHeader>New</AboutSectionSubHeader>
						{currentAccount === '0x17912977c84beaf1f5f228f1dd7782fa6bf7f574' ? (
							<SecondaryButton onClick={openModal}>My account</SecondaryButton>
						) : null}
						<Modal
							isOpen={modalIsOpen}
							onAfterOpen={afterOpenModal}
							onRequestClose={closeModal}
							style={customStyles}
							contentLabel="Example Modal"
						>
							<h2>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										paddingBottom: '10px',
										borderBottom: '1px solid #000',
									}}
								>
									{'👤 ' +
										Object.values(userData).reverse()[6].replace(/;/g, ', ').replace('&', '') +
										' ' +
										Object.values(userData).reverse()[5].replace(/;/g, ', ').replace('&', '') +
										':'}
									<InformationButton onClick={closeModal}>close</InformationButton>
								</div>
							</h2>
							{[...Array(24)].map((e, i, j) => {
								return (
									<div
										style={{
											marginTop: '20px',
											marginBottom: '20px',
											border: '0px solid #000',
											borderRadius: '30px',
											padding: '20px',
											boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
											background: 'linear-gradient(250deg, #f1c7cd 0%, #f1d693 180%)',
										}}
									>
										<div
											key={i}
											style={{
												fontSize: '18px',
											}}
										>
											{Object.keys(userData).reverse()[i] + ':'}
										</div>
										<div
											key={i}
											style={{
												marginLeft: '10px',
												marginTop: '5px',
												fontSize: '14px',
											}}
										>
											{'• ' +
												Object.values(userData)
													.reverse()
													[i].replace(/;/g, ', ')
													.replace('&', '')}
										</div>
									</div>
								);
							})}
						</Modal>
					</SubPageHeader>
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

export default VerificationsPage;
