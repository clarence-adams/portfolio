<script>
	const formHandler = () => {
		console.log('Form submitted');
	};
</script>

<form on:submit|preventDefault={formHandler}>
	<fieldset>
		<label for="name">Name</label>
		<input name="name" id="name" />
		<label for="email">Email</label>
		<input name="email" id="email" />
		<label for="message">Message</label>
		<textarea name="message" id="message" />
	</fieldset>
	<button type="submit">Submit</button>
</form>

<style>
	form {
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 24rem;
		padding: 2rem;
		border: 2px solid var(--blue);
	}
	fieldset {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	label {
		width: 100%;
		margin-bottom: 0.25rem;
		align-self: left;
	}
	label,
	input {
		color: var(--white);
	}
	input,
	textarea {
		padding: 1px 4px;
		margin-bottom: 1rem;
		background: rgb(0, 0, 0, 0);
		border: 2px solid var(--cyan);
	}
	button {
		padding: 0.5rem 0.75rem;
		color: var(--white);
		border: 2px solid var(--magenta);
	}
</style>
