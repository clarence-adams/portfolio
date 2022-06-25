<script context="module">
	export const prerender = true;
</script>

<script>
	import Header from '$lib/Header/Header.svelte';
	import '../app.css';

	let main;
</script>

<Header />

<main
	bind:this={main}
	class="flex flex-col gap-32 w-full px-8 pt-8 bg-night sm:px-16 sm:pt-16 2xl:px-64 3xl:px-96"
>
	<slot {main} />
</main>
