<script lang="ts">
	import getDaysArray from './get-days-array';

	const daysArray = getDaysArray(10, 2023);
</script>

<div class="calendar">
	{#each daysArray as week}
		{#each week as day}
			{#if day === 'empty'}
				<div class="day" />
			{:else}
				<div class="day">{day}</div>
			{/if}
		{/each}
	{/each}
</div>

<style>
	.calendar {
		width: 500px;
		max-width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 0.1rem;
	}

	.day {
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: lightgray;
	}
</style>
