<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		position: absolute;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		min-height: calc(100vh - var(--header-height));
		background-color: var(--main-background);
	}
</style>
