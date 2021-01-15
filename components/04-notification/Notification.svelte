<script>
	import { fade } from 'svelte/transition';
	import Button from '../01-Button/Button.svelte';

	export let text = '';

	let show = true;

	function handleButtonClick() {
		show = false;
	}
</script>

{#if text && show}
	<div class="notification" role="alert" transition:fade>
		<div class="content">{text}</div>

		<Button
			text="Close"
			variant="secondary"
			on:click={handleButtonClick}
		/>
	</div>
{/if}

<style>
	.notification {
		display: flex;
		align-items: baseline;
		justify-content: space-between;

		padding: 0.5rem;

		background: var(--color-purple-light);
		border: 2px solid var(--color-purple);
		border-radius: 5px;
	}

	.content {
		font-weight: bold;
	}
</style>