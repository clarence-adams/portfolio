<script>
	import { spring } from 'svelte/motion';

	export let project;
	export let featured = false;

	let borderColor = featured ? 'border-yellow' : 'border-green';

	let yTranslate = spring(0);
	let scale = spring(1);

	$: style = `transform: translate(0, ${$yTranslate}%) scale(${$scale})`;
</script>

<div
	on:mouseenter={() => {
		yTranslate.set(-5);
		scale.set(1.01);
	}}
	on:mouseleave={() => {
		yTranslate.set(0);
		scale.set(1);
	}}
	{style}
	class="{borderColor} flex max-w-xl flex-col justify-between gap-4 border-2 bg-night p-4 no-underline active:bg-storm"
>
	<div>
		<div class="{borderColor} mb-4 flex items-center justify-between border-b-2 pb-4">
			<h2 class="text-2xl font-bold">{project.title}</h2>
			<a href={project.githubUrl} target="_blank" class="z-40 text-[0px] no-underline">
				Link to project's GitHub repository
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 fill-white hover:cursor-pointer hover:fill-magenta"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
			</a>
		</div>
		<p>{project.description}</p>
	</div>
	<a href={project.url} target="_blank">
		<img src={`/projects/${project.id}.png`} alt="" loading="lazy" />
	</a>
</div>
