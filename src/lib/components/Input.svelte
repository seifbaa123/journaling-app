<script lang="ts">
	export let label: string = '';
	export let type: 'text' | 'textarea' = 'text';
	export let value: string = '';
</script>

<div class="input">
	<label>
		{label}
		{#if type === 'textarea'}
			<textarea bind:value />
		{:else}
			<input type="text" bind:value />
		{/if}
	</label>
</div>

<style>
	.input {
		margin: 0.25rem 0;
	}

	label {
		font-weight: bold;
		color: var(--dark-gray);
	}

	input,
	textarea {
		width: 100%;
		display: block;
		font-size: 1rem;
		padding: 0.5em;
		border-radius: 0.25em;
		background-color: var(--light-gray);
	}

	textarea {
		resize: vertical;
		height: 10rem;
	}
</style>
