<script lang="ts">
	import type { Journals } from '@prisma/client';
	import type { CalendarDate, Config } from './calendar-types';
	import getDaysArray from './get-days-array';
	import CalendarDays from './CalendarDays.svelte';
	import CalendarMonths from './CalendarMonths.svelte';

	export let journals: Journals[];
	export let onDateSelected: (date: CalendarDate) => void;

	const date = new Date();
	let config: Config = {
		journalsMap: new Map<string, boolean>(journals.map((j) => [j.date, true])),
		state: 'days',
		daysArray: [],
		month: date.getMonth(),
		year: date.getFullYear(),
		onDateSelected
	};

	$: config.daysArray = getDaysArray(config.month, config.year);
</script>

<div class="calendar">
	{#if config.state === 'days'}
		<CalendarDays bind:config />
	{/if}

	{#if config.state === 'months'}
		<CalendarMonths bind:config />
	{/if}
</div>

<style>
	.calendar {
		--border: 1px solid var(--light-gray);

		width: 420px;
		max-width: 100%;
		border: var(--border);
	}
</style>
