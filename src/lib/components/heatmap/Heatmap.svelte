<script lang="ts">
	import { getHeatmap, fillHeatmap, HeatmapState } from './heatmap';

	export let title: string = '';
	export let states: Map<string, boolean>;

	const heatmap = fillHeatmap(getHeatmap(), states);
</script>

<h2>{title}</h2>
<div class="heatmap">
	{#each heatmap as row}
		{#each row as day}
			{#if day === HeatmapState.empty}
				<div class="day" />
			{/if}

			{#if day === HeatmapState.true}
				<div class="day true" />
			{/if}

			{#if day === HeatmapState.false}
				<div class="day false" />
			{/if}
		{/each}
	{/each}
</div>

<style>
	.heatmap {
		width: 100%;
		margin: 0.25rem 0 1rem;
		display: grid;
		grid-template-columns: repeat(53, 1fr);
		gap: 0.25rem;
	}

	.day {
		width: 100%;
		aspect-ratio: 1/1;
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
