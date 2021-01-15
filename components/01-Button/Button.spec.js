import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button.svelte', () => {
	test('No props are passed - Renders button without text', () => {
		// Act
		const { container } = render(Button);
		const button = container.querySelector('button');

		// Assert
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('');
	});

	test('Props: { text: "Click me!" } - Renders button with given text', () => {
		// Arrange
		const props = {
			text: 'Click me!',
		};
		const expected = 'Click me!';

		// Act
		const { getByRole } = render(Button, props);
		const button = getByRole('button');

		// Assert
		expect(button).toHaveTextContent(expected);
	});

	test('Props: { text: "Click me!", disabled: true } - Renders button with disabled attribute', () => {
		// Arrange
		const props = {
			text: 'Click me!',
			disabled: true,
		};

		// Act
		const { getByText } = render(Button, props);
		const button = getByText('Click me!');

		// Assert
		expect(button).toBeDisabled();
	});

	test('Props: { text: "Click me!" } - Renders button with class="primary"', () => {
		// Arrange
		const props = {
			text: 'Click me!',
		};
		const expected = 'primary';

		// Act
		const { getByTestId } = render(Button, props);
		const button = getByTestId('button');

		// Assert
		expect(button).toHaveClass(expected);
	});

	test('Props: { text: "Click me!", variant: "primary" } - Renders button with class="primary"', () => {
		// Arrange
		const props = {
			text: 'Click me!',
			variant: 'primary',
		};
		const expected = 'primary';

		// Act
		const { getByTestId } = render(Button, props);
		const button = getByTestId('button');

		// Assert
		expect(button).toHaveClass(expected);
	});

	test('Props: { text: "Click me!", variant: "secondary" } - Renders button with class="secondary"', () => {
		// Arrange
		const props = {
			text: 'Click me!',
			variant: 'secondary',
		};
		const expected = 'secondary';

		// Act
		const { getByTestId } = render(Button, props);
		const button = getByTestId('button');

		// Assert
		expect(button).toHaveClass(expected);
	});

	test('Props: { text: "Click me!" } - Button is clicked - Click event is fired', async () => {
		// Arrange
		const mock = jest.fn();
		const props = {
			text: 'Click me!',
		};

		// Act
		const { getByTestId, component } = render(Button, props);
		const button = getByTestId('button');

		component.$on('click', mock);

		await fireEvent.click(button);

		// Assert
		expect(mock).toHaveBeenCalled();
	});
});
