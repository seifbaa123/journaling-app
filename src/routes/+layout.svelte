<script lang="ts">
	let showLoadingContainer = true;

	setTimeout(() => {
		showLoadingContainer = false;
	}, 1000);
</script>

{#if showLoadingContainer}
	<div class="loading-container">
		<div class="loading-dot" />
		<div class="loading-dot" />
		<div class="loading-dot" />
	</div>
{/if}

<slot />
