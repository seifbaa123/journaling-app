<script lang="ts">
	import { lang } from '$lib/store';
	import { getLanguage, setLanguage } from '$lib/lang/lang';

	const langCode = getLanguage();
</script>

<h3>{$lang.words.language}</h3>
<label>
	<input
		type="radio"
		name="lang"
		checked={langCode.code === 'ar'}
		on:click={() => setLanguage('ar')}
	/>
	العربية
</label>
<label>
	<input
		type="radio"
		name="lang"
		checked={langCode.code === 'en'}
		on:click={() => setLanguage('en')}
	/>
	English
</label>

<style>
	label {
		display: block;
	}
</style>
