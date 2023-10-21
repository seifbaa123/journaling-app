<script lang="ts">
	import '@fortawesome/fontawesome-free/js/all.js';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';

	import SideBar from '$lib/components/SideBar.svelte';
</script>

<SideBar />
<div class="content">
	<slot />
</div>

<style>
	.content {
		width: 100%;
		padding-bottom: var(--side-bar-width);
	}

	@media screen and (min-width: 768px) {
		.content {
			width: 100%;
			padding-bottom: unset;
			padding-left: var(--side-bar-width);
		}
	}
</style>
