<script>
	import { lang } from '$lib/store';
	import Language from './Language.svelte';
	import Theme from './Theme.svelte';
</script>

<div class="container">
	<h1>{$lang.words.settings}</h1>
	<div class="settings">
		<div class="box bg"><Language /></div>
		<div class="box shadow"><Theme /></div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
	}

	.settings {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.box {
		padding: 1rem;
		border-radius: 0.25rem;
	}

	.box.shadow {
		box-shadow: var(--shadow);
	}

	.box.bg {
		background-color: var(--light-gray);
	}

	@media screen and (min-width: 768px) {
		.settings {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (min-width: 1024px) {
		.settings {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
