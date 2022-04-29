import { Carousel } from 'react-responsive-carousel';
import GaugeChart from 'react-gauge-chart';
import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import React, { useLayoutEffect, useState } from 'react';
import { tokenData } from '../../Data/tokens';

const BoxContentWrapper = styled.div`
	display: inline-grid;
	grid-template-rows: 240px 240px;
	grid-template-columns: 40vw 40vw;
	grid-column-gap: 18px;
	grid-row-gap: 20px;
	justify-content: center;
	@media ${bp.xs} {
		display: inline-grid;
		grid-template-rows: 250px 250px;
		grid-template-columns: 200px 200px;
		grid-column-gap: 18px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.sm} {
		display: inline-grid;
		grid-template-rows: 250px 250px;
		grid-template-columns: 250px 250px;
		grid-column-gap: 18px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.smd} {
		display: inline-grid;
		grid-template-rows: 230px 230px;
		grid-template-columns: 175px 175px 175px 175px;
		grid-column-gap: 18px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.md} {
		display: inline-grid;
		grid-template-rows: 230px 230px;
		grid-template-columns: 200px 200px 200px 200px;
		grid-column-gap: 22px;
		grid-row-gap: 22px;
		justify-content: flex-start;
	}
	@media ${bp.lg} {
		display: inline-grid;
		grid-template-rows: 270px 270px;
		grid-template-columns: 250px 250px 250px 250px;
		grid-column-gap: 28px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.xl} {
		display: inline-grid;
		grid-template-rows: 300px 300px;
		grid-template-columns: 300px 300px 300px 300px;
		grid-column-gap: 28px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
`;

