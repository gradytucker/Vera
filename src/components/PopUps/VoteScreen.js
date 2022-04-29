import React from 'react';
import ActionButton from '../Button/Action/ActionButton';
import InformationButtonGreyed from '../Button/InformationButton/InformationButtonGreyed';
import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import { tokenData } from '../../Data/tokens';
import Slider from '../Inputs/slider';
import InformationButton from '../Button/InformationButton/InformationButton';
import PlusIcon from '../../assets/images/plus.png';
import DeleteIcon from '../../assets/images/x.png';
import UncheckedIcon from '../../assets/images/uncheckedbox.png';
import CheckedIcon from '../../assets/images/checkedbox.png';

const Modal = styled.div`
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 200vh;
	background: rgba(0, 0, 0, 0.6);
	overflow: hidden;
	position: absolute;
	z-index: 999;
`;

const ModalMain = styled.div`
	position: fixed;
	padding: 24px;
	background: rgba(30, 45, 52, 1);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	width: 80%;
	height: 70vh;
	min-height: 470px;
	max-height: 500px;
	top: 50%;
	left: 50%;
	transform: translate(calc(-50% - 0.4px), calc(-50% - 0.4px));
	@media ${bp.sm} {
		width: 55%;
		max-width: 600px;
		height: 60vh;
	}
`;

const TokenomicsTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	grid-auto-rows: 50px;
	width: 100%;
	justify-content: center;
	margin-top: -20px;
	padding-left: 30px;
	padding-right: 30px;
	height: 75%;
	margin-bottom: 20px;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	overflow-y: auto;
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 40px;
	text-align: flex-start;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;

	@media ${bp.md} {
		color: ${theme.color.text.primary};
		margin-bottom: 40px;
		text-align: flex-start;
		font-size: 24px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 4px;
	}
`;

const TokenRow = styled.div`
	display: contents;
	grid-column-gap: 40px;
	height: 50px;
	margin-top: 10px;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-radius: 16px;
`;

const TokenCell = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 24px 10px 10px;
	text-align: flex-start;
	color: #ffffff;
	font-size: 10px;
	@media ${bp.xs} {
		padding: 12px;
		font-size: 14px;
		padding: 24px 24px 10px 24px;
	}
	@media ${bp.sm} {
		padding: 12px;
		font-size: 14px;
		padding: 24px 24px 10px 24px;
	}
`;

const TokenIcon = styled.img`
	width: 20px;
	height: 20px;
	display: flex;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const ActionIcon = styled.img`
	width: 20px;
	height: 20px;
	display: flex;
	margin-right: 20px;
	margin-bottom: 10px;
	filter: invert(1);
	&:hover {
		cursor: pointer;
	}
`;

const Selector = styled.div`
	position: relative;
	transform: translate(calc(-50% - 0.4px), calc(-50% - 0.4px));
	width: 100%;
	justify-content: center;
	margin-top: -20px;
	padding-top: 20px;
	padding-left: 30px;
	padding-right: 30px;
	height: 75%;
	margin-bottom: 20px;
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	background: rgba(0, 0, 0, 0.5);
	overflow: scroll;
	transform: translateZ(0);
`;

const EmptyList = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	transform: translate(calc(-50% - 0.4px), calc(-50% - 0.4px));
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-top: -20px;
	padding-top: 20px;
	padding-left: 30px;
	padding-right: 30px;
	height: 75%;
	margin-bottom: 20px;
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	background: rgba(0, 0, 0, 0.5);
	overflow: scroll;
	transform: translateZ(0);
`;

const EmptyListMessage = styled.div`
	color: ${theme.color.text.secondary};
	font-size: 14px;
	margin: 0 auto;
	opacity: 0.5;
`;

const SelectorUl = styled.ul`
	list-style: none;
	padding-left: 20px;
	padding-right: 20px;
	margin: 0;
	width: fit-content;
	height: 50px;
	transform: translateZ(0);
`;

