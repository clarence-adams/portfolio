<script>
	import Button from '$lib/tags/Button.svelte';
	const formHandler = () => {
		console.log('Form submitted');
	};
</script>

<form on:submit|preventDefault={formHandler}>
	<fieldset class="flex flex-col justify-center items-start text-white">
		<label for="name">Name</label>
		<input name="name" id="name" />
		<label for="email">Email</label>
		<input name="email" id="email" />
		<label for="message">Message</label>
		<textarea name="message" id="message" />
	</fieldset>
	<Button type="submit">Submit</Button>
</form>

<style>
	label {
		width: 100%;
		margin-bottom: 0.25rem;
		align-self: left;
	}
	textarea {
		min-height: 8rem;
	}
	input,
	textarea {
		width: 100%;
		padding: 1px 4px;
		margin-bottom: 1rem;
		background: rgb(0, 0, 0, 0);
		border: 2px solid var(--cyan);
	}
</style>
