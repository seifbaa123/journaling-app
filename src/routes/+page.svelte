<script lang="ts">
	import { goto } from '$app/navigation';
	import Calendar from '$lib/components/calendar/Calendar.svelte';
	import { formatDate } from '$lib/utils.js';
	import JournalsList from './JournalsList.svelte';

	export let data;
</script>

<div class="container">
	<div class="item calendar">
		<Calendar journals={data.journals} onDateSelected={(date) => goto(`/${formatDate(date)}`)} />
	</div>
	<div class="item">
		<JournalsList journals={data.journals} />
	</div>
</div>

<style>
	.container {
		--container-padding: 1rem;

		padding: var(--container-padding);
		display: flex;
		gap: 1rem;
	}

	.item {
		flex: 1;
	}

	.calendar {
		width: 100%;
		min-height: calc(100vh - var(--container-padding) * 2);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
