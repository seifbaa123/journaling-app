<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { lang } from '$lib/store';
	import Cookies from 'js-cookie';

	type Link = { href: string; icon: string };

	const links: Link[] = [
		{ href: '/', icon: 'house' },
		{ href: '/heatmap', icon: 'chart-line' },
		{ href: '/settings', icon: 'gear' }
	];

	function logout() {
		if (confirm($lang.words.areYouSureYouWantToLogout)) {
			Cookies.remove('token');
			goto('/login');
		}
	}
</script>

<nav>
	{#each links as l}
		<a href={l.href} class={$page.url.pathname === l.href ? 'active' : ''}>
			<i class="fa-solid fa-{l.icon}" />
		</a>
	{/each}
	<button on:click={logout}><i class="fa-solid fa-right-from-bracket" /></button>
</nav>

<style>
	nav {
		width: 100%;
		height: var(--side-bar-width);
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		box-shadow: var(--shadow);
		background-color: var(--white);
	}

	a,
	button {
		flex: 1;
		padding: 0.5em;
		font-size: 1.25rem;
		text-align: center;
		color: var(--dark-gray);
		cursor: pointer;
	}

	a.active {
		color: var(--blue);
	}

	@media screen and (min-width: 768px) {
		nav {
			width: var(--side-bar-width);
			height: 100vh;
			flex-direction: column;
		}

		:global([dir='rtl']) nav {
			left: unset;
			right: 0;
		}

		a,
		button {
			flex: unset;
		}
	}
</style>
