<script lang="ts">
	import type { Journals } from '@prisma/client';
	import getDaysArray from './get-days-array';
	import { formatDate } from '$lib/utils';

	export let journals: Journals[];
	export let onDateSelected: (date: { day: number; month: number; year: number }) => void;

	const journalsMap = new Map<string, boolean>(journals.map((j) => [j.date, true]));

	type CalendarState = 'days' | 'months' | 'year';

	const date = new Date();
	let month = date.getMonth();
	let year = date.getFullYear();

	let state: CalendarState = 'days';

	$: daysArray = getDaysArray(month, year);

	const monthsNamesList = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	function setMonth(m: number) {
		month = m;
		state = 'days';
	}

	function setYear(y: number) {
		year = y;
		state = 'months';
	}
</script>

<div class="calendar">
	{#if state === 'days'}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<header on:click={() => (state = 'months')}>{monthsNamesList[month]} {year}</header>
		<div class="grid days">
			{#each daysArray as week}
				{#each week as day}
					{#if day === 'empty'}
						<div class="grid-item day" />
					{:else}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class="grid-item day {journalsMap.has(
								formatDate({ day: Number(day), month: month + 1, year })
							)
								? 'active'
								: ''}"
							on:click={() => onDateSelected({ day: Number(day), month: month + 1, year })}
						>
							{day}
						</div>
					{/if}
				{/each}
			{/each}
		</div>
	{/if}

	{#if state === 'months'}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<header on:click={() => (state = 'year')}>{year}</header>
		<div class="grid months">
			{#each monthsNamesList as month, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="grid-item month" on:click={() => setMonth(index)}>{month}</div>
			{/each}
		</div>
	{/if}

	{#if state === 'year'}
		<div class="year">
			<button on:click={() => setYear(--year)}>-</button>
			<p>{year}</p>
			<button on:click={() => setYear(++year)}>+</button>
		</div>
	{/if}
</div>

<style>
	.calendar {
		width: 420px;
		max-width: 100%;
	}

	header {
		padding: 1rem;
		text-align: center;
		background-color: lightgray;
		margin-bottom: 0.25rem;
	}

	.grid {
		width: 100%;
		display: grid;
		gap: 0.25rem;
	}

	.months {
		grid-template-columns: 1fr 1fr 1fr;
	}

	.days {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	}

	.grid-item {
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: lightgray;
	}

	.day {
		aspect-ratio: 1/1;
	}

	.day.active {
		background-color: darkgray;
	}

	.month {
		aspect-ratio: 2/1;
	}

	.year {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
