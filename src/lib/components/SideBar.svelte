<script lang="ts">
	import { page } from '$app/stores';

	type Link = { href: string; icon: string };

	const links: Link[] = [
		{ href: '/', icon: 'house' },
		{ href: '/heatmap', icon: 'chart-line' }
	];
</script>

<nav>
	{#each links as l}
		<a href={l.href} class={$page.url.pathname === l.href ? 'active' : ''}>
			<i class="fa-solid fa-{l.icon}" />
		</a>
	{/each}
</nav>

<style>
	nav {
		width: var(--side-bar-width);
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		box-shadow: var(--shadow);
		background-color: var(--white);
	}

	a {
		padding: 0.5em;
		font-size: 1.25rem;
		color: var(--dark-gray);
	}

	a.active {
		color: var(--blue);
	}
</style>
