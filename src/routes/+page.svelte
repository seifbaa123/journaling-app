<script lang="ts">
	import Calendar from '$lib/calendar/Calendar.svelte';

	export let data;
	console.log(data.journals);
</script>

<div class="container">
	<Calendar />
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
