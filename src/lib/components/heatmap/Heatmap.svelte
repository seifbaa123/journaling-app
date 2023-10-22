<script lang="ts">
	import { monthsNamesList } from '$lib/data';
	import { getHeatmap, fillHeatmap, HeatmapState } from './heatmap';
	import { lang } from '$lib/store';

	export let title: string = '';
	export let states: Map<string, boolean>;

	const heatmap = fillHeatmap(getHeatmap(), states);
</script>

<h2>{title}</h2>
<div class="container">
	<div class="months">
		{#each monthsNamesList as m}
			<p>{m}</p>
		{/each}
	</div>
	<table class="heatmap">
		{#each heatmap as row, index}
			<tr>
				{#if index === 0}
					<td class="day-name">{$lang.words.Mon}</td>
				{:else if index === 2}
					<td class="day-name">{$lang.words.Wed}</td>
				{:else if index === 4}
					<td class="day-name">{$lang.words.Fri}</td>
				{:else}
					<td class="day-name">&#8202;</td>
				{/if}
				{#each row as day}
					{#if day === HeatmapState.empty}
						<td class="day" />
					{/if}

					{#if day === HeatmapState.true}
						<td class="day true" />
					{/if}

					{#if day === HeatmapState.false}
						<td class="day false" />
					{/if}
				{/each}
			</tr>
		{/each}
	</table>
</div>

<style>
	h2 {
		margin-bottom: 0.25rem;
	}

	.container {
		width: 100%;
		overflow-x: auto;

		--heatmap-width: 980px;
		--heatmap-cell-height: 1rem;
		--heatmap-day-name-width: 3rem;
	}

	.months {
		width: calc(var(--heatmap-width) - var(--heatmap-day-name-width));
		margin-left: var(--heatmap-day-name-width);
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global([dir='rtl']) .months {
		margin-left: unset;
		margin-right: var(--heatmap-day-name-width);
	}

	.heatmap {
		width: var(--heatmap-width);
		gap: 0.25rem;
		margin-bottom: 1.25rem;
	}

	tr {
		height: var(--heatmap-cell-height);
	}

	.day-name {
		width: var(--heatmap-day-name-width);
		font-size: 0.75rem;
		padding-right: 0.25rem;
		text-align: right;
		line-height: 1;
	}

	:global([dir='rtl']) .day-name {
		text-align: left;
		padding-left: 0.25rem;
		padding-right: unset;
	}

	.day {
		width: var(--heatmap-cell-height);
		border-radius: 0.25rem;
		background-color: var(--light-gray);
	}

	.day.true {
		background-color: var(--green);
	}

	.day.false {
		background-color: var(--red);
	}
</style>
