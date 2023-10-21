<script lang="ts">
	import CalendarHeader from './CalendarHeader.svelte';
	import type { Config } from './calendar-types';
	import monthsNamesList from './moths-list';

	export let config: Config;

	function setMonth(m: number) {
		config.month = m;
		config.state = 'days';
	}

	function setYear(y: number) {
		config.year = y;
		config.state = 'months';
	}
</script>

<CalendarHeader>
	<div class="year">
		<button on:click={() => setYear(--config.year)}><i class="fa-solid fa-chevron-left" /></button>
		<p>{config.year}</p>
		<button on:click={() => setYear(++config.year)}><i class="fa-solid fa-chevron-right" /></button>
	</div>
</CalendarHeader>
<div class="months">
	{#each monthsNamesList as month, index}
		<button class="grid-item month" on:click={() => setMonth(index)}>{month}</button>
	{/each}
</div>

<style>
	.months {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.month {
		width: 100%;
		aspect-ratio: 2/1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
		border: var(--border);
		cursor: pointer;
	}

	.month:hover {
		background-color: var(--light-gray);
	}

	.year {
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.year button {
		padding: 1rem 1.25rem;
		cursor: pointer;
	}

	.year button:hover {
		background-color: var(--light-gray);
	}
</style>
