<header>
	<p id="name">Clarence Adams</p>
	<nav>
		<ul id="nav-list">
			<a href="#about">About</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--header-height);
		padding: 0 4rem;
		background-color: var(--header-background);
	}
	nav {
		display: flex;
		align-items: center;
		height: 100%;
	}
	a {
		font-size: 1.5rem;
		font-weight: 600;
		height: var(--header-height);
	}
	a:hover {
		margin-bottom: -4px;
		border-bottom: 4px solid var(--magenta);
	}
	#name {
		font-size: 2rem;
		font-weight: 600;
		color: var(--magenta);
	}
	#nav-list {
		display: flex;
		gap: 2rem;
	}
</style>
