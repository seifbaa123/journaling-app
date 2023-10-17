<script lang="ts">
	import { goto } from '$app/navigation';
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import { formatDate } from '$lib/utils.js';
	import JournalsList from './JournalsList.svelte';

	export let data;
</script>

<a href="/heatmap">heatmap</a>

<div class="container">
	<div class="item center">
		<Calendar journals={data.journals} onDateSelected={(date) => goto(`/${formatDate(date)}`)} />
	</div>
	<div class="item">
		<JournalsList journals={data.journals} />
	</div>
</div>

<style>
	.container {
		display: flex;
	}

	.item {
		flex: 1;
	}

	.center {
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
