import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ListSearch from './ListSearch.svelte';

describe('ListSearch.svelte', () => {
	test('No props are passed - Component does not render', () => {
		// Act
		const { queryByRole } = render(ListSearch);
		const heading = queryByRole('heading');
		const list = queryByRole('list');

		// Assert
		expect(heading).toBeNull();
		expect(list).toBeNull();
	});

	test('props: { listItems: [] } - Given items is empty array - Component does not render', () => {
		const props = {
			listItems: [],
		};

		// Act
		const { queryByRole } = render(ListSearch, props);
		const heading = queryByRole('heading');
		const list = queryByRole('list');

		// Assert
		expect(heading).toBeNull();
		expect(list).toBeNull();
	});

	test('props: { listItems: ["foo", "bar", "biz"] } - Renders list with 3 items', () => {
		const props = {
			listItems: ['foo', 'bar', 'biz'],
		};
		const expected = 3;

		// Act
		const { getByRole, getAllByRole } = render(ListSearch, props);
		const list = getByRole('list');
		const listItems = getAllByRole('listitem');

		// Assert
		expect(list).toBeInTheDocument();
		expect(listItems).toHaveLength(expected);
	});

	test('props: { listItems: ["foo", "bar", "biz"] } - User types "b" - "is-highlighted class is added to "Bar" item', async () => {
		const props = {
			listItems: ['foo', 'bar', 'biz'],
		};
		const userInput = 'b';
		const highlightClass = 'is-highlighted';

		// Act
		const { getByRole, getAllByRole } = render(ListSearch, props);
		const list = getByRole('list');
		const listItems = getAllByRole('listitem');

		await userEvent.type(list, userInput);

		// Assert
		expect(listItems[1]).toHaveClass(highlightClass);
	});

	test('props: { listItems: ["foo", "bar", "biz"] } - User types "bi" - "is-highlighted class is added to "Biz" item', async () => {
		const props = {
			listItems: ['foo', 'bar', 'biz'],
		};
		const userInput = 'bi';
		const highlightClass = 'is-highlighted';

		// Act
		const { getByRole, getAllByRole } = render(ListSearch, props);
		const list = getByRole('list');
		const listItems = getAllByRole('listitem');

		await userEvent.type(list, userInput);

		// Assert
		expect(listItems[2]).toHaveClass(highlightClass);
	});

	test('props: { listItems: ["foo", "bar", "biz"] } - User slowly types "bi" - "is-highlighted class is not added to any item', async () => {
		const props = {
			listItems: ['foo', 'bar', 'biz'],
		};
		const userInput = 'bi';
		const inputDelay = 501; // ms
		const highlightClass = 'is-highlighted';

		// Act
		const { getByRole, getAllByRole } = render(ListSearch, props);
		const list = getByRole('list');
		const listItems = getAllByRole('listitem');

		await userEvent.type(list, userInput, { delay: inputDelay });

		// Assert
		expect(listItems[0]).not.toHaveClass(highlightClass);
		expect(listItems[1]).not.toHaveClass(highlightClass);
		expect(listItems[2]).not.toHaveClass(highlightClass);
	});
});
