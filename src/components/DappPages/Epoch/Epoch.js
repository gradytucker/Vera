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

const UserBoxDataBigNum = styled.h1`
	font-size: 20px;
	color: #ffffff;
	height: 100%;
	text-align: center;
	@media ${bp.md} {
		font-size: 30px;
		color: #ffffff;
	}
`;

const UserBoxDataCurrentRewardBigNum = styled.h1`
	font-size: 22px;
	color: #ffffff;
	text-align: center;
	height: 100%;
	@media ${bp.sm} {
		font-size: 22px;
		color: #ffffff;
	}
	@media ${bp.md} {
		font-size: 22px;
		color: #ffffff;
	}
	@media ${bp.lg} {
		font-size: 26px;
		color: #ffffff;
	}
`;

const UserBoxDataDeltasBigNum = styled.h1`
	font-size: 22px;
	color: #ffffff;
	text-align: center;
	height: 100%;
	@media ${bp.sm} {
		font-size: 22px;
		color: #ffffff;
	}
	@media ${bp.md} {
		font-size: 22px;
		color: #ffffff;
	}
	@media ${bp.lg} {
		font-size: 26px;
		color: #ffffff;
	}
`;

const UserBoxDataDeltasBigNumPos = styled.h1`
	font-size: 22px;
	color: #09b7b3;
	text-align: center;
	height: 100%;
	@media ${bp.sm} {
		font-size: 22px;
		color: #09b7b3;
	}
	@media ${bp.md} {
		font-size: 22px;
		color: #09b7b3;
	}
	@media ${bp.lg} {
		font-size: 26px;
		color: #09b7b3;
	}
`;

const UserBoxDataDeltasBigNumNeg = styled.h1`
	font-size: 22px;
	color: #fe7e8c;
	text-align: center;
	height: 100%;
	@media ${bp.sm} {
		font-size: 22px;
		color: #fe7e8c;
	}
	@media ${bp.md} {
		font-size: 22px;
		color: #fe7e8c;
	}
	@media ${bp.lg} {
		font-size: 26px;
		color: #fe7e8c;
	}
`;

const UserBoxDataSubtitle = styled.div`
	display: flex;
	just
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

const ClaimStatusLocked = styled.h1`
	font-size: 14px;
	color: #fe5e6c;
	font-weight: 100;
`;

const ClaimStatusUnlocked = styled.h1`
	font-size: 14px;
	color: #53f4d2;
	font-weight: 100;
`;

const BountyLockIcon = styled.img`
	width: 30px;
	filter: invert(1);
	display: flex;
	margin-bottom: 10px;
