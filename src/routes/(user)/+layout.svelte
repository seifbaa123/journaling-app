<script lang="ts">
	import '@fortawesome/fontawesome-free/js/all.js';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../../app.css';

	import SideBar from '$lib/components/SideBar.svelte';
</script>

<SideBar />
<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		padding-bottom: var(--side-bar-width);
	}

	@media screen and (min-width: 768px) {
		main {
			padding-bottom: unset;
			padding-left: var(--side-bar-width);
		}

		:global([dir='rtl']) main {
			padding-left: unset;
			padding-right: var(--side-bar-width);
		}
	}
</style>
