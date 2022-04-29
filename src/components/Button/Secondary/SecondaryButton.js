import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	background: linear-gradient(250deg, #a53ea4 0%, #21a4d1 180%);
	border-radius: 30px;
	padding: 13px;
	font-family: 'expletus-sans-regular';
	margin-left: 20px;
	transition: all 0.2s ease;
	color: ${theme.color.text.button};
	font-weight: bold;
	border: none;
	&:hover {
		cursor: pointer;
	}
`;

const PrimaryButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children} {'❯'}
			</StyledButton>
		</>
	);
};
export default PrimaryButton;
