<script>
	let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header class="flex justify-between items-center px-20 bg-storm z-50">
	{#if windowWidth > 800}
		<p class="text-3xl font-semibold text-magenta">Clarence Adams</p>
	{/if}
	<nav class="flex items-center h-full">
		<ul class="flex gap-8">
			<a href="#landing">About</a>
			<a href="#skills">Skills</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		left: 0;
		height: var(--header-height);
	}
	a {
		color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		font-weight: 600;
		height: var(--header-height);
	}
	a:hover {
		padding-top: 4px;
		border-bottom: 4px solid var(--magenta);
		text-decoration: none;
	}

	@media (max-width: 800px) {
		header {
			position: fixed;
			top: auto;
			bottom: 0;
			justify-content: flex-end;
			width: 100%;
		}
	}

	@media (max-width: 450px) {
		header {
			justify-content: center;
			padding: 0 2rem;
		}
	}
</style>