`;

const EpochPage = () => {
	const [walletConnectedMode, setWalletConnectedMode] = React.useState(false);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [timeToNextEpoch, setTimeToNextEpoch] = React.useState(0);
	const [bountyValue, setBountyValue] = React.useState(0);
	var [countDownKey, setCountDownKey] = React.useState(0);
	const [deltaT, setDeltaT] = React.useState(0);
	const [deltaW, setDeltaW] = React.useState(0);
	const [bountyLockStatus, setBountyLockStatus] = React.useState(true);
	const [walletHasSwappedThisSession, setWalletHasSwappedThisSession] = React.useState(0);

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
					accounts !== null ? setWalletConnectedMode(true) : setWalletConnectedMode(false);

					// if wallet not connected, just pull contract data
				} catch (err) {
					console.log(err.message);
				}

				const EpochData = await Promise.all([
					contractMethods.lastEpochRebalance(), //[0]
					contractMethods.epochLength(), //[1]
					contractMethods.balanceOf(contractMethods.bountyAddr), //[2]

					// addresses [3]
					Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getCoinAddress(i);
						}),
					),

					//last epoch prices [4]
					Promise.all(
						[...Array(21)].map((e, i) => {
							return contractMethods.getLastEpochPrices(i);
						}),
					),

					// balancedratio [5]
					Promise.all(
						[...Array(20)].map((e, i) => {
							return contractMethods.getBalancedRatio(i);
						}),
					),
				]);

				const priceOfVSL = await contractMethods.getQuote(contractMethods.cAddr);

				const RTP = await Promise.all(
					EpochData[3].map((e, i) => {
						return contractMethods.getQuote(EpochData[3][i]);
					}),
				);

				var ethTime = EpochData[0];
				var lengthOfEpoch = EpochData[1];
				const contractBal = EpochData[2];

				const deltaTval = ((Number(priceOfVSL) - Number(EpochData[4][20])) / Number(EpochData[4][20])) * 100;
				const deltaWval = EpochData[3]
					.map((e, i) => {
						return ((EpochData[5][i] / 10 ** 16) * (RTP[i] - EpochData[4][i])) / EpochData[4][i];
					})
					.reduce((a, b) => Number(a) + Number(b), 0);

				// get lastEpochBalance time for calculating time to next epoch rebalance.
				var jsTime = Date.now() / 1000;
				const timeToGoInSeconds = parseInt(ethTime) + parseInt(lengthOfEpoch) - parseInt(jsTime);
				if (timeToGoInSeconds > 0) {
					setBountyLockStatus(true);
					setTimeToNextEpoch(timeToGoInSeconds * 1000);
				} else {
					setBountyLockStatus(false);
					setTimeToNextEpoch(0);
				}
				setCountDownKey(countDownKey++);

				// get bounty reward value
				setBountyValue(contractBal / 10 ** 18 > 1000000 ? 1000000 : contractBal / 10 ** 18);
				// set delta values
				setDeltaT(deltaTval);
				setDeltaW(deltaWval);
			};
			await getAndSetVesselContractData();
			setIsLoaded(true);
		};

		getContractData();
	}, [walletConnectedMode, walletHasSwappedThisSession]);

	const sleep = milliseconds => {
		return new Promise(resolve => setTimeout(resolve, milliseconds));
	};

	// function for triggering epoch rebalance
	const HandleTriggerRebalance = async () => {
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
				gasLimit: (await web3.eth.getBlock('latest')).gasLimit,
				data: contract.methods._rebalanceEpoch().encodeABI(),
			};

			const txHash = await window.ethereum.request({
				method: 'eth_sendTransaction',
				params: [transactionParameters],
			});

			let transactionReceipt = null;
			while ((transactionReceipt = null)) {
				transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
				await sleep(1000);
			}
			console.log(transactionReceipt);
			if (transactionReceipt.status === true) {
				setBountyLockStatus(true);
				console.log('epoch successfully reset. rerendering...');
			} else {
				console.log('transaction failed, not rerendering.');
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	const Completionist = () => <span>Epoch can be reset now.</span>;
	const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<span>
					{' '}
					<CountdownContentContainer>
						<CountdownContainer>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{days}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>days</UserBoxDataSubtitle>
							</UserBoxDataBox>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{hours}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>hours</UserBoxDataSubtitle>
							</UserBoxDataBox>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{minutes}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>minutes</UserBoxDataSubtitle>
							</UserBoxDataBox>
							<UserBoxDataBox>
								<UserBoxDataBigNum>{seconds}</UserBoxDataBigNum>
								<UserBoxDataSubtitle>seconds</UserBoxDataSubtitle>
							</UserBoxDataBox>
						</CountdownContainer>
						<UserBoxCountdownContent>Until epoch can be reset.</UserBoxCountdownContent>
					</CountdownContentContainer>
				</span>
			);
		}
	};

	return !isLoaded ? (
		<SkeletonEpoch />
	) : (
		<>
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
										date={Date.now() + parseInt(timeToNextEpoch)}
										renderer={countDownRenderer}
										key={Date.now()}
									/>
								</UserBoxDataContainerTimer>
							</UserBoxContent>
							<UserBoxContent>
								<BoxHeader>Collect Bounty</BoxHeader>
								<UserBoxDataContainer>
									<UserBoxDataBox>
										<UserBoxDataCurrentRewardBigNum>{bountyValue}</UserBoxDataCurrentRewardBigNum>
										<UserBoxDataSubtitle> VSL reward</UserBoxDataSubtitle>
									</UserBoxDataBox>
									<UserBoxDataBox>
										<UserBoxDataBigNum>
											{' '}
											{bountyLockStatus === false ? (
												<BountyLockIcon src={unlockIcon} />
											) : (
												<BountyLockIcon src={lockIcon} />
											)}
										</UserBoxDataBigNum>
										<UserBoxDataSubtitle>
											status: &nbsp;
											{bountyLockStatus === false ? (
												<ClaimStatusUnlocked>unlocked</ClaimStatusUnlocked>
											) : (
												<ClaimStatusLocked>locked</ClaimStatusLocked>
											)}
										</UserBoxDataSubtitle>
									</UserBoxDataBox>
								</UserBoxDataContainer>
								{bountyLockStatus === false && walletConnectedMode === true ? (
									<PrimaryButton
										onClick={() => {
											HandleTriggerRebalance();
										}}
									>
										Reset Epoch & Collect
									</PrimaryButton>
								) : walletConnectedMode === false ? (
									<InformationButtonGreyed>Connect wallet to reset</InformationButtonGreyed>
								) : bountyLockStatus === true ? (
									<InformationButtonGreyed>Reset Epoch & Collect</InformationButtonGreyed>
								) : null}
							</UserBoxContent>
						</UserAndGraphContainer>
					</AssetAllocationContainer>

					<BackgroundBlurRight src={greenGlow} alt="blue Glow" />
				</DappCardWrapper>
				<UserBoxDeltaContainer>
					<UserBoxDataBox>
						{deltaT < 0 ? (
							<UserBoxDataDeltasBigNumNeg>{Number(deltaT).toFixed(2)}%</UserBoxDataDeltasBigNumNeg>
						) : deltaT > 0 ? (
							<UserBoxDataDeltasBigNumPos>{Number(deltaT).toFixed(2)}%</UserBoxDataDeltasBigNumPos>
						) : deltaT <= 0 && deltaT >= 0 ? (
							<UserBoxDataDeltasBigNum>{Number(deltaT).toFixed(2)}%</UserBoxDataDeltasBigNum>
						) : null}
						<UserBoxDataSubtitle> Change in token</UserBoxDataSubtitle>
					</UserBoxDataBox>
					<UserBoxDataBox>
						{deltaW < 0 ? (
							<UserBoxDataDeltasBigNumNeg>{Number(deltaW).toFixed(2)}%</UserBoxDataDeltasBigNumNeg>
						) : deltaW > 0 ? (
							<UserBoxDataDeltasBigNumPos>{Number(deltaW).toFixed(2)}%</UserBoxDataDeltasBigNumPos>
						) : deltaW <= 0 && deltaW >= 0 ? (
							<UserBoxDataDeltasBigNum>{Number(deltaW).toFixed(2)}%</UserBoxDataDeltasBigNum>
						) : null}
						<UserBoxDataSubtitle> Change in wrapper</UserBoxDataSubtitle>
					</UserBoxDataBox>
				</UserBoxDeltaContainer>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default EpochPage;
