<script>
	export let id;
</script>

<section {id} class="scroll-mt-0 md:scroll-mt-32"><slot /></section>

<style>
	section {
		min-height: calc(100vh - var(--header-height));
	}
</style>
