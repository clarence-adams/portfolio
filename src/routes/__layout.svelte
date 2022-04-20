<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 8rem;
		padding: 4rem;
		width: 100%;
		min-height: calc(100vh - var(--header-height));
		background-color: var(--main-background);
	}
</style>
