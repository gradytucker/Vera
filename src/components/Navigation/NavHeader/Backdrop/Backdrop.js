import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';

const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;

	background: rgba(0, 0, 0, 0);
	backdrop-filter: blur(0px);
	-webkit-backdrop-filter: blur(0px);
	@media ${bp.sm} {
		display: none;
	}
`;

const Backdrop = ({ clickHandler, children }) => {
	return <StyledBackdrop onClick={clickHandler}>{children}</StyledBackdrop>;
};

export default Backdrop;
