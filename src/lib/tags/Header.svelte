<script>
	let windowWidth;
	const breakpoint = 550;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<header
	class="fixed top-auto bottom-0 flex justify-center items-center w-full 
	h-16 px-8 bg-storm z-50 md:sticky md:top-0 
	md:bottom-auto md:justify-between lg:px-16 2xl:px-64"
>
	{#if windowWidth > 768}
		<p class="text-3xl font-semibold text-magenta">Clarence Adams</p>
	{/if}
	{#if windowWidth > breakpoint}
		<nav class="flex items-center h-full">
			<ul class="flex gap-8">
				<a href="#landing">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</ul>
		</nav>
	{:else}
		<nav class="flex justify-center items-center w-full h-full">
			<ul class="flex gap-16">
				<a href="#landing"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-person-lines-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"
						/>
					</svg></a
				>
				<a href="#skills"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-tools"
						viewBox="0 0 16 16"
					>
						<path
							d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
						/>
					</svg></a
				>
				<a href="#projects"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-code-slash"
						viewBox="0 0 16 16"
					>
						<path
							d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
						/>
					</svg></a
				>
				<a href="#contact"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-envelope"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
						/>
					</svg></a
				>
			</ul>
		</nav>
	{/if}
</header>

<style>
	a {
		color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		font-weight: 600;
		height: var(--header-height);
	}
	a:hover {
		padding-top: 4px;
		border-bottom: 4px solid var(--magenta);
		text-decoration: none;
	}
</style>