const SelectorListItem = styled.li`
	padding: 8px 2px;
	color: #ffffff;
	border-radius: 12px;
	width: fit-content;
	text-align: center;
	display: flex;
	transform: translateZ(0);
`;

const VoteActionButtons = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;

const VoteModal = props => {
	const [totalAllocation, setTotalAllocation] = React.useState(0);
	const [initTotalAllocation] = React.useState(props.supportCurrent.reduce((a, b) => Number(a) + Number(b), 0));
	const [tokenIndexesToAvoidInReallocation, setTokenIndexesToAvoidInReallocation] = React.useState([]);
	const [newUserVotes, setNewUserVotes] = React.useState(Array(20).fill(0));
	const [adjustedUserVotes, setAdjustedUserVotes] = React.useState(props.supportCurrent);
	const [tokenSelectorOpen, settokenSelectorOpen] = React.useState(true);
	const [tokensToVoteOn, setTokensToVoteOn] = React.useState([]);
	const [tokensSelectedStatus, setTokenSelectedStatus] = React.useState(Array(20).fill(0));
	const [totalDiff, setTotalDiff] = React.useState(0);

	//React.useEffect(() => {
	//	const initialTokensSelectedStatus = Array(20).fill(0);
	//	setTokensToVoteOn(tokensToVoteOn => [...tokensToVoteOn.splice(0, tokensToVoteOn.length)]);
	//	setTokenIndexesToAvoidInReallocation(tokenIndexesToAvoidInReallocation => [
	//		...tokenIndexesToAvoidInReallocation.splice(0, tokenIndexesToAvoidInReallocation.length),
	//	]);
	//	setTokenSelectedStatus(initialTokensSelectedStatus);
	//	setTotalAllocation(0);
	//	setNewUserVotes(Array(20).fill(0));
	//	setAdjustedUserVotes(adjustedUserVotes => [...props.supportCurrent]);
	//}, [props.open]);

	// whenever one of the sliders are moved on the vote screen, update the votes array
	const onUpdate = (dif, vote, index) => {
		console.log(dif);
		setTotalAllocation(Number(totalAllocation + dif));
		var tempUpdateVotes = newUserVotes;
		tempUpdateVotes[index] = (vote * 10 ** 16).toString();
		setNewUserVotes(tempUpdateVotes);
		setTotalDiff(totalDiff + dif);
		console.log(totalAllocation);
		// UNCOMMENT THIS TO ENABLE AUTOREALLOCATION
		//handleWeightReallocation();
	};

	// token array for selector.
	const votableTokens = (tokens, currents) => {
		var tokensArr = [];
		for (var i = 0; i < tokens.length; i++) {
			tokensArr.push([tokens[i], Number(currents[i])]);
		}
		return tokensArr;
	};
	const votableTokensList = votableTokens(props.wrappertokens, props.supportCurrent);

	// toggle selector
	const handleTokenSelector = () => {
		settokenSelectorOpen(!tokenSelectorOpen);
	};

	const handleWeightReallocation = () => {
		// apply reallocation to applicable tokens, ensuring that reallocation maintains weight validity
		const ReallocatedUserVotes = newUserVotes.map(function (item, index) {
			// the proportion of 100% that the currently selected tokens hold before weight modification
			const x1 = props.supportCurrent
				.filter((item, index) => tokenIndexesToAvoidInReallocation.includes(index))
				.reduce((a, b) => Number(a) + Number(b), 0);

			// the proportion of 100% that the currently selected tokens now hold after weight modification
			const y1 = newUserVotes
				.filter((item, index) => tokenIndexesToAvoidInReallocation.includes(index))
				.reduce((a, b) => Number(a) + Number(b), 0);

			// the proportion of 100% that the non-selected tokens hold before weight modification
			const x2 = (10 ** 18 - x1) / 10 ** 18;

			// the proportion of 100% that the non-selected tokens now hold after weight modification
			const y2 = (10 ** 18 - y1) / 10 ** 18;

			const wi = Number(item) / 10 ** 18;

			const newAllocation = BigInt(Math.floor(y2 / (x2 / wi)) * 10 ** 18);

			// the new weight of the token after auto-reallocation.
			return !tokenIndexesToAvoidInReallocation.includes(index) ? newAllocation.toString() : item.toString();
		});

		setAdjustedUserVotes(ReallocatedUserVotes);
		setTotalAllocation(ReallocatedUserVotes.reduce((a, b) => BigInt(a) + BigInt(b), 0));
	};

	const handleErrorCorrectionAndSubmitVote = () => {
		const ExpectedTotal = BigInt(10 ** 18);
		const ErroredAllocation = adjustedUserVotes.reduce((a, b) => BigInt(a) + BigInt(b), 0);
		const difference = BigInt(ErroredAllocation - ExpectedTotal);
		const StrToNumVotes = adjustedUserVotes.map(item => {
			return Number(item);
		});

		// find the minimum non-zero value index to update
		var minTokenWeightIndex = StrToNumVotes.indexOf(Math.min.apply(Math, adjustedUserVotes.filter(Number)));

		const submitVote = adjustedUserVotes.map((item, index) => {
			return index === minTokenWeightIndex ? String(BigInt(item) - difference) : String(item);
		});

		props.onSubmit(submitVote);
	};

	if (!props.open) {
		return null;
	}

	return (
		<Modal>
			<ModalMain id="modal">
				{tokenSelectorOpen === true ? (
					<BoxHeader>Select tokens:</BoxHeader>
				) : (
					<BoxHeader>Your vote: ( {totalAllocation}%)</BoxHeader>
				)}

				{tokenSelectorOpen === true ? (
					/* DROP DOWN TOKEN SELECTOR */
					<Selector>
						{votableTokensList.map((e, i) => {
							var tokenDataContractKey = votableTokensList[i][0];
							var imageSource = '/tokenImgs/' + tokenData[tokenDataContractKey].path;
							return (
								<SelectorUl key={i}>
									<SelectorListItem
										onClick={() => {
											if (tokensSelectedStatus[i] === 0) {
												// add token to TokensToVoteOn list
												setTokensToVoteOn(tokensToVoteOn => [
													...tokensToVoteOn,
													[votableTokensList[i][0], votableTokensList[i][1], i],
												]);

												// add token to the avoid-adjustment list
												setTokenIndexesToAvoidInReallocation(
													tokenIndexesToAvoidInReallocation => [
														...tokenIndexesToAvoidInReallocation,
														i,
													],
												);
												// select token
												setTokenSelectedStatus(tokensSelectedStatus => {
													return tokensSelectedStatus.map((item, j) => {
														return j === i ? 1 : item;
													});
												});
											} else {
												// remove token from TokensToVoteOn list
												setTokensToVoteOn(tokensToVoteOn =>
													tokensToVoteOn.filter(item => item[2] !== i),
												);

												// remove token from the avoid-adjustment list
												setTokenIndexesToAvoidInReallocation(
													tokenIndexesToAvoidInReallocation =>
														tokenIndexesToAvoidInReallocation.filter(item => item !== i),
												);
												// deselect token
												setTokenSelectedStatus(tokensSelectedStatus => {
													return tokensSelectedStatus.map((item, j) => {
														return j === i ? 0 : item;
													});
												});
											}
										}}
									>
										{tokensSelectedStatus[i] === 0 ? (
											<ActionIcon src={UncheckedIcon}></ActionIcon>
										) : (
											<ActionIcon src={CheckedIcon}></ActionIcon>
										)}

										<TokenIcon src={imageSource}></TokenIcon>
										{props.names[i]}
									</SelectorListItem>
								</SelectorUl>
							);
						})}
					</Selector>
				) : tokenSelectorOpen === false && tokensToVoteOn.length !== 0 ? (
					<TokenomicsTable>
						{/* CURRENTLY SELECTED VOTABLE TOKENS */}
						{[...Array(tokensToVoteOn.length)].map((e, i) => {
							var tokenDataContractKey = tokensToVoteOn[i][0];
							var imageSource = '/tokenImgs/' + tokenData[tokenDataContractKey].path;
							var tokenName = props.names[tokensToVoteOn[i][2]];
							return (
								<TokenRow key={i}>
									<TokenCell>
										<TokenIcon src={imageSource}></TokenIcon>
										{tokenName}
									</TokenCell>
									<TokenCell>
										<Slider
											//max={100 / tokensToVoteOn.length}
											max={100}
											defaultVal={0}
											//defaultVal={tokensToVoteOn[i][1] / 10 ** 16}
											onUpdate={(val, vote) => {
												onUpdate(val, vote, tokensToVoteOn[i][2]);
											}}
										/>
									</TokenCell>
									<TokenCell>
										<ActionIcon
											src={DeleteIcon}
											onClick={() => {
												// remove token from tokenstovoteon list
												setTokensToVoteOn(tokensToVoteOn => [
													...tokensToVoteOn.slice(0, i),
													...tokensToVoteOn.slice(i + 1, tokensToVoteOn.length),
												]);
												// remove token from the avoid-adjustment list
												setTokenIndexesToAvoidInReallocation(
													tokenIndexesToAvoidInReallocation =>
														tokenIndexesToAvoidInReallocation.filter(
															item => item !== tokensToVoteOn[i][2],
														),
												);
												// deselect token
												setTokenSelectedStatus(tokensSelectedStatus => {
													return tokensSelectedStatus.map((item, j) => {
														return j === tokensToVoteOn[i][2] ? 0 : item;
													});
												});
											}}
										/>
									</TokenCell>
								</TokenRow>
							);
						})}
					</TokenomicsTable>
				) : (
					<EmptyList>
						<EmptyListMessage>Select one or more tokens to get started</EmptyListMessage>
					</EmptyList>
				)}

				{/* modal submission and cancel buttons*/}
				<VoteActionButtons>
					<div>
						<InformationButton
							// cancel vote
							onClick={() => {
								setTokensToVoteOn(tokensToVoteOn => []);
								setTokenSelectedStatus(Array(20).fill(0));
								setNewUserVotes(Array(20).fill(0));
								setTotalAllocation(0);
								props.onClose();
								if (tokenSelectorOpen === false) {
									handleTokenSelector();
								}
							}}
						>
							Cancel
						</InformationButton>

						{/* switch between selector screen and vote screen */}
						{tokenSelectorOpen === true ? (
							<ActionButton
								onClick={() => {
									handleTokenSelector();
								}}
							>
								Confirm
							</ActionButton>
						) : (
							<ActionButton
								onClick={() => {
									handleTokenSelector();
									setTotalAllocation(0);
									setNewUserVotes(Array(20).fill(0));
								}}
							>
								Select Tokens
							</ActionButton>
						)}
					</div>

					{/* send off vote to smart contract */}
					{tokensSelectedStatus.reduce((a, b) => Number(a) + Number(b), 0) === 0 ||
					totalAllocation !== 100 ? (
						<InformationButtonGreyed>Submit Vote</InformationButtonGreyed>
					) : (
						<ActionButton
							onClick={() => {
								setTokensToVoteOn(tokensToVoteOn => []);
								setTotalAllocation(0);
								if (tokenSelectorOpen === false) {
									handleTokenSelector();
								}
								//UNCOMMENT THIS TO ENABLE AUTOREALLOCATION
								//handleErrorCorrectionAndSubmitVote();
								props.onSubmit(newUserVotes);
								props.onClose();
								setTokenSelectedStatus(Array(20).fill(0));
								setTotalAllocation(0);
							}}
						>
							Submit Vote
						</ActionButton>
					)}
				</VoteActionButtons>
			</ModalMain>
		</Modal>
	);
};

export default VoteModal;
