<script>
	import about from '../about.json';
	import projects from '../projects.json';
	import Section from '$lib/tags/Section.svelte';
	import About from '$lib/About.svelte';
	import Project from '$lib/Project.svelte';
	import Contact from '$lib/Contact/Contact.svelte';

	const email = 'clarence.e.a@gmail.com';
	const github = 'github.com/clarence-adams';
	const linkedin = 'linkedin.com/in/clarence-adams';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Landing -->
<Section id="landing">
	<!-- background pattern -->
	<div id="landing-background" class="absolute top-0 left-0 w-full z-0 md:top-16">
		<svg width="100%" height="100%">
			<defs>
				<pattern id="Pattern" patternUnits="userSpaceOnUse" x="16" y="16" width="32" height="32">
					<rect class="fill-storm" width="4" height="4" />
				</pattern>
			</defs>
			<rect fill="url(#Pattern)" width="100%" height="100%" />
		</svg>
	</div>
	<!-- content -->
	<div class="relative flex flex-col justify-start items-center z-10 md:block">
		<img
			src="/profile.jpg"
			alt=""
			id="profile-img"
			class="float-none w-[250px] h-[250px] mb-8 mr-0 rounded-full shadow-inner sm:w-[300px] sm:h-[300px] md:mr-8 md:float-left"
		/>
		<h1 class="text-5xl font-bold text-center md:text-left">
			Hello! I'm Clarence, a full stack developer.
		</h1>
		<hr class="w-full h-0.5 my-4 bg-red border-0 md:w-auto" />
		<p>
			Welcome to my personal portfolio! Below you'll find some useful (and not very useful)
			information about me as well as some of the projects I've done. This site was built using <a
				href="https://kit.svelte.dev/"
				target="_blank">SvelteKit</a
			>, <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> and hosted on
			<a href="https://vercel.com" target="_blank">Vercel</a>. The nice color scheme comes from my
			favorite VS Code theme
			<a href="https://github.com/enkia/tokyo-night-vscode-theme" target="_blank">Tokyo Night</a>.
		</p>
	</div>
</Section>

<!-- Skills -->

<Section id="skills">
	<div class="grid grid-cols-1 grid-rows-1 gap-16 md:grid-cols-2 md:grid-rows-2">
		{#each about as about}
			<About {about} />
		{/each}
	</div>
</Section>

<!-- Projects -->

<Section id="projects">
	<div class="grid grid-cols-1 grid-rows-1 gap-16 md:grid-cols-2 md:grid-rows-2">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</Section>

<!-- Contact -->
<Section id="contact">
	<Contact {email} {github} {linkedin} />
</Section>

<style>
	#landing-background {
		height: calc(100% - var(--header-height));
	}
	#profile-img {
		--img-circle-radius: 150px;
		shape-outside: circle(175px at 150px 150px);
	}
</style>
