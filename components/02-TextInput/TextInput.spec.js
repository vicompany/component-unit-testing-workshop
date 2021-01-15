import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import TextInput from './TextInput.svelte';

describe('TextInput.svelte', () => {
	test('No props are passed - Renders text input', () => {
		// Act
		const { getByRole } = render(TextInput);
		const textInput = getByRole('textbox');

		// Assert
		expect(textInput).toBeInTheDocument();
	});

	test('Props: { label: "Foo" } - Renders label with given text', () => {
		// Arrange
		const props = {
			label: 'Foo',
		};

		// Act
		const { getByText } = render(TextInput, props);
		const label = getByText('Foo');

		// Assert
		expect(label).toBeInTheDocument();
	});

	test('Props: { label: "Foo", id: "Bar" } - Label is assosciated with text input', () => {
		// Arrange
		const props = {
			label: 'Foo',
			id: 'Bar',
		};

		// Act
		const { getByLabelText } = render(TextInput, props);
		const textInput = getByLabelText('Foo');

		// Assert
		expect(textInput).toBeInTheDocument();
	});


	test('Props: { label: "Foo", hideLabel: true } - Renders label with class="sr-only"', () => {
		// Arrange
		const props = {
			label: 'Foo',
			hideLabel: true,
		};
		const expected = 'sr-only';

		// Act
		const { getByText } = render(TextInput, props);
		const label = getByText('Foo');

		// Assert
		expect(label).toHaveClass(expected);
	});

	test('Props: { placeholder: "Foo" } - Renders text input with given placeholder text - (1)"', () => {
		// Arrange
		const props = {
			placeholder: 'Foo',
		};

		// Act
		const { getByPlaceholderText } = render(TextInput, props);
		const textInput = getByPlaceholderText('Foo');

		// Assert
		expect(textInput).toBeInTheDocument();
	});

	test('Props: { placeholder: "Foo" } - Renders text input with given placeholder text - (2)"', () => {
		// Arrange
		const props = {
			placeholder: 'Foo',
		};
		const expected = 'Foo';

		// Act
		const { getByRole } = render(TextInput, props);
		const textInput = getByRole('textbox');

		// Assert
		expect(textInput).toHaveAttribute('placeholder', expected);
	});

	test('Props: { value: "🦃🦃🦃🦃🦃🦃" } - Renders text input with given value - (1)"', () => {
		// Arrange
		const props = {
			value: '🦃🦃🦃🦃🦃🦃',
		};

		// Act
		const { getByDisplayValue } = render(TextInput, props);
		const textInput = getByDisplayValue('🦃🦃🦃🦃🦃🦃');

		// Assert
		expect(textInput).toBeInTheDocument();
	});

	test('Props: { value: "🦃🦃🦃🦃🦃🦃" } - Renders text input with given value - (2)"', () => {
		// Arrange
		const props = {
			value: '🦃🦃🦃🦃🦃🦃',
		};
		const expected = '🦃🦃🦃🦃🦃🦃';

		// Act
		const { getByRole } = render(TextInput, props);
		const textInput = getByRole('textbox');

		// Assert
		expect(textInput).toHaveValue(expected);
	});
});
