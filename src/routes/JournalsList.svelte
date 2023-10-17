<script lang="ts">
	import type { Journals } from '@prisma/client';

	export let journals: Journals[];
</script>

<div class="journals">
	{#each journals as j}
		<div class="journal">
			{#if j.title}
				<a href={j.date}>{j.title}</a>
			{:else}
				<a href={j.date}><i>Empty title</i></a>
			{/if}
			<span>{j.date}</span>
			<p>{j.body}</p>
		</div>
	{/each}
</div>

<style>
	a {
		display: block;
		font-weight: bold;
		font-size: 1.25rem;
	}
</style>
