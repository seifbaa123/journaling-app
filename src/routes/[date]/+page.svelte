<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	import Switch from '$lib/Switch.svelte';

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

<h1>Date {$page.params.date}</h1>

<form on:submit={handleSubmit}>
	<div>
		<label>
			Title
			<input type="text" bind:value={journal.title} />
		</label>
	</div>
	<div>
		<label>
			Body
			<textarea bind:value={journal.body} />
		</label>
	</div>
	<div>
		Status
		<Switch bind:checked={journal.status} />
	</div>
	<div>
		Sport
		<Switch bind:checked={journal.sport} />
	</div>
	<div>
		Coding
		<Switch bind:checked={journal.coding} />
	</div>
	<button>save</button>
</form>

<button on:click={handleRemove}>remove</button>
