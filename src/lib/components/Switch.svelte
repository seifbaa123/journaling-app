<script lang="ts">
	export let checked: boolean = false;
	export let onChange: ((value: boolean) => void) | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="switch {checked ? 'active' : ''}"
	on:click={() => {
		checked = !checked;
		if (onChange != undefined) onChange(checked);
	}}
/>

<style>
	.switch {
		width: 3rem;
		height: 1.5rem;
		position: relative;
		border-radius: 100vh;
		background-color: var(--light-gray);
		cursor: pointer;
	}

	.switch::before {
		content: '';
		width: 1rem;
		height: 1rem;
		display: block;
		position: absolute;
		border-radius: 50%;
		top: 0.25rem;
		left: 0.25rem;
		background-color: white;
		transition: left 0.2s ease-in;
	}

	:global([dir='rtl']) .switch::before {
		left: unset;
		right: 0.25rem;
		transition: right 0.2s ease-in;
	}

	.switch.active {
		background-color: var(--blue);
	}

	.switch.active::before {
		left: 1.75rem;
	}

	:global([dir='rtl']) .switch.active::before {
		left: unset;
		right: 1.75rem;
	}
</style>
