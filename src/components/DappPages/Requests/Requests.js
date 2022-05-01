import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import InformationButton from '../../Button/InformationButton/InformationButton';
import SecondaryButton from '../../Button/Secondary/SecondaryButtonNoArrow';
import noWalletFace from '../../../assets/images/connectWallet.png';
import 'animate.css/animate.min.css';
import React from 'react';
import Web3 from 'web3';
import RequestTicket from '../../DisplayComponents/RequestTicket';
import smartCity from '../../../assets/images/smartCity.png';
import { serviceLevelsJSON } from '../../../Data/VeraPriveleges';
import { permissionsJSON } from '../../../Data/VeraPriveleges';

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

const NewRequestWrapper = styled.div`
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
	font-size: 24px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 24px;
	}
`;

const NewReqUserBoxContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 24px;
	background: #f3f3f3;
	backdrop-filter: blur(10px);
	border-radius: 16px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	margin-bottom: 20px;
	color: ${theme.color.text.primary};
	border: 0px solid rgba(255, 255, 255, 0.5);
	height: 300px;
	width: 88vw;
	@media ${bp.sm} {
		width: 100%;
		height: 300px;
		margin-left: 20px;
		margin-right: 20px;
	}
`;

const NewReqBoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	padding-top: 10px;
	font-size: 24px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;

	@media ${bp.md} {
		color: ${theme.color.text.primary};
		margin-bottom: 16px;
		text-align: flex-start;
		font-size: 24px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 4px;
	}
`;
const NewReqBoxSubtitle = styled.div`
	color: ${theme.color.text.primary};

	text-align: flex-start;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;

	@media ${bp.md} {
		color: ${theme.color.text.primary};
		text-align: flex-start;
		font-size: 16px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 4px;
	}
`;

const AddressInput = styled.input`
	font-size: 16px;
	padding: 8px 10px 8px 10px;
	margin: 10px;
	font-family: 'expletus-sans-regular';
	background: white;
	border: none;
	border-radius: 30px;
	::placeholder {
		font-family: 'expletus-sans-regular';
		font-size: 16px;
	}
`;

const RequestForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 40px;
`;

const NoWalletIMG = styled.img`
	width: 54%;
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
	font-family: 'expletus-sans-regular';
