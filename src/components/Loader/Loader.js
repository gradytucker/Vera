import styled, { keyframes } from 'styled-components';
import boatIcon from '../../assets/images/boat.png';

const ldsHeart = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const BoatLoaderIcon = styled.img`
	width: 50px;
	display: flex;
	margin-bottom: 10px;
`;

const StyledRing = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	margin-left: -20px;
`;

const StyledDiv = styled.div`
	position: absolute;
	animation: ${ldsHeart} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const Spinner = () => {
	return (
		<StyledRing>
			<StyledDiv>
				<BoatLoaderIcon src={boatIcon}></BoatLoaderIcon>
			</StyledDiv>
		</StyledRing>
	);
};

export default Spinner;
