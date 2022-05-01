import NavItemMobile from '../NavItemMobile/NavItemMobile';
import ExternalNavItemMobile from '../NavItemMobile/ExternalNavItemMobile';
import theme from '../../../Theme/theme';
import styled from 'styled-components';
import ConnectButton from '../../../Button/ConnectWallet/ConnectWallet';
import 'react-slidedown/lib/slidedown.css';
import bp from '../../../Theme/breakpoints';

const StyledNav = styled.nav`
	background: #d3d3d3;
	position: fixed;
	padding-bottom: 5px;
	top: 10px;
	right: 10px;
	width: 200px;
	z-index: 100;
	display: canvas;
	flex-direction: column;
	align-items: center;
	padding-top: 40px;
	border-radius: 20px;
	border: 1px solid #ffffff33;
	box-shadow: rgba(0, 0, 0, 0.25) -10px 15px 15px;
	@media ${bp.md} {
		display: none;
	}
`;

const Divider = styled.hr`
	border-top: 2px black;
	width: 100%;
	opacity: 100%;
`;

const HamburgerButton = styled.button`
	display: inline-flex;
	flex-direction: row-reverse;
	position: absolute;
	right: 20px;
	top: 20px;
	height: 18px;
	width: 18px;
	opacity: 100%;
	background-color: transparent;
	border: none;
	z-index: 9999;
	transition: all 0.5s ease;
	&:hover {
		cursor: pointer;
		opacity: 70%;
		transform: rotate(180deg);
	}
`;

const XBar1 = styled.span`
	width: 2px;
	height: 18px;
	border: 1px solid black;
	background-color: black;
	transform: rotate(45deg) translateX(-0.1em) translateY(0.1em);
`;

const XBar2 = styled.span`
	width: 2px;
	height: 18px;
	border: 1px solid black;
	background-color: black;
	transform: rotate(-45deg);
`;

const ButtonContainer = styled.div`
	margin: 10px 0;
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding: 10px;
	color: ${theme.color.text.primary};
	text-decoration: none;
	text-align: center;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 2.5em;
`;

const MobileMenu = ({ toggleMobileMenu }) => {
	return (
		<StyledNav>
			<HamburgerButton onClick={toggleMobileMenu}>
				<XBar1 />
				<XBar2 />
			</HamburgerButton>
			<NavItemMobile link="/" toggle={toggleMobileMenu} exact={true}>
				Home
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/Requests" toggle={toggleMobileMenu} exact={true}>
				My Requests
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/Verifications" toggle={toggleMobileMenu} exact={true}>
				My Verifications
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/FAQ" toggle={toggleMobileMenu} exact={true}>
				FAQ
			</NavItemMobile>
			<Divider />
			<ButtonContainer>
				<ConnectButton />
			</ButtonContainer>
		</StyledNav>
	);
};

export default MobileMenu;
