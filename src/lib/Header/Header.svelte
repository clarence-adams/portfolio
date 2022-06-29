<script>
	import MobileNav from '$lib/Header/MobileNav.svelte';
	import DesktopNav from '$lib/Header/DesktopNav.svelte';
</script>

<header
	class="fixed top-auto bottom-0 z-50 flex h-16 w-full 
	items-center justify-center bg-storm px-8 md:sticky md:top-0 
	md:bottom-auto md:justify-between lg:px-16 2xl:px-64"
>
	<p class="hidden text-3xl font-bold text-magenta md:block">Clarence Adams</p>
	<MobileNav />
	<DesktopNav />
</header>
