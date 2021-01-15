<script>
	const DONE_TYPING_INTERVAL = 500;

	export let listItems = [];

	let itemMatchIndex = null;
	let query = '';
	let typingTimer;

	function handleKeypress(e) {
		clearTimeout(typingTimer);

		typingTimer = setTimeout(clearQuery, DONE_TYPING_INTERVAL);

		query += e.key;

		highlightItem();
	}

	function clearQuery() {
		query = '';
	}

	function highlightItem() {
		itemMatchIndex = getItemIndex();
	}

	function getItemIndex() {
		return listItems.findIndex(item => item.toLowerCase().startsWith(query.toLowerCase()));
	}
</script>

<svelte:body
	on:keypress={handleKeypress}
/>

{#if listItems.length}
	<h1>Start typing to find and highlight an item: {query}</h1>

	<ul>
		{#each listItems as item, index}
			<li class:is-highlighted={index === itemMatchIndex}>
				{item}
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		margin: 1rem 0 0;
		padding: 0;

		list-style: none;
		border: 1px solid var(--color-grey);
	}

	li {
		padding: 0.5rem;
	}

	li:not(:first-child) {
		border-top: 1px solid var(--color-grey);
	}

	li.is-highlighted {
		background-color: var(--color-aqua);
	}
</style>
