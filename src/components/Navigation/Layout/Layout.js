import NavHeader from '../NavHeader/NavHeader';
import styled from 'styled-components';

const StyledLayout = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const StyledMain = styled.main`
	background: transparent;
`;

const Layout = ({ children }) => {
	return (
		<>
			<StyledLayout>
				<NavHeader />
				<StyledMain>{children}</StyledMain>
			</StyledLayout>
		</>
	);
};

export default Layout;
