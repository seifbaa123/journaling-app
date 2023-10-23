<script lang="ts">
	import { formatDate } from '$lib/utils';
	import CalendarHeader from './CalendarHeader.svelte';
	import type { CalendarDate, Config } from './calendar';
	import { monthsNamesList } from '$lib/months-names';
	import { lang } from '$lib/store';

	export let config: Config;

	function getDayActiveClass(date: CalendarDate) {
		return config.journalsMap.has(formatDate(date)) ? 'active' : '';
	}
</script>

<CalendarHeader>
	<button class="btn-header" on:click={() => (config.state = 'months')}>
		{monthsNamesList[config.month]}
		{config.year}
	</button>
</CalendarHeader>
<div class="labels">
	<p>{$lang.words.Mon}</p>
	<p>{$lang.words.Tue}</p>
	<p>{$lang.words.Wed}</p>
	<p>{$lang.words.Thu}</p>
	<p>{$lang.words.Fri}</p>
	<p>{$lang.words.Sat}</p>
	<p>{$lang.words.Sun}</p>
</div>
<div class="grid days">
	{#each config.daysArray as week}
		{#each week as day}
			{#if day === 0}
				<button class="grid-item day disable" />
			{:else}
				<button
					class="grid-item day {getDayActiveClass({
						day,
						month: config.month + 1,
						year: config.year
					})}"
					on:click={() =>
						config.onDateSelected({ day, month: config.month + 1, year: config.year })}
					>{day}
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
		color: var(--dark-gray);
		background-color: var(--white);
		cursor: pointer;
	}

	.btn-header:hover {
		background-color: var(--light-gray);
	}

	.labels {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.labels p {
		flex: 1;
		border: var(--border);
		text-align: center;
		padding: 0.25rem;
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
		color: var(--dark-gray);
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
