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
		<button class="btn" on:click={() => setYear(--config.year)}>-</button>
		<p>{config.year}</p>
		<button class="btn" on:click={() => setYear(++config.year)}>+</button>
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
		background-color: lightgray;
		border: 0.125rem solid darkgray;
		cursor: pointer;
	}

	.month:hover {
		background-color: darkgray;
	}

	.year {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