const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 18px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(132, 132, 132, 0.5);
	width: 100%;
	@media ${bp.md} {
		max-width: 300px;
		height: 230px;
	}
	@media ${bp.lg} {
		max-width: 300px;
		height: 270px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 14px;
	display: flex;
	justify-content: flex-start;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const BoxSubdata = styled.div`
	color: ${theme.color.text.primary};
	margin-top: 20px;
	margin-bottom: 0px;
	text-align: flex-start;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 2px;
	@media ${bp.sm} {
		margin-top: 4px;
		margin-bottom: 0px;
	}
`;
const BoxSubdataTitle = styled.h3`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	margin-top: -5px;
	text-align: left;
	font-size: 10px;
	font-weight: 700;
	max-width: 60px;
	display: flex;

	padding-bottom: 2px;
	@media ${bp.sm} {
		font-size: 12px;
		max-width: 200px;
		margin-top: -5px;
	}
	@media ${bp.smd} {
		font-size: 12px;
		max-width: 60px;
		margin-top: 0px;
	}
	@media ${bp.md} {
		font-size: 12px;
		max-width: 100px;
		margin-top: 0px;
	}
`;
const BoxSubdataValue = styled.h3`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	text-align: flex-start;
	font-size: 10px;
	display: flex;
	font-weight: 500;
	font-family: 'IBMPlexMono-Light';
	justify-content: space-between;
	padding-bottom: 2px;
	@media ${bp.sm} {
		font-size: 12px;
	}
`;

const TokenIcon = styled.img`
	max-width: 20px;
	height: 20px;
	display: flex;
	margin-right: 10px;
	margin-bottom: 10px;
`;

const removePrecision = num => {
	return num / 10 ** 18;
};

const roundedToTwo = num => {
	return num.toFixed(2);
};

const roundedToOne = num => {
	return num.toFixed(1);
};

const AssetCards = props => {
	const [outer, setOuter] = React.useState(0);
	const [inner, setInner] = React.useState(0);
	const [pFontSize, setPFontSize] = React.useState('0px');

	useLayoutEffect(() => {
		function updateSize() {
			if (window.innerWidth > 900) {
				setOuter(3);
				setInner(8);
				setPFontSize('18px');
			} else {
				setOuter(5);
				setInner(4);
				setPFontSize('14px');
			}
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener('resize', updateSize);
			updateSize();
			return () => window.removeEventListener('resize', updateSize);
		}, []);
		if (size[0] > 1440) {
			// xl breakpoint
			return 1400;
		} else if (1280 < size[0] && size[0] < 1440) {
			// lg breakpoint
			return 1200;
		} else if (1024 < size[0] && size[0] < 1280) {
			// md breakpoint
			return 1000;
		} else if (900 < size[0] && size[0] < 1024) {
			// smd breakpoint
			return 840;
		} else if (768 < size[0] && size[0] < 900) {
			// sm breakpoint
			return 600;
		} else {
			// mobile breakpoint
			return size[0] - 10;
		}
	}

	const GraphColors = [
		['#FF5F6D', '#FFC37122'],
		['#E53EF4', '#FF5F6D22'],
		['#26F390', '#3E71F422'],
		['#FFC371', '#26F39022'],
		['#FEAA72', '#ACC18C22'],
		['#7EC9F5', '#3957ED22'],
		['#A0B5EB', '#C9F0E422'],
		['#EDAEF9', '#81B1FA22'],
	];

	const sortedCards = (tokens, ratios, prices, RTPs, votes, names) => {
		var allCardsList = [];
		for (var i = 0; i < tokens.length; i++) {
			allCardsList.push([
				tokens[i],
				Number(ratios[i]),
				Number(prices[i]),
				Number(RTPs[i]),
				Number(votes[i]),
				names[i],
			]);
		}

		function sortRatioFunction(a, b) {
			if (a[1] === b[1]) {
				return 0;
			} else {
				return a[1] > b[1] ? -1 : 1;
			}
		}

		return allCardsList.sort(sortRatioFunction);
	};

	var sortedAssets = sortedCards(
		props.wrappertokens,
		props.ratio,
		props.prices,
		props.realtimeprices,
		props.votes,
		props.names,
	);

	return (
		<Carousel
			showStatus={false}
			width={useWindowSize()}
			showThumbs={false}
			swipeable={false}
			renderIndicator={false}
		>
			{[...Array(outer)].map((e, i) => {
				return (
					<BoxContentWrapper key={(i + 1).toString()}>
						{[...Array(inner)].map((e, j) => {
							if (j + inner * i > 19) {
								return null;
							} else {
								var tokenDataContractKey = sortedAssets[j + inner * i][0];
								var tokenRatio = removePrecision(sortedAssets[j + inner * i][1]);
								var n = 3;
								var arcCountConst = 2;
								tokenRatio > 0.4
									? (arcCountConst = 4)
									: tokenRatio > 0.3
									? (arcCountConst = 4)
									: tokenRatio > 0.15
									? (arcCountConst = 2.5)
									: tokenRatio > 0.05
									? (arcCountConst = 2.5)
									: tokenRatio > 0.04
									? (arcCountConst = 2)
									: tokenRatio > 0.01
									? (arcCountConst = 2)
									: (arcCountConst = 2.2);
								var tokenPercentMagnified = ((n + 1) * tokenRatio) / (n * tokenRatio + 1);
								var wholePercent = Math.round(tokenRatio * 100);
								var tokenRatioArcArray = [
									...Array(Math.round(wholePercent / arcCountConst)).keys(),
								].map(i => tokenPercentMagnified / (wholePercent / arcCountConst));

								tokenRatioArcArray.push(1 - tokenPercentMagnified);

								var zeroArcArray = [0.001, 1 - 0.001];
								var imageSource = '/tokenImgs/' + tokenData[tokenDataContractKey].path;
								var tokenName = sortedAssets[j + inner * i][5];
								return (
									<BoxContent key={(j + inner * i).toString()}>
										<BoxHeader>
											<TokenIcon src={imageSource}></TokenIcon>
											{tokenName}
										</BoxHeader>
										<GaugeChart
											style={{ fontWeight: '200' }}
											fontSize={pFontSize}
											id={(j + inner * i).toString()}
											colors={GraphColors[j]}
											arcWidth={0.3}
											needleBaseColor={'#00000000'}
											needleColor={'#00000000'}
											arcsLength={tokenRatio > 0.01 ? tokenRatioArcArray : zeroArcArray}
											percent={tokenPercentMagnified}
											cornerRadius={0}
											formatTextValue={value =>
												roundedToOne(((n * tokenRatio + 1) * value) / (n + 1)) + '%'
											}
										/>

										<BoxSubdata>
											<BoxSubdataTitle>Locked Value</BoxSubdataTitle>
											<BoxSubdataValue>
												{'$' + roundedToTwo(removePrecision(sortedAssets[j + inner * i][2]))}
											</BoxSubdataValue>
										</BoxSubdata>
										<BoxSubdata>
											<BoxSubdataTitle>Realtime Price</BoxSubdataTitle>
											<BoxSubdataValue>
												{'$' + roundedToTwo(removePrecision(sortedAssets[j + inner * i][3]))}
											</BoxSubdataValue>
										</BoxSubdata>
									</BoxContent>
								);
							}
						})}
					</BoxContentWrapper>
				);
			})}
		</Carousel>
	);
};

export default AssetCards;
