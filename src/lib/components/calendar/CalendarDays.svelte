<script lang="ts">
	import { formatDate } from '$lib/utils';
	import CalendarHeader from './CalendarHeader.svelte';
	import type { Config, DaysArray } from './calendar-types';
	import monthsNamesList from './moths-list';

	export let config: Config;
</script>

<CalendarHeader>
	<button class="btn btn-header" on:click={() => (config.state = 'months')}>
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
		width: 100%;
		height: 100%;
		display: block;
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
		background-color: lightgray;
		cursor: pointer;
		border: 0.125rem solid darkgray;
	}

	.day:hover {
		background-color: darkgray;
	}

	.day.active {
		background-color: gray;
	}

	.disable {
		cursor: not-allowed;
	}
</style>
