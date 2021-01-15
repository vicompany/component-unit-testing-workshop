import TextInput from './TextInput.svelte';

export default {
	title: 'TextInput',
	component: TextInput,
	argTypes: {
		hideLabel: { control: 'boolean' },
		id: { control: 'text' },
		label: { control: 'text' },
		placeholder: { control: 'text' },
		value: { control: 'text' },
	},
};

const Template = ({ ...args }) => ({
	Component: TextInput,
	props: args,
});

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
	id: 'foo',
	label: 'Club motto',
};

export const WithHiddenLabel = Template.bind({});
WithHiddenLabel.args = {
	id: 'foo',
	label: 'Club motto',
	hideLabel: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	id: 'foo',
	placeholder: 'front-end forever!',
};

export const WithValues = Template.bind({});
WithValues.args = {
	id: 'foo',
	placeholder: 'front-end forever!',
	value: '🦃🦃🦃🦃🦃🦃',
};
