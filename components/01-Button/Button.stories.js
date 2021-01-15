import Button from './Button.svelte';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		disabled: { control: 'boolean' },
		text: { control: 'text' },
		variant: {
			control: {
				type: 'select',
				options: ['primary', 'secondary'],
			},
		},
	},
};

const Template = ({ ...args }) => ({
	Component: Button,
	props: args,
});

export const Primary = Template.bind({});
Primary.args = {
	text: 'Click me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
	text: 'Click me!',
	variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	text: 'Click me!',
};
