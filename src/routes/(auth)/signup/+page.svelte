<script lang="ts">
	import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';
	import Input from '$lib/components/Input.svelte';
	import { lang } from '$lib/store';

	let username: string;
	let password: string;

	async function handleSubmit() {
		const res = await fetch('/api/auth/signup', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ username, password })
		});
		const data = await res.json();
		Cookies.set('token', data.token);
		goto('/');
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h1>{$lang.words.signup}</h1>
	<Input label={$lang.words.username} bind:value={username} />
	<Input label={$lang.words.password} bind:value={password} type="password" />
	<button class="btn primary full-width">{$lang.words.submit}</button>
</form>
