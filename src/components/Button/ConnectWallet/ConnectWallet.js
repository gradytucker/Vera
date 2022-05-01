import styled from 'styled-components';
import theme from '../../Theme/theme';
import React, { useEffect, useState, useRef } from 'react';
import exitIcon from '../../../assets/svgs/exit.svg';
import boatSmall from '../../../assets/images/boat_small.png';
import * as contractMethods from '../../../contract/contract_methods';
import bp from '../../Theme/breakpoints';

const StyledButton = styled.button`
	background: linear-gradient(250deg, #428afa 0%, #00bea8 100%);
	border-radius: 30px;
	padding: 12px;
	transition: all 0.2s ease;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	color: ${theme.color.text.button};
	font-weight: bold;
	font-family: 'expletus-sans-regular';
	border: none;
	margin-bottom: 20px;
	&:hover {
		cursor: pointer;
	}
	@media ${bp.md} {
		margin-bottom: 0px;
	}
`;

const ButtonContainer = styled.div`
	position: relative;
	display: inline-block;
	background-color: transparent;
	border: 0px;
`;

const AccountButtons = styled.div`
	position: relative;
	display: flex;
	flex-direction: column-reverse;
	background-color: transparent;
	border: 0px;

	@media ${bp.md} {
		flex-direction: row;
	}
`;

const Dropdown = styled.div`
	position: absolute;
	top: 0;
	right: 100%;
	width: fit-content;
	margin-top: 10px;
	z-index: 2;
	border-radius: 20px;
	background: transparent;
	@media ${bp.md} {
		position: absolute;
		top: 100%;
		right: 0;
		width: fit-content;
		margin-top: 10px;
		z-index: 2;
		border-radius: 20px;
		background: transparent;
	}
`;

const DropdownUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	width: fit-content;
	height: 30px;
`;

const DropdownListItem = styled.li`
	padding: 8px 2px;
	color: #ffffff;
	border-radius: 12px;
	width: fit-content;
	text-align: center;
	backdrop-filter: blur(9px);
`;

const DisconnectWalletButton = styled.button`
	font-size: 14px;
	color: #fe5e6c;
	padding: 13px;
	width: 180px;
	border: 0px;
	background: #f3f3f3;
	backdrop-filter: blur(9px);
	border-radius: 12px;
	font-weight: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background: #d3d3d3;
		cursor: pointer;
	}
	&:active {
		background: rgba(12, 22, 22, 0.9);
	}
`;

const BoxIcon = styled.img`
	width: 20px;
	margin-left: 20px;
	filter: invert(0);
`;

const BalanceIcon = styled.img`
	width: 15px;
	margin-right: 6px;
`;

const ConnectButton = ({ style }) => {
	const [walletIsActive, setWalletIsActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState('');
	const [userBalance, setUserBalance] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		const checkWalletInStorage = () => {
			console.log('CHECKING WALLET');
			if (localStorage.getItem('account') !== '' && localStorage.getItem('account') !== null) {
				if (localStorage.getItem('account') !== defaultAccount) {
					console.log('hello from eager connect, CONNECT WALLET HANDLER EXECUTING');
					connectWalletHandler();
				}
			} else {
				setWalletIsActive(false);
			}
		};
		checkWalletInStorage();
		if (!window.ethereum) {
			return;
		}

		window.ethereum.on('accountsChanged', accountChangedHandler);
		window.ethereum.on('chainChanged', chainChangedHandler);
		window.ethereum.on('disconnect', disconnect);

		return () => {
			window.ethereum.removeListener('accountsChanged', accountChangedHandler);
			window.ethereum.removeListener('chainChanged', chainChangedHandler);
			window.ethereum.removeListener('disconnect', disconnect);
		};
	}, [defaultAccount]);

	// handler for connecting wallet
	const connectWalletHandler = async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			/* PLEASE CHANGE CHAIN DETAILED WHEN DEPLOYING TO LIVENET*/
			try {
				// check if the chain to connect to is installed
				window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: contractMethods.cChainID }], // chainId must be in hexadecimal numbers
				});
			} catch (error) {
				// This error code indicates that the chain has not been added to MetaMask
				// if it is not, then install it into the user MetaMask
				if (error.code === 4902) {
					try {
						window.ethereum.request({
							method: 'wallet_addEthereumChain',
							params: [
								{
									chainId: contractMethods.cChainID,
									rpcUrl: contractMethods.cRPC,
								},
							],
						});
					} catch (addError) {
						console.error(addError);
					}
				}
				console.error(error);
			}
			console.log('hello');
			const ethGetAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			if (ethGetAccounts) {
				console.log('hello from conect wallet handlerXXX');
				accountChangedHandler(ethGetAccounts[0]);
				localStorage.setItem('account', ethGetAccounts[0]);
				console.log('EMITTING EVENT');
				window.dispatchEvent(new Event('storage'));
				//console.log('event dispatched');
				setWalletIsActive(true);
				//console.log('wallet connected');
			}
		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
			console.log(errorMessage);
		}
	};

	// update account, will cause component re-render
	const accountChangedHandler = newAccount => {
		//console.log('OKAY WE ARE swapping account');
		setDefaultAccount(newAccount);
		localStorage.setItem('account', newAccount);
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	};

	// disconnect wallet
	const disconnect = async () => {
		console.log('FOR SOME REASON IM DISCONNECTED');
		setDefaultAccount('0x0');
		setWalletIsActive(false);
		localStorage.setItem('account', '');
		window.dispatchEvent(new Event('storage'));
	};

	// toggle drop down box
	const handleDisconnectDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	// detect outside dropdown click
	function useOutsideAlerter(ref) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setDropdownOpen(false);
				}
			}

			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	}

	const removePrecision = num => {
		return num / 10 ** 18;
	};

	const roundedToTwo = num => {
		return num.toFixed(2);
	};

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<>
			{walletIsActive ? (
				<ButtonContainer>
					<AccountButtons>
						<StyledButton style={style} onClick={() => handleDisconnectDropdown()}>
							{defaultAccount.slice(0, 6) + '...' + defaultAccount.slice(-4)}
						</StyledButton>
					</AccountButtons>
					{dropdownOpen ? (
						<Dropdown ref={wrapperRef}>
							<DropdownUl>
								<DropdownListItem
									onClick={() => {
										disconnect();
									}}
								>
									<DisconnectWalletButton>
										Disconnect Wallet <BoxIcon src={exitIcon} />
									</DisconnectWalletButton>
								</DropdownListItem>
							</DropdownUl>
						</Dropdown>
					) : null}
				</ButtonContainer>
			) : (
				<div>
					<StyledButton
						style={style}
						onClick={() => {
							setDropdownOpen(false);
							connectWalletHandler();
						}}
					>
						{'Connect Wallet'} {'❯'}
					</StyledButton>
				</div>
			)}
		</>
	);
};
export default ConnectButton;
