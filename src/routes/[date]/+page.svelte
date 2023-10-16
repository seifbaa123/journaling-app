<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';

	import Switch from '$lib/components/Switch.svelte';

	export let data;

	let isJournalExist = true;
	let journal = { ...data.journal };

	if (data.journal === null) {
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

	async function handleSubmit(e: Event) {
		e.preventDefault();

		if (isJournalExist) {
			fetch(`/api/journals/${journal.date}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(journal)
			});
		} else {
			isJournalExist = true;
			fetch(`/api/journals/`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(journal)
			});
		}

		invalidateAll().then(() => goto('/'));
	}

	function handleRemove() {
		fetch(`/api/journals/${journal.date}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		});

		goto('/');
	}
</script>

<div class="container">
	<h1>Date {$page.params.date}</h1>

	<form on:submit={handleSubmit}>
		<div class="flags">
			<div class="flag">
				<p>Status</p>
				<Switch bind:checked={journal.status} />
			</div>
			<div class="flag">
				<p>Sport</p>
				<Switch bind:checked={journal.sport} />
			</div>
			<div class="flag">
				<p>Coding</p>
				<Switch bind:checked={journal.coding} />
			</div>
		</div>
		<Input label="Title" bind:value={journal.title} />
		<Input label="Body" type="textarea" bind:value={journal.body} />
		<button class="btn">save</button>
	</form>

	<button class="btn" on:click={handleRemove}>remove</button>
</div>

<style>
	.container {
		width: 100%;
		max-width: 768px;
		margin: 5rem auto;
	}

	.flag {
		width: 100%;
		padding: 0.25rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
