<script>
	export let id = null;
	export let placeholder = '';
	export let value = '';
	export let label = null;
	export let hideLabel = false;
</script>

{#if label}
	<label class:sr-only="{hideLabel}" for="{id}">
		{label}
	</label>
{/if}

<input
	{id}
	{placeholder}
	type="text"
	bind:value
/>

<style>
	input {
		padding: 0.5rem;

		border: 1px solid var(--color-grey-dark);
		font-size: 1rem;
	}

	input:focus {
		outline: 1px solid var(--color-aqua);

		border-color: var(--color-aqua);
	}

	label {
		margin-right: 0.5rem;

		font-weight: bold;
	}
</style>

