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
	let formIncomplete = false;
	let disabled = false;
	// inputs
	let inputs = ['name', 'email'];

	// button
	let buttonRect;
	let buttonHeight;
	let buttonWidth;
	let buttonSpring;
	let buttonText = 'Send Message';

	// loading bar
	let loadingBarWrapper;
	let loadingBarWidth = spring(0);
	loadingBarWidth.stiffness = 0.04;
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

	let fetchTimeout;
	let buttonTimeout;
	let loadingBarTimeout;

	const formHandler = (e) => {
		const formData = new FormData(form);

		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		if (name === '' || email === '' || message === '') {
			return (formIncomplete = true);
		}

		formIncomplete = false; // remove form incomplete notification
		clicked = true; // starts button text fade
		disabled = true; // disabled form inputs and submit button
		buttonSpring.set(formWidth); // increases button width to match loading bar
		textColor = 'text-white';
		bgColor = 'bg-storm';

		// send formData to nodemailer api
		fetch('/api/form', {
			method: 'POST',
			body: formData
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.success) {
					fetchTimeout = setTimeout(() => {
						loadingBarText = 'Error, try again later';
						loadingBarBorder = 'border-red';
					}, 2000);
				} else {
					fetchTimeout = setTimeout(() => {
						loadingBarText = 'Message sent!';
						loadingBarBorder = 'border-green';
					}, 2000);
				}
			});

		// begin button fade
		buttonTimeout = setTimeout(() => {
			sent = true;
		}, 500);

		// begin loading bar loading animation
		loadingBarTimeout = setTimeout(() => {
			loadingBarWidth.set(loadingBarWrapper.getBoundingClientRect().width);
		}, 1250);
		buttonText = '';
	};

	onDestroy(() => {
		clearTimeout(fetchTimeout);
		clearTimeout(buttonTimeout);
		clearTimeout(loadingBarTimeout);
	});
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
	{#if formIncomplete}
		<div
			style={`width: ${formWidth}px`}
			class="p-2 mb-4 text-white font-semibold bg-night border-2 border-red"
		>
			Form is incomplete. Please fill out all forms and try again.
		</div>
	{/if}
	{#if !sent}
		<button
			bind:this={formButton}
			{disabled}
			style={`width: ${$buttonSpring}px; height: ${buttonHeight}px;`}
			type="submit"
			class={`flex p-2 text-left ${textColor} font-semibold ${bgColor}
			border-2 border-magenta hover:text-white hover:bg-night 
			active:bg-storm disabled:bg-night`}
		>
			{#if !clicked}
				<svg
					transition:fade
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="mt-1 mr-1"
					viewBox="0 0 16 16"
				>
					<path
						d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
					/>
				</svg>
				<span transition:fade class="whitespace-nowrap">{buttonText}</span>
			{/if}
		</button>
	{:else if sent}
		<div
			bind:this={loadingBarWrapper}
			style={`width: ${$buttonSpring}px; height: ${buttonHeight}px;`}
			class={`relative inline-block p-2 text-white font-semibold bg-night border-2 
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
