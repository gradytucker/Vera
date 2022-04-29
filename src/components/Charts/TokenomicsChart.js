import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const pieData = [
	{
		id: 'Seed Sale',
		label: 'Seed Sale',
		value: 3 / 100,
		color: 'hsl(291, 61%, 57%)',
	},
	{
		id: 'Private Sale',
		label: 'Private Sale',
		value: 5 / 100,
		color: 'hsl(50, 60%, 52%)',
	},
	{
		id: 'Public sale',
		label: 'Public sale',
		value: 7 / 100,
		color: 'hsl(45, 83%, 45%)',
	},
	{
		id: 'Team and Advisors',
		label: 'Team and Advisors',
		value: 6.6 / 100,
		color: 'hsl(218, 58%, 75%)',
	},
	{
		id: 'Marketing',
		label: 'Marketing',
		value: 1.6 / 100,
		color: 'hsl(2, 55%, 61%)',
	},
	{
		id: 'Development',
		label: 'Development',
		value: 3.3 / 100,
		color: 'hsl(195, 51%, 61%)',
	},
	{
		id: 'Bounty',
		label: 'Bounty',
		value: 2.5 / 100,
		color: 'hsl(216, 62%, 57%)',
	},
	{
		id: 'Liquidity Reserves',
		label: 'Liquidity Reserves',
		value: 5 / 100,
		color: 'hsl(293, 62%, 48%)',
	},
	{
		id: 'Protocol Vault',
		label: 'Protocol Vault',
		value: 33 / 100,
		color: 'hsl(167, 35%, 55%)',
	},
	{
		id: 'Protocol Burn',
		label: 'Protocol Burn',
		value: 33 / 100,
		color: 'hsl(199, 86%, 44%)',
	},
];

const Pie = () => {
	return (
		<ResponsivePie
			data={pieData}
			margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
			innerRadius={0.5}
			padAngle={0.7}
			valueFormat=" >-0.0~%"
			cornerRadius={3}
			colors={{ datum: 'data.color' }}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
			arcLinkLabelsSkipAngle={15}
			arcLinkLabelsTextColor="#ffffff"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={15}
			arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
		/>
	);
};

export default Pie;
