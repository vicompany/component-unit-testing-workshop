import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/svelte';
import Notification from './Notification.svelte';

describe('ListSearch.svelte', () => {
	test('No props are passed - Component does not render', () => {
		// Act
		const { queryByRole } = render(Notification);
		const notification = queryByRole('alert');

		// Assert
		expect(notification).toBeNull();
	});

	test('props: { text: "" } - Given text is empty string - Component does not render', () => {
		const props = {
			text: '',
		};

		// Act
		const { queryByRole } = render(Notification, props);
		const notification = queryByRole('alert');

		// Assert
		expect(notification).toBeNull();
	});

	test('props: { text: "Foo bar" } - Component renders with given text', () => {
		const props = {
			text: 'Foo bar',
		};

		// Act
		const { getByRole, getByText } = render(Notification, props);
		const notification = getByRole('alert');
		const content = getByText('Foo bar');

		// Assert
		expect(notification).toBeInTheDocument();
		expect(content).toBeInTheDocument();
	});

	test('props: { text: "Foo bar" } - User clicks close button - Notification is removed from document - (1)', async () => {
		const props = {
			text: 'Foo bar',
		};

		// Act
		const { getByRole } = render(Notification, props);
		const notification = getByRole('alert');
		const closeButton = getByRole('button');

		fireEvent.click(closeButton);

		// Assert
		await waitFor(() => {
			expect(notification).not.toBeInTheDocument();
		});
	});

	test('props: { text: "Foo bar" } - User clicks close button - Notification is removed from document - (2)', async () => {
		const props = {
			text: 'Foo bar',
		};

		// Act
		const { getByRole } = render(Notification, props);
		const closeButton = getByRole('button');

		fireEvent.click(closeButton);

		// Assert
		await waitForElementToBeRemoved(() => getByRole('alert'));
	});
});
