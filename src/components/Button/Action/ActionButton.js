import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledButton = styled.button`
	color: ${theme.color.text.button};
	background: linear-gradient(250deg, #428afa 0%, #00bea8 100%);
	font-weight: bold;
	font-family: 'expletus-sans-regular';
	border: none;
	border-radius: 30px;
	padding: 10px 10px 10px 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	margin-left: 0px;
	margin-right: 10px;
	transition: all 0.2s ease;
	z-index: 9999;
	position: relative;
	&:hover {
		cursor: pointer;
	}
`;

const ActionButton = ({ children, style, onClick }) => {
	return (
		<>
			<StyledButton style={style} onClick={onClick}>
				{children}
			</StyledButton>
		</>
	);
};
export default ActionButton;
