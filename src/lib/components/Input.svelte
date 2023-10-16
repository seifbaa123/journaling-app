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
	input,
	textarea {
		width: 100%;
		display: block;
		font-size: 1rem;
		padding: 0.25em;
		background-color: var(--light-gray);
	}
</style>
