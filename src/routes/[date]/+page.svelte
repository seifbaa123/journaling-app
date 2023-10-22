<script lang="ts">
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import type { Journals } from '@prisma/client';
	import { handleRemove, handleSubmit } from './handles';
	import { lang } from '$lib/store';

	export let data;

	let isJournalExist = true;
	let journal: Journals = { ...(data.journal as Journals) };

	if (data.journal == null) {
		isJournalExist = false;
		journal = {
			date: $page.params.date,
			title: '',
			body: '',
			status: false,
			sport: false,
			coding: false
		};
	}
</script>

<div class="container">
	<h1>{$lang.date} {$page.params.date}</h1>

	<form on:submit|preventDefault={() => handleSubmit(journal, isJournalExist)}>
		<div class="flags">
			<div class="flag">
				<p>{$lang.status}</p>
				<Switch bind:checked={journal.status} />
			</div>
			<div class="flag">
				<p>{$lang.sport}</p>
				<Switch bind:checked={journal.sport} />
			</div>
			<div class="flag">
				<p>{$lang.coding}</p>
				<Switch bind:checked={journal.coding} />
			</div>
		</div>
		<Input label={$lang.title} bind:value={journal.title} />
		<Input label={$lang.body} type="textarea" bind:value={journal.body} />
		<button class="btn primary">{$lang.save}</button>
	</form>

	{#if isJournalExist}
		<button class="remove-btn" on:click={() => handleRemove(journal)}>
			<i class="fa-solid fa-trash" />
		</button>
	{/if}
</div>

<style>
	.container {
		width: 100%;
		max-width: 768px;
		margin: 2rem auto;
		padding: 1rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	.flag {
		width: 100%;
		padding: 0.25rem 0;
		font-weight: bold;
		color: var(--dark-gray);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.remove-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 1.25rem;
		color: var(--red);
		transition: color 0.3s ease-out;
		cursor: pointer;
	}

	.remove-btn:hover {
		color: var(--dark-gray);
	}

	:global([dir='rtl']) .remove-btn {
		right: unset;
		left: 1rem;
	}
</style>
