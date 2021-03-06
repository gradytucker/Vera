import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';
import ConnectButton from '../../../Button/ConnectWallet/ConnectWallet';
import SecondaryButton from '../../../Button/Secondary/SecondaryButton';
import NavItem from '../NavItem/NavItem';
import ExternalNavItem from '../NavItem/ExternalNavItem';
import * as middleware_setup from '../../../../contract/middleware_setup';

const MenuNav = styled.nav`
	font-weight: bold;
	display: none;

	@media ${bp.md} {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

const buyVSLLink = 'https://pancake.kiemtienonline360.com/#/swap?outputCurrency=' + middleware_setup.contractAddress;

const Menu = () => {
	return (
		<MenuNav>
			<NavItem link="/">Home</NavItem>
			<NavItem link="/Requests">My Requests</NavItem>
			<NavItem link="/Verifications">My Verifications</NavItem>
			<NavItem link="/FAQ">FAQ</NavItem>
			<ConnectButton />
		</MenuNav>
	);
};

export default Menu;
