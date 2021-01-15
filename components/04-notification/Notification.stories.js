import Notification from './Notification.svelte';

export default {
	title: 'Notification',
	component: Notification,
	argTypes: {
		text: { control: 'text' },
	},
};

const Template = ({ ...args }) => ({
	Component: Notification,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	text: 'Nou, het zou mij benieuwen…',
};
