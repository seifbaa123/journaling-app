<script lang="ts">
	import { goto } from '$app/navigation';
	import Calendar from '$lib/calendar/Calendar.svelte';
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<div class="container">
	<Calendar journals={data.journals} onDateSelected={(date) => goto(`/${formatDate(date)}`)} />
</div>

<style>
	.container {
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
