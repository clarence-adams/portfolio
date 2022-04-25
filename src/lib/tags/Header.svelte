<script>
	let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header
	class="fixed top-auto bottom-0 flex justify-end items-center w-full 
	h-16 px-20 bg-storm z-50 sm:justify-center md:sticky md:top-0 
	md:bottom-auto md:justify-between"
>
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
</style>
