<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import skills from '../skills.json';
	import projects from '../projects.json';
	import A from '$lib/tags/A.svelte';
	import Section from '$lib/tags/Section.svelte';
	import SvgPattern from '$lib/SvgPattern.svelte';
	import Skill from '$lib/Skill.svelte';
	import Project from '$lib/Project.svelte';
	import Contact from '$lib/Contact/Contact.svelte';

	const email = 'clarence.e.a@gmail.com';
	const github = 'github.com/clarence-adams';
	const linkedin = 'linkedin.com/in/clarence-adams';

	let windowWidth;
	let backgroundWidth;
	let backgroundHeight;

	const setBackgroundDimensions = () => {
		// get width of page
		let html = document.querySelector('html');
		backgroundWidth = html.clientWidth;
		// cannot use bind:this on a component
		let landing = document.querySelector('#landing');
		backgroundHeight = landing.getBoundingClientRect().height;
	};

	onMount(() => {
		setBackgroundDimensions();
	});

	$: windowWidth && setBackgroundDimensions();
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Clarence Adams, a full stack developer" />
</svelte:head>

<!-- Landing -->
<Section id="landing">
	<!-- background pattern -->
	<div
		style={`width: ${backgroundWidth}px; height: calc(${backgroundHeight}px + 8rem)`}
		class="absolute top-[-4rem] left-[-2rem] z-0 sm:left-[-4rem] 2xl:left-[-16rem]"
	>
		<SvgPattern />
	</div>
	<!-- content -->
	<div class="relative flex flex-col justify-start items-center z-10 md:block">
		<!-- profile picture -->
		<img
			src="/profile.jpg"
			alt=""
			id="profile-img"
			class="float-none w-[250px] h-[250px] mb-8 mr-0 rounded-full shadow-inner sm:w-[300px] sm:h-[300px] md:mb-0 md:mr-8 md:float-left"
		/>
		<h1 class="text-3xl font-bold text-left sm:text-4xl md:text-5xl">
			Hello! I'm Clarence, a full stack developer.
		</h1>
		<hr class="w-full h-0.5 my-4 bg-red border-0 md:w-auto" />
		<p class="mb-8">
			Welcome to my personal portfolio! Below you'll find some useful (and not very useful)
			information about me as well as some of the projects I've done. <A
				href="https://github.com/clarence-adams/portfolio"
				target="_blank">This site</A
			> was built using <A href="https://kit.svelte.dev/" target="_blank">SvelteKit</A>, <A
				href="https://tailwindcss.com/"
				target="_blank">TailwindCSS</A
			> and hosted on
			<A href="https://vercel.com" target="_blank">Vercel</A>. The nice color scheme comes from my
			favorite VS Code theme
			<A href="https://github.com/enkia/tokyo-night-vscode-theme" target="_blank">Tokyo Night</A>.
		</p>
		<p>
			In 2018 I started my first real career in residential HVAC. I found out I was pretty good at
			solving difficult wiring problems, diagnosing faulty relays, and accurately diagnosing
			advanced refigerant issues. I wanted to leverage my problem solving skills so I could get out
			of the hot attics and gross crawl spaces I constantly found myself in and started learning how
			to program on August 1st, 2020 so I could start a new career in HVAC controls. In the process
			I found that I loved programming, I mean REALLY loved programming! I started devoting all of
			my free time after working 50-80 hour weeks learning how to program and I have been doing web
			development professionally since November 1st, 2020.
		</p>
	</div>
</Section>

<!-- Skills -->

<Section id="skills">
	<div class="grid grid-cols-1 grid-rows-1 gap-16 md:grid-cols-2 md:grid-rows-2">
		{#each skills as skill}
			<Skill {skill} />
		{/each}
	</div>
	<div
		style={`width: ${backgroundWidth}px`}
		class="absolute bottom-[-7rem] left-[-2rem] h-24 z-0 sm:left-[-4rem] 2xl:left-[-16rem]"
	>
		<SvgPattern />
	</div>
</Section>

<!-- Projects -->

<Section id="projects">
	<div class="grid grid-cols-1 grid-rows-1 gap-16 md:grid-cols-2 md:grid-rows-2">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
	<div
		style={`width: ${backgroundWidth}px`}
		class="absolute bottom-[-7rem] left-[-2rem] h-24 z-0 sm:left-[-4rem] 2xl:left-[-16rem]"
	>
		<SvgPattern />
	</div>
</Section>

<!-- Contact -->
<Section id="contact">
	<Contact {email} {github} {linkedin} />
</Section>

<style>
	#profile-img {
		shape-outside: circle(175px at 150px 150px);
	}
</style>
