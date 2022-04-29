import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

const LabelStyle = styled.div`
	width: 120px;
	display: inline-block;
`;

const roundedToTwo = num => {
	return num.toFixed(1);
};

const AllocationSlider = props => {
	const min = 0;
	const max = props.max;
	const step = 5;
	const [value, setValue] = React.useState(0);

	const onSliderChange = val => {
		props.onUpdate(Number(-(value - val)), val);

		setValue(val);
	};

	//React.useState(() => {
	//if (props.defaultVal > props.max) {
	//	const val = Number(props.max);
	//	onSliderChange(val);
	//}
	//if (props.defaultVal < min) {
	//	const val = Number(min);
	//	onSliderChange(val);
	//}
	//}, []);

	return (
		<LabelStyle>
			<span>{value + '%'}</span>
			<div style={{ width: 17 + 'vw', maxWidth: 200 + 'px' }}>
				<Slider value={value} min={min} max={max} step={step} onChange={onSliderChange} />
			</div>
		</LabelStyle>
	);
};

export default AllocationSlider;
