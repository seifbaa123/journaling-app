<script lang="ts">
	import Heatmap from '$lib/components/heatmap/Heatmap.svelte';

	export let data;

	const statusHeatmap = new Map(data.journals.map((j) => [j.date, j.status]));
	const sportHeatmap = new Map(data.journals.map((j) => [j.date, j.sport]));
	const codingHeatmap = new Map(data.journals.map((j) => [j.date, j.coding]));
</script>

<div class="container">
	<Heatmap title="Status Heatmap" states={statusHeatmap} />
	<Heatmap title="Sport Heatmap" states={sportHeatmap} />
	<Heatmap title="Coding Heatmap" states={codingHeatmap} />
</div>

<style>
	.container {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
