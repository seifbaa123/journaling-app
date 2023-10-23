<script lang="ts">
	import Switch from '$lib/components/Switch.svelte';
	import { lang, darkMode } from '$lib/store';
	import { setTheme } from '$lib/theme';
</script>

<h3>{$lang.words.theme}</h3>
<div>
	<p>{$lang.words.darkMode}</p>
	<Switch checked={$darkMode} onChange={setTheme} />
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