`;

const EpochPage = () => {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [newRequestToggled, setNewRequestToggled] = React.useState(false);
	const [newRequestAddress, setNewRequestAddress] = React.useState('');
	const [walletConnectedMode, setWalletConnectedMode] = React.useState(false);
	const [walletHasSwappedThisSession, setWalletHasSwappedThisSession] = React.useState(0);
	const [currentAccount, setCurrentAccount] = React.useState('');
	const [permittedDataBits, setPermittedDataBits] = React.useState([]);
	const [permissionTitles, setPermissionTitles] = React.useState([]);
	const [serviceLevel, setServiceLevel] = React.useState('standard user');
	const [newRequests, setNewRequests] = React.useState([]);
	const [requestsSent, setRequestsSent] = React.useState(0);

	/* listen to event emitted from change in local storage, set Wallet Connect Mode for 
	appropriate component rerender */
	window.addEventListener('storage', function getFromStorage() {
		// When local storage changes, dump the list to
		// the console.
		if (localStorage.getItem('account') === '' || localStorage.getItem('account') === null) {
			setWalletConnectedMode(false);
			setNewRequestToggled(false);
		} else if (localStorage.getItem('account') !== '' || localStorage.getItem('account') !== null) {
			setWalletConnectedMode(true);
			setWalletHasSwappedThisSession(walletHasSwappedThisSession + 1);
		}
		window.removeEventListener('storage', getFromStorage);
	});

	React.useEffect(() => {
		const getUserData = async () => {
			const getAndSetUserData = async () => {
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
						setCurrentAccount(thisAccount);
						setServiceLevel(serviceLevelsJSON[thisAccount].name);
						setPermittedDataBits(serviceLevelsJSON[thisAccount].permissionbits);
						var tempPermissions = [];
						for (var i = 0; i < 22; i++) {
							if (JSON.parse(serviceLevelsJSON[thisAccount].permissionbits)[i] === 1) {
								tempPermissions.push(permissionsJSON[i]);
							}
						}
						if (tempPermissions.length === 0) {
							setPermissionTitles(['N/A']);
						} else {
							setPermissionTitles(tempPermissions);
						}

						if (localStorage.getItem(thisAccount) === null) {
							setNewRequests([]);
						} else {
							setNewRequests(JSON.parse(localStorage.getItem(thisAccount))[0]);
						}
					} else {
						setWalletConnectedMode(false);
					}
				} catch (err) {
					console.log(err.message);
				}
				setIsLoaded(true);
			};
			await getAndSetUserData();
		};

		getUserData();
	}, [walletConnectedMode, walletHasSwappedThisSession, requestsSent]);

	const handleSubmit = () => {
		const web3 = new Web3(window.ethereum);
		let result = web3.utils.isAddress(newRequestAddress);
		if (result !== true) {
			alert('Please enter a valid address');
		} else {
			if (localStorage.getItem(currentAccount) === null) {
				localStorage.setItem(currentAccount, JSON.stringify([[[newRequestAddress, permissionTitles]], []]));
			} else {
				var userDb = JSON.parse(localStorage.getItem(currentAccount));
				userDb[0].push([newRequestAddress, permissionTitles]);
				localStorage.setItem(currentAccount, JSON.stringify(userDb));
			}

			if (localStorage.getItem(newRequestAddress) === null) {
				localStorage.setItem(
					newRequestAddress,
					JSON.stringify([[], [[[serviceLevel, currentAccount], permissionTitles]]]),
				);
			} else {
				var userDb2 = JSON.parse(localStorage.getItem(newRequestAddress));
				console.log('THE ADDRESS EXISTS' + userDb2);
				console.log(userDb2[1]);
				userDb2[1].push([[serviceLevel, currentAccount], permissionTitles]);
				console.log(userDb2[1]);
				console.log(userDb2);
				localStorage.setItem(newRequestAddress, JSON.stringify(userDb2));
			}
			alert('request sent.');
			setRequestsSent(requestsSent + 1);
			setNewRequestToggled(false);
		}
	};

	return !isLoaded ? (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>My Requests</AboutSectionHeader>
				</PageHeader>
				<DappCardWrapper>
					<AssetAllocationContainer></AssetAllocationContainer>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	) : isLoaded && walletConnectedMode === true ? (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>My Requests</AboutSectionHeader>
				</PageHeader>
				{newRequestToggled === false ? (
					<DappCardWrapper>
						<SubPageHeader>
							<AboutSectionSubHeader>Pending</AboutSectionSubHeader>
							<SecondaryButton
								onClick={() => {
									setNewRequestToggled(true);
								}}
							>
								+
							</SecondaryButton>
						</SubPageHeader>
						<AssetAllocationContainer>
							{isLoaded && walletConnectedMode === true && newRequests.length !== 0 ? (
								<RequestTicket tickets={newRequests} />
							) : (
								<NoWalletMessage>
									<NoWalletIMG src={smartCity} />
									You have no pending requests right now!
								</NoWalletMessage>
							)}
						</AssetAllocationContainer>
					</DappCardWrapper>
				) : (
					<NewRequestWrapper>
						<SubPageHeader>
							<AboutSectionSubHeader
								style={{ cursor: 'pointer' }}
								onClick={() => {
									setNewRequestToggled(false);
								}}
							>
								{'🡠 Back'}
							</AboutSectionSubHeader>
						</SubPageHeader>
						<AssetAllocationContainer>
							<UserAndGraphContainer>
								<NewReqUserBoxContent>
									<NewReqBoxHeader>New Request</NewReqBoxHeader>
									<NewReqBoxSubtitle>
										{'as a ' + serviceLevel + ', you will recieve information regarding:'}
									</NewReqBoxSubtitle>
									{[...Array(permissionTitles.length)].map((e, i) => {
										return <div key={i}>{'• ' + permissionTitles[i]}</div>;
									})}
									<RequestForm>
										<label>
											Address:
											<AddressInput
												type="text"
												value={newRequestAddress}
												placeholder={'enter an address'}
												onChange={e => setNewRequestAddress(e.target.value)}
											/>
										</label>
										<InformationButton onClick={() => handleSubmit()}>
											Send Request
										</InformationButton>
									</RequestForm>
								</NewReqUserBoxContent>
							</UserAndGraphContainer>
						</AssetAllocationContainer>
					</NewRequestWrapper>
				)}
			</PageWrapper>
			<Footer />
		</>
	) : isLoaded && walletConnectedMode === false ? (
		<>
			<PageWrapper>
				<PageHeader>
					<AboutSectionHeader>My Requests</AboutSectionHeader>
				</PageHeader>
				<DappCardWrapper>
					<AssetAllocationContainer>
						<NoWalletMessage>
							<NoWalletIMG src={noWalletFace} />
							Please connect your wallet to view your requests
						</NoWalletMessage>
					</AssetAllocationContainer>
				</DappCardWrapper>
			</PageWrapper>
			<Footer />
		</>
	) : null;
};

export default EpochPage;
