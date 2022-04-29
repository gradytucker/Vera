import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	color: ${theme.color.button};
	font-weight: bold;
	font-family: 'expletus-sans-regular';
	border: solid;
	background-color: ${theme.color.background.primary};
	border-color: ${theme.color.accent};
	border-radius: 30px;
	padding: 10px 10px 10px 10px;
	margin-left: 5px;
	margin-right: 5px;
	transition: all 0.2s ease-in-out;
	z-index: 9999;
	position: relative;

	&:hover {
		cursor: pointer;
		background: rgba(6, 182, 186, 0.2);
		z-index: 9999;
	}
`;

const InformationButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
export default InformationButton;
