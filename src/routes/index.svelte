<script>
	import about from '../about.json';
	import projects from '../projects.json';
	import About from '$lib/About.svelte';
	import Project from '$lib/Project.svelte';
	import ContactDetails from '$lib/Contact/ContactDetails.svelte';
	import ContactForm from '$lib/Contact/ContactForm.svelte';

	const email = 'clarence.e.a@gmail.com';
	const github = 'github.com/clarence-adams';
	const linkedin = 'linkedin.com/in/clarence-adams';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Landing -->
<section id="landing">
	<div id="image-placeholder" />
	<h1>Hello! I'm Clarence, a full stack developer.</h1>
	<hr />
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tempor id eu nisl nunc mi. Id
		diam vel quam elementum pulvinar etiam non quam lacus. Pellentesque adipiscing commodo elit at
		imperdiet dui accumsan sit amet. Ante metus dictum at tempor commodo ullamcorper a lacus. A erat
		nam at lectus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Faucibus nisl tincidunt
		eget nullam. Arcu non sodales neque sodales ut etiam sit amet nisl.
	</p>
</section>

<!-- About -->

<section id="about">
	<div class="tiles">
		{#each about as about}
			<About {about} />
		{/each}
	</div>
</section>

<!-- Projects -->

<section id="projects">
	<div class="tiles">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</section>

<!-- Contact -->
<section id="contact">
	<div id="contact-wrapper">
		<ContactDetails {email} {github} {linkedin} />
		<ContactForm />
	</div>
</section>

<style>
	section {
		min-height: calc(100vh - var(--header-height));
		padding: 4rem 0;
		scroll-margin-top: var(--header-height);
	}
	h2 {
		font-size: 2rem;
		font-weight: 600;
		padding-bottom: 1rem;
		margin-bottom: 4rem;
		border-bottom: 2px solid var(--red);
	}
	hr {
		height: 0px;
		border: 1px solid var(--red);
		margin: 1rem 0;
	}
	#contact-wrapper {
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
	#image-placeholder {
		--img-circle-radius: 150px;
		float: left;
		flex-shrink: 0;
		border-radius: 100%;
		width: 300px;
		height: 300px;
		margin-right: 2rem;
		background-color: var(--white);
		shape-outside: circle(175px at 150px 150px);
	}
	.tiles {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 4rem;
	}
</style>
