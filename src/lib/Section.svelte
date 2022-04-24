<script>
	export let id;
</script>

<section {id} class="px-8 scroll-mt-0 md:px-16 md:scroll-mt-32"><slot /></section>

<style>
	section {
		min-height: calc(100vh - var(--header-height));
	}
</style>
