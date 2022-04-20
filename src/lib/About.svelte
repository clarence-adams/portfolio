<script>
	export let about;
</script>

<div class="about-tile">
	<h3>{about.header}</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed vulputate.
		Commodo elit at imperdiet dui. Cras semper auctor neque vitae tempus quam pellentesque nec nam.
		Id nibh tortor id aliquet lectus. Pulvinar sapien et ligula ullamcorper malesuada proin.
		Praesent elementum facilisis leo vel fringilla.
	</p>
</div>

<style>
	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
		border-bottom: 2px solid var(--red);
	}
	.about-tile {
		padding: 1rem;
		border: 2px solid var(--red);
	}
</style>
