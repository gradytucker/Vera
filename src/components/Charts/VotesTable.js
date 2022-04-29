import styled from 'styled-components';
import bp from '../Theme/breakpoints';
import { tokenData } from '../../Data/tokens';

const ChartLegendGrid = styled.div`
	display: contents;
	grid-column-gap: 40px;
	grid-row-gap: 80px;
	height: 50px;
	margin-top: 20px;
	margin-bottom: 20px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-radius: 16px;
	border-bottom: 1px solid #ffffff;
	font-size: 12px;
	font-weight: 700;
	@media ${bp.md} {
		font-size: 16px;
	}
`;

const TokenRow = styled.div`
	display: contents;
	grid-column-gap: 40px;
	grid-row-gap: 80px;
	height: 50px;
	margin-top: 10px;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-radius: 16px;
	font-size: 12px;
	@media ${bp.md} {
		font-size: 16px;
	}
`;

const TableContent = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 20px 10px 10px;
	text-align: flex-end;
	justify-content: flex-end;
	white-space: nowrap;
	color: #ffffff;
	margin-bottom: 15px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.md} {
		padding: 24px 20px 10px 10px;
	}
`;

const TableContentText = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 20px 10px 10px;
	text-align: flex-start;
	justify-content: flex-start;
	color: #ffffff;
	margin-bottom: 15px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.md} {
		padding: 24px 20px 10px 10px;
	}
`;

const TokenCell = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 20px 10px 10px;
	text-align: flex-end;
	justify-content: flex-end;
	font-family: 'IBMPlexMono-Regular';
	color: #ffffff;
	@media ${bp.sm} {
		padding: 24px 20px 10px 10px;
	}
`;

const TokenCellText = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 40px 10px 10px;
	text-align: flex-start;
	justify-content: flex-start;
	color: #ffffff;
	@media ${bp.sm} {
		padding: 24px 40px 10px 15px;
	}
`;

const TokenomicsTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-auto-flow: row;
	overflow-x: auto;
	width: 88vw;
	justify-content: flex-start;
	align-content: flex-start;
	margin-top: 50px;
	padding-left: 0px;
	padding-right: 0px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.md} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
		justify-content: center;
		align-content: center;
		margin-top: 50px;
		padding-left: 30px;
		padding-right: 30px;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
`;

const TokenIcon = styled.img`
	width: 20px;
	height: 20px;
	display: flex;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const NegativeDif = styled.h1`
	color: #fe7e8c;
	font-family: 'IBMPlexMono-Regular';
	font-weight: 10px;
	font-size: 12px;
	@media ${bp.md} {
		font-size: 16px;
	}
`;

const PositiveDif = styled.h1`
	color: #09b7b3;
	font-weight: 10px;
	font-family: 'IBMPlexMono-Regular';
	font-size: 12px;
	@media ${bp.md} {
		font-size: 16px;
	}
`;

const removePrecision = num => {
	return num / 10 ** 18;
};

const roundedToTwo = num => {
	return num.toFixed(2);
};

const convertToPercentage = num => {
	return num * 100;
};

const VoteTable = props => {
	const totalVotesNum = removePrecision(props.totalVotes);
	return (
		<TokenomicsTable>
			<ChartLegendGrid>
				<TableContentText>Token</TableContentText>
				<TableContent>Price</TableContent>
				<TableContent>Price Action</TableContent>
				<TableContent>Proposed Weight</TableContent>
				<TableContent>Total Votes Cast</TableContent>
				<TableContent>Your Votes Cast</TableContent>
			</ChartLegendGrid>
			{[...Array(20)].map((e, i) => {
				var tokenDataContractKey = props.wrappertokens[i];
				var imageSource = '/tokenImgs/' + tokenData[tokenDataContractKey].path;
				var RTP = '$' + roundedToTwo(removePrecision(props.realtimeprices[i]));
				var newRatio = Number(
					roundedToTwo(convertToPercentage(removePrecision(props.votes[i] / totalVotesNum))),
				);
				newRatio = newRatio || 0;

				var tokenName = props.names[i];
				var newVotes = roundedToTwo(removePrecision(props.votes[i]));
				var userTokenVotes = roundedToTwo(removePrecision(props.userVotes[i]));
				var oldEpochRatio = roundedToTwo(removePrecision(props.ratio[i])) * 100;
				var newPrice = roundedToTwo(removePrecision(props.realtimeprices[i]));
				var oldPrice = roundedToTwo(removePrecision(props.prices[i]));
				var difference = roundedToTwo(((newPrice - oldPrice) / oldPrice) * 100);

				return (
					<TokenRow key={i}>
						<TokenCellText>
							<TokenIcon src={imageSource}></TokenIcon>
							{tokenName}
						</TokenCellText>
						<TokenCell>{RTP}</TokenCell>
						<TokenCell>
							{difference < 0 ? (
								<NegativeDif>{difference + '%'} </NegativeDif>
							) : difference > 0 ? (
								<PositiveDif>{difference + '%'}</PositiveDif>
							) : difference <= 0 && difference >= 0 ? (
								difference + '%'
							) : null}
						</TokenCell>
						<TokenCell>{newRatio + '%'}</TokenCell>
						<TokenCell>{newVotes}</TokenCell>
						<TokenCell>{userTokenVotes}</TokenCell>
					</TokenRow>
				);
			})}
			;
		</TokenomicsTable>
	);
};

export default VoteTable;
