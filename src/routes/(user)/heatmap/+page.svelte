<script lang="ts">
	import Heatmap from '$lib/components/heatmap/Heatmap.svelte';
	import { lang } from '$lib/store';

	export let data;

	const statusHeatmap = new Map(data.journals.map((j) => [j.date, j.status]));
	const sportHeatmap = new Map(data.journals.map((j) => [j.date, j.sport]));
	const codingHeatmap = new Map(data.journals.map((j) => [j.date, j.coding]));
</script>

<div class="container">
	<Heatmap title={$lang.words.statusHeatmap} states={statusHeatmap} />
	<Heatmap title={$lang.words.sportHeatmap} states={sportHeatmap} />
	<Heatmap title={$lang.words.codingHeatmap} states={codingHeatmap} />
</div>

<style>
	.container {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
