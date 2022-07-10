import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	color: ${theme.color.text.button};
	font-weight: bold;
	font-family: 'expletus-sans-bold';
	border: none;
	background-color: rgba(255, 255, 255, 0.2);
	border-color: ${theme.color.text.secondary};
	border-radius: 30px;
	padding: 10px 10px 10px 10px;
	opacity: 40%;
	margin-left: 0px;
	margin-right: 10px;
	transition: all 0.2s ease;
	z-index: 9999;
	position: relative;

	&:hover {
		background: rgba(255, 255, 255, 0.2);
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
