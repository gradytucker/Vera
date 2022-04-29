import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';

const HamburgerButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 20px;
	width: 20px;

	background-color: transparent;
	border: none;

	&:hover {
		cursor: pointer;
		opacity: 70%;
	}

	@media ${bp.md} {
		display: none;
	}
`;

const HamburgerBar = styled.span`
	width: 20px;
	height: 3px;
	background-color: #000000;
`;

const Hamburger = ({ toggleMobileMenu }) => {
	return (
		<HamburgerButton onClick={toggleMobileMenu}>
			<HamburgerBar />
			<HamburgerBar />
			<HamburgerBar />
		</HamburgerButton>
	);
};

export default Hamburger;
