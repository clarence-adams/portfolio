<script>
	import H2 from '$lib/tags/H2.svelte';
	export let skill;
</script>

<div class="p-4 border-2 border-red">
	<H2 border="red">{skill.header}</H2>
	<ul class="columns-1 sm:columns-2">
		{#each skill.skills as skill}
			<li class="flex mb-1.5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					class="bi bi-caret-right mt-1.5 mr-1 flex-shrink-0 fill-magenta"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
				{skill}
			</li>
		{/each}
	</ul>
</div>
