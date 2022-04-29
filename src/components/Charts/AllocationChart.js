import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { tokenData } from '../../Data/tokens';

const removePrecision = num => {
	return num / 10 ** 18;
};

const getData = (ratio, wrappertokens) => {
	const pieData = [
		{
			id: '0.' + tokenData[wrappertokens[0]],
			label: tokenData[wrappertokens[0]],
			value: removePrecision(ratio[0]),
			color: 'hsl(291, 61%, 57%)',
		},
		{
			id: '1.' + tokenData[wrappertokens[1]],
			label: tokenData[wrappertokens[1]],
			value: removePrecision(ratio[1]),
			color: 'hsl(50, 60%, 52%)',
		},
		{
			id: '2.' + tokenData[wrappertokens[2]],
			label: tokenData[wrappertokens[2]],
			value: removePrecision(ratio[2]),
			color: 'hsl(45, 83%, 45%)',
		},
		{
			id: '3.' + tokenData[wrappertokens[3]],
			label: tokenData[wrappertokens[3]],
			value: removePrecision(ratio[3]),
			color: 'hsl(218, 58%, 75%)',
		},
		{
			id: '4.' + tokenData[wrappertokens[4]],
			label: tokenData[wrappertokens[4]],
			value: removePrecision(ratio[4]),
			color: 'hsl(2, 55%, 61%)',
		},
		{
			id: '5.' + tokenData[wrappertokens[5]],
			label: tokenData[wrappertokens[5]],
			value: removePrecision(ratio[5]),
			color: 'hsl(195, 51%, 61%)',
		},
		{
			id: '6.' + tokenData[wrappertokens[6]],
			label: tokenData[wrappertokens[6]],
			value: removePrecision(ratio[6]),
			color: 'hsl(216, 62%, 57%)',
		},
		{
			id: '7.' + tokenData[wrappertokens[7]],
			label: tokenData[wrappertokens[7]],
			value: removePrecision(ratio[7]),
			color: 'hsl(293, 62%, 48%)',
		},
		{
			id: '8.' + tokenData[wrappertokens[8]],
			label: tokenData[wrappertokens[8]],
			value: removePrecision(ratio[8]),
			color: 'hsl(167, 35%, 55%)',
		},
		{
			id: '9.' + tokenData[wrappertokens[9]],
			label: tokenData[wrappertokens[9]],
			value: removePrecision(ratio[9]),
			color: 'hsl(199, 86%, 44%)',
		},
		{
			id: '10.' + tokenData[wrappertokens[10]],
			label: tokenData[wrappertokens[10]],
			value: removePrecision(ratio[10]),
			color: 'hsl(291, 61%, 57%)',
		},
		{
			id: '11.' + tokenData[wrappertokens[11]],
			label: tokenData[wrappertokens[11]],
			value: removePrecision(ratio[11]),
			color: 'hsl(50, 60%, 52%)',
		},
		{
			id: '12.' + tokenData[wrappertokens[12]],
			label: tokenData[wrappertokens[12]],
			value: removePrecision(ratio[12]),
			color: 'hsl(45, 83%, 45%)',
		},
		{
			id: '13.' + tokenData[wrappertokens[13]],
			label: tokenData[wrappertokens[13]],
			value: removePrecision(ratio[13]),
			color: 'hsl(218, 58%, 75%)',
		},
		{
			id: '14.' + tokenData[wrappertokens[14]],
			label: tokenData[wrappertokens[14]],
			value: removePrecision(ratio[14]),
			color: 'hsl(2, 55%, 61%)',
		},
		{
			id: '15.' + tokenData[wrappertokens[15]],
			label: tokenData[wrappertokens[15]],
			value: removePrecision(ratio[15]),
			color: 'hsl(195, 51%, 61%)',
		},
		{
			id: '16.' + tokenData[wrappertokens[16]],
			label: tokenData[wrappertokens[16]],
			value: removePrecision(ratio[16]),
			color: 'hsl(216, 62%, 57%)',
		},
		{
			id: '17.' + tokenData[wrappertokens[17]],
			label: tokenData[wrappertokens[17]],
			value: removePrecision(ratio[17]),
			color: 'hsl(293, 62%, 48%)',
		},
		{
			id: '18.' + tokenData[wrappertokens[18]],
			label: tokenData[wrappertokens[18]],
			value: removePrecision(ratio[18]),
			color: 'hsl(167, 35%, 55%)',
		},
		{
			id: '19.' + tokenData[wrappertokens[19]],
			label: tokenData[wrappertokens[19]],
			value: removePrecision(ratio[19]),
			color: 'hsl(199, 86%, 44%)',
		},
	];
	return pieData;
};

const Pie = props => {
	return (
		<ResponsivePie
			data={getData(props.ratio, props.wrappertokens)}
			margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
			innerRadius={0.35}
			padAngle={0.2}
			valueFormat=" >0~%"
			isInteractive={false}
			cornerRadius={3}
			colors={{ datum: 'data.color' }}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
			arcLinkLabelsSkipAngle={20}
			arcLinkLabelsTextColor="#ffffff"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={20}
			arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
			activeOuterRadiusOffset={10}
			arcLabelsRadiusOffset={0.5}
		/>
	);
};

export default Pie;
