import ListSearch from './ListSearch.svelte';

export default {
	title: 'List Search',
	component: ListSearch,
	argTypes: {
		listItems: { control: 'array' },
	},
};

const Template = ({ ...args }) => ({
	Component: ListSearch,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	listItems: [
		'Africa',
		'Antarctica',
		'Asia',
		'Australia / Oceania',
		'Europe',
		'North America',
		'South America',
	],
};
