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
	class="relative flex w-full flex-col gap-32 bg-night px-8 pt-8 sm:px-16 sm:pt-16 2xl:px-64 3xl:px-96"
>
	<slot {main} />
</main>
