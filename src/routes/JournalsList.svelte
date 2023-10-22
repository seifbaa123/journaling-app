<script lang="ts">
	import type { Journals } from '@prisma/client';
	import { lang } from '$lib/store';

	export let journals: Journals[];
</script>

<div class="journals">
	{#each journals as j}
		<div class="journal">
			{#if j.title}
				<a href={j.date}>{j.title}</a>
			{:else}
				<a href={j.date}><i>{$lang.words.emptyTitle}</i></a>
			{/if}
			<span>{j.date}</span>
			<p>{j.body.substring(0, 120)}</p>
		</div>
	{/each}
</div>

<style>
	.journal {
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 0.25rem;
	}

	.journal:hover {
		background-color: var(--light-gray);
	}

	a {
		color: var(--black);
		display: block;
		font-weight: bold;
		font-size: 1.5rem;
		line-height: 1.25;
		text-decoration: none;
	}

	span {
		font-size: 0.75rem;
		color: var(--dark-gray);
	}
</style>
