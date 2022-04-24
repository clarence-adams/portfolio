<script>
	import H2 from '$lib/H2.svelte';
	import ContactDetails from '$lib/Contact/ContactDetails.svelte';
	import ContactForm from '$lib/Contact/ContactForm.svelte';

	export let email;
	export let github;
	export let linkedin;
</script>

<div
	id="contact-wrapper"
	class="relative left-1/2 -translate-x-1/2 flex flex-col 
  justify-start items-center w-80 p-4 border-2 border-blue sm:w-96"
>
	<H2 border="blue">Contact</H2>
	<div class="flex flex-col gap-4">
		<ContactDetails {email} {github} {linkedin} />
		<ContactForm />
	</div>
</div>
