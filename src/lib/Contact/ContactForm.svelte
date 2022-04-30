<script>
	import { onMount, onDestroy } from 'svelte';
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import capitalize from '$lib/utils/capitalize.js';
	import Label from '$lib/tags/Label.svelte';
	import Input from '$lib/tags/Input.svelte';
	import Textarea from '$lib/tags/Textarea.svelte';

	// form
	let form;
	let formRect;
	let formWidth;
	let formButton;

	// inputs
	let inputs = ['name', 'email'];

	// button
	let buttonRect;
	let buttonHeight;
	let buttonWidth;
	let buttonSpring;
	let buttonText = 'Send Message';
	let disabled = false;

	// loading bar
	let loadingBarWrapper;
	let loadingBarWidth = spring(0);
	loadingBarWidth.stiffness = 0.1;
	let loadingBarText = 'Sending message...';
	let loadingBarBorder = 'border-magenta';

	let clicked = false;
	let sent = false;
	let textColor = 'text-[#000]';
	let bgColor = 'bg-magenta';

	onMount(() => {
		formRect = form.getBoundingClientRect();
		formWidth = formRect.width;
		buttonRect = formButton.getBoundingClientRect();
		buttonWidth = buttonRect.width;
		buttonHeight = buttonRect.height;
		buttonSpring = spring(buttonWidth);
	});

	const formHandler = (e) => {
		// const formData = new FormData(form);
		const formData = {
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value
		};

		console.log(formData);

		clicked = true; // starts button text fade
		disabled = true; // disabled form inputs and submit button
		buttonSpring.set(formWidth); // increases button width to match loading bar
		textColor = 'text-white';
		bgColor = 'bg-storm';

		// send formData to nodemailer api
		fetch('/api/form', {
			method: 'POST',
			headers: { 'content-type': 'application/json', accept: 'application/json' },
			body: JSON.stringify(formData)
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.success) {
					setTimeout(() => {
						loadingBarText = 'Error, try again later';
						loadingBarBorder = 'border-red';
					}, 2000);
				} else {
					setTimeout(() => {
						loadingBarText = 'Message sent!';
						loadingBarBorder = 'border-green';
					}, 2000);
				}
			});

		// begin button fade
		const timeout = setTimeout(() => {
			sent = true;
		}, 500);

		// begin loading bar loading animation
		setTimeout(() => {
			loadingBarWidth.set(loadingBarWrapper.getBoundingClientRect().width);
		}, 1250);
		buttonText = '';
	};
</script>

<form bind:this={form} id="form" on:submit|preventDefault={formHandler}>
	<fieldset class="flex flex-col justify-center items-start text-white">
		{#each inputs as input}
			<Label labelFor={input}>{capitalize(input)}</Label>
			<Input name={input} id={input} {disabled} />
		{/each}
		<Label labelFor="message">Message</Label>
		<Textarea name="message" id="message" {disabled} />
	</fieldset>
	{#if !sent}
		<button
			bind:this={formButton}
			{disabled}
			style={`width: ${$buttonSpring}px; height: ${buttonHeight}px;`}
			type="submit"
			class={`p-2 text-left ${textColor} font-semibold ${bgColor}
			border-2 border-magenta hover:text-white hover:bg-night 
			active:bg-storm disabled:bg-night`}
		>
			{#if !clicked}
				<span transition:fade class="whitespace-nowrap">{buttonText}</span>
			{/if}
		</button>
	{:else if sent}
		<div
			bind:this={loadingBarWrapper}
			style={`width: ${$buttonSpring}px; height: ${buttonHeight}px;`}
			class={`relative inline-block p-2  text-white font-semibold  bg-night border-2 
			${loadingBarBorder}`}
		>
			<div
				style={`width: calc(${$loadingBarWidth}px - 4px)`}
				class="absolute top-0 left-0 h-full bg-storm"
			/>
			<span transition:fade class="relative z-10">{loadingBarText}</span>
		</div>
	{/if}
</form>
