<script>
	import about from '../about.json';
	import projects from '../projects.json';
	import About from '$lib/About.svelte';
	import Project from '$lib/Project.svelte';
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
	{#each about as about}
		<About {about} />
	{/each}
</section>

<!-- Projects -->

<section id="projects">
	{#each projects as project}
		<Project {project} />
	{/each}
</section>

<!-- Contact -->
<style>
	section {
		scroll-margin-top: var(--header-height);
	}
	hr {
		height: 0px;
		border: 1px solid var(--red);
		margin: 1rem 0;
	}
	#image-placeholder {
		--img-circle-radius: 150px;
		float: left;
		flex-shrink: 0;
		border-radius: 100%;
		width: 300px;
		height: 300px;
		margin-right: 2rem;
		background-color: #666;
		shape-outside: circle(175px at 150px 150px);
	}
	#about,
	#projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 4rem;
	}
</style>
