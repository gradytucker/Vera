import { Carousel } from 'react-responsive-carousel';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import React, { useLayoutEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const BoxContentWrapper = styled.div`
	display: inline-grid;
	grid-template-rows: 230px 230px;
	grid-template-columns: 150px 150px;
	grid-column-gap: 18px;
	grid-row-gap: 20px;
	justify-content: center;
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
		grid-template-rows: 220px 220px;
		grid-template-columns: 175px 175px 175px 175px;
		grid-column-gap: 18px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.md} {
		display: inline-grid;
		grid-template-rows: 240px 240px;
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
	padding: 24px;
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

const BoxHeader = styled.div`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const keyframesFullView = keyframes`
  100% {
    width: 100%;
  }
`;

const keyframesShimmer = keyframes`
  0% {
    background-position: -80vw 0;
  }
  100% {
    background-position: 80vw 0;
  }
`;

const shimmerAnimation = css`
	background: linear-gradient(to right, #22222277 4%, #333333 25%, #22222277 36%);
	background-size: 80vw 100%;
	animation: ${keyframesShimmer} 2s infinite linear;
`;

const ShimmerWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	height: 40px;
	width: 0px;
	margin-bottom: 10px;
	color: #222222;
	animation: ${keyframesFullView} 0.5s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const GaugePlaceHolder = styled.div`
	width: 75px;
	height: 40px;
	margin: 0 auto;
	background-color: #48abe0;
	border-radius: 10rem 10rem 0 0;
	justify-content: center;
	${shimmerAnimation}

	@media ${bp.lg} {
		width: 150px;
		height: 80px;
	}
`;

const DataArea = styled.div`
	display: block;
	width: 100%;
`;

const Field = styled.div`
	height: 10px;
	background: #777;
	margin-top: 16px;
	margin-bottom: 16px;
	border-radius: 8px;
	${({ w50 }) => w50 && 'width: 50%;'}
	${shimmerAnimation}
`;

const PlaceHolderDataContainer = styled.div`
	justify-content: center;
	align-items: center;
`;

const AssetCards = props => {
	const [inner, setInner] = React.useState(0);

	useLayoutEffect(() => {
		function updateSize() {
			if (window.innerWidth > 900) {
				setInner(8);
			} else {
				setInner(4);
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
			return size[0] - 20;
		}
	}

	return (
		<Carousel
			showStatus={false}
			width={useWindowSize()}
			showThumbs={false}
			swipeable={false}
			renderIndicator={false}
		>
			<BoxContentWrapper key={(1).toString()}>
				{[...Array(inner)].map((e, j) => {
					return (
						<BoxContent key={(j + inner).toString()}>
							<BoxHeader>
								<ShimmerWrapper>
									<DataArea>
										<Field w50 />
									</DataArea>
								</ShimmerWrapper>
							</BoxHeader>
							<PlaceHolderDataContainer>
								<GaugePlaceHolder />
								<ShimmerWrapper>
									<DataArea>
										<Field />
										<Field />
									</DataArea>
								</ShimmerWrapper>
							</PlaceHolderDataContainer>
						</BoxContent>
					);
				})}
			</BoxContentWrapper>
		</Carousel>
	);
};

export default AssetCards;
