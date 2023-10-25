<script lang="ts">
	import '@fortawesome/fontawesome-free/js/all.js';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../../app.css';
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		width: 100%;
		max-width: 520px;
		min-height: 100vh;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container :global(.link) {
		display: block;
		margin-top: 1rem;
		font-size: 0.75rem;
		font-weight: bold;
		text-align: center;
		color: var(--dark-gray);
		text-decoration: none;
	}

	.container :global(.link:hover) {
		color: var(--blue);
	}
</style>
