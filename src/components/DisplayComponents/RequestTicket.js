import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import Footer from '../Navigation/Footer/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import PrimaryButton from '../Button/Primary/PrimaryButton';
import InformationButton from '../Button/InformationButton/InformationButton';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Web3 from 'web3';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const UserBoxContent = styled.div`
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
	width: 88vw;
	@media ${bp.sm} {
		flex: 0 0 29%;
		width: 350px;
		height: 300px;
		margin-left: 20px;
		margin-right: 20px;
	}
`;

const BoxHeader = styled.h1`
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
const BoxSubtitle = styled.h1`
	color: ${theme.color.text.primary};
	padding-top: 10px;
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 18px;
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

const UserAndGraphContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	width: 90%;
	align-items: center;
	@media ${bp.md} {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		margin-top: 50px;
		align-items: center;
	}
`;

const VerifyTicket = props => {
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

	return (
		<UserAndGraphContainer>
			{[...Array(props.tickets.length)].map((e, i) => {
				var index = i;
				if (props.tickets[i][2] !== 0) {
					var uncleanData = props.tickets[i][2][1];
					var dataValues = uncleanData.split('&');
					for (var x = 0; x < dataValues.length; x++) {
						dataValues[x] = dataValues[x].replace(';', ', ');
					}
				}

				return props.tickets[i][2].length == 0 ? (
					<UserBoxContent key={i}>
						<div>
							<BoxHeader>you are requesting:</BoxHeader>
							{[...Array(props.tickets[i][1].length)].map((e, j) => {
								return <div key={j}>{'\n• ' + props.tickets[i][1][j]}</div>;
							})}
						</div>
						<div>
							from:
							<BoxHeader>
								{props.tickets[i][0].slice(0, 4) + '...' + props.tickets[i][0].slice(-4)}
							</BoxHeader>
						</div>
					</UserBoxContent>
				) : (
					<UserBoxContent key={i}>
						<div style={{ overflowWrap: 'normal' }}>
							<BoxHeader>Request accepted</BoxHeader>
							<InformationButton onClick={openModal}>view data</InformationButton>
							<Modal
								isOpen={modalIsOpen}
								onAfterOpen={afterOpenModal}
								onRequestClose={closeModal}
								style={customStyles}
								contentLabel="Example Modal"
							>
								<h2>Data recieved:</h2>
								<div
									style={{
										marginTop: '10px',
										marginBottom: '10px',
									}}
								>
									{[...Array(dataValues.length - 1)].map((e, n) => {
										return (
											<div
												key={n}
												style={{
													marginBottom: '20px',
												}}
											>
												<div
													style={{
														marginTop: '10px',
														fontWeight: 'bold',
														fontSize: '18px',
													}}
												>
													{' '}
													{props.tickets[i][1][n] + ': '}
												</div>
												{'\n• ' + dataValues[n]}
											</div>
										);
									})}
								</div>
								<InformationButton onClick={closeModal}>close</InformationButton>
							</Modal>
						</div>
						<div>
							from:
							<BoxHeader>
								{props.tickets[i][0].slice(0, 4) + '...' + props.tickets[i][0].slice(-4)}
							</BoxHeader>
							<div
								style={{
									paddingBottom: '20px',
									fontSize: '12px',
									textDecoration: 'underline',
								}}
								onClick={() => window.open(props.tickets[i][2][2], '_blank')}
							>
								{' '}
								view the transaction on block explorer
							</div>
							<div style={{ fontSize: '12px', marginTop: '-10px', wordWrap: 'break-word' }}>
								{props.tickets[i][2][0] + '\n'}
							</div>
						</div>
					</UserBoxContent>
				);
			})}
		</UserAndGraphContainer>
	);
};

export default VerifyTicket;
