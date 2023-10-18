<script lang="ts">
	import SideBar from '$lib/components/SideBar.svelte';
	import '../app.css';
</script>

<SideBar />
<div class="content">
	<slot />
</div>

<style>
	.content {
		width: 100%;
		padding-left: 1rem;
	}
</style>
