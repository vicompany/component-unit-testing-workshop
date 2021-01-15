<script>
	export let text = '';
	export let disabled = false;
	export let variant = 'primary';
</script>

<button
	{disabled}
	class={variant}
	data-testid="button"
	on:click
>
	{text}
</button>

<style>
	button {
		padding: 0.5rem;

		color: #fff;

		border: none;
		outline: none;
		border-radius: 5px;
	}

	.primary {
		background: var(--color-terracotta);
	}

	.primary:hover {
		background:  var(--color-terracotta-dark);
	}

	.secondary {
		background:  var(--color-purple);
	}

	.secondary:hover,
	.secondary:focus {
		background:  var(--color-purple-dark);
	}

	button[disabled],
	button[disabled]:hover,
	button[disabled]:focus {
		color: var(--color-grey-dark);

		background: var(--color-grey);
		cursor: not-allowed;
	}
</style>