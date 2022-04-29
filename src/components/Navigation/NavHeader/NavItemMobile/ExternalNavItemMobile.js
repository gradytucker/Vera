import styled from 'styled-components';
import theme from '../../../Theme/theme';

const StyledLi = styled.li`
	list-style: none;
	width: 100%;
	transition: all 0.2s ease;
`;

const StyledNavLink = styled.a`
	margin: 10px 0;
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding-left: 20px;
	color: ${theme.color.text.primary};
	opacity: 60%;
	text-decoration: none;
	text-align: left;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 2.5em;
	&:hover {
		opacity: 100%;
	}
`;

const NavItemMobile = ({ href, target, toggle, children }) => (
	<StyledLi>
		<StyledNavLink href={href} target={target} exact="true" onClick={toggle}>
			{children}
		</StyledNavLink>
	</StyledLi>
);

export default NavItemMobile;
