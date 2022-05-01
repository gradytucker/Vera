import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import Footer from '../Navigation/Footer/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import InformationButton from '../Button/InformationButton/InformationButton';
import PrimaryButton from '../Button/Primary/PrimaryButton';
import InformationButtonGreyed from '../Button/InformationButton/InformationButtonGreyed';

import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import React from 'react';
import Web3 from 'web3';
import { indexes } from 'd3';

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
	@media ${bp.sm} {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		margin-top: 50px;
		align-items: center;
	}
`;

const verifyTicket = props => {
	const handleAccept = addr => {
		props.onAccept(addr);
	};

	return (
		<UserAndGraphContainer>
			{[...Array(props.tickets.length)].map((e, i) => {
				var index = i;
				console.log(i);

				console.log(props.tickets[i]);
				return (
					<UserBoxContent key={i}>
						<div>
							<BoxHeader>{props.tickets[i][0][0]}</BoxHeader>
							is requesting access to:
							<div>
								{[...Array(props.tickets[i][1].length)].map((e, j) => {
									return <div key={j}>{'\n• ' + props.tickets[i][1][j]}</div>;
								})}
							</div>
						</div>
						<InformationButton
							onClick={() => {
								handleAccept(props.tickets[i][0][1]);
							}}
						>
							Accept
						</InformationButton>
					</UserBoxContent>
				);
			})}
		</UserAndGraphContainer>
	);
};

export default verifyTicket;
