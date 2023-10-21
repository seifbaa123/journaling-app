<script lang="ts">
	import { formatDate } from '$lib/utils';
	import CalendarHeader from './CalendarHeader.svelte';
	import type { Config, DaysArray } from './calendar-types';
	import monthsNamesList from './moths-list';

	export let config: Config;
</script>

<CalendarHeader>
	<button class="btn-header" on:click={() => (config.state = 'months')}>
		{monthsNamesList[config.month]}
		{config.year}
	</button>
</CalendarHeader>
<div class="grid days">
	{#each config.daysArray as week}
		{#each week as day}
			{#if day === 0}
				<button class="grid-item day disable" />
			{:else}
				<button
					class="grid-item day {config.journalsMap.has(
						formatDate({ day, month: config.month + 1, year: config.year })
					)
						? 'active'
						: ''}"
					on:click={() =>
						config.onDateSelected({ day, month: config.month + 1, year: config.year })}
				>
					{day}
				</button>
			{/if}
		{/each}
	{/each}
</div>

<style>
	.btn-header {
		width: 85%;
		padding: 1rem;
		margin: 0 auto;
		height: 100%;
		display: block;
		font-size: 1rem;
		font-weight: bold;
		background-color: var(--white);
		cursor: pointer;
	}

	.btn-header:hover {
		background-color: var(--light-gray);
	}

	.days {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	}

	.day {
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
		cursor: pointer;
		border: var(--border);
	}

	.day:hover {
		background-color: var(--light-gray);
	}

	.day.active {
		background-color: var(--light-gray);
	}

	.disable {
		cursor: not-allowed;
	}
</style>
