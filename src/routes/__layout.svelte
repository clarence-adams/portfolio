<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main class="flex flex-col gap-32 w-full p-8 bg-night sm:p-16 ">
	<slot />
</main>

<Footer />

<style>
	main {
		min-height: calc(100vh - var(--header-height));
	}
</style>
