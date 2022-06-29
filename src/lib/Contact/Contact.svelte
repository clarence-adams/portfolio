<script>
	import H2 from '$lib/tags/H2.svelte';
	import ContactDetails from '$lib/Contact/ContactDetails.svelte';
	import ContactForm from '$lib/Contact/ContactForm.svelte';

	export let email;
	export let github;
	export let linkedin;
</script>

<div
	id="contact-wrapper"
	class="relative left-1/2 mb-32 flex max-w-[theme(spacing.96)] -translate-x-1/2 flex-col items-center justify-start border-2 border-blue bg-night p-4 sm:mb-16"
>
	<H2 border="blue">Contact</H2>
	<div class="flex flex-col gap-4">
		<ContactDetails {email} {github} {linkedin} />
		<ContactForm />
	</div>
</div>
