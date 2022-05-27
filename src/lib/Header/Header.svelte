<script>
	import MobileNav from '$lib/Header/MobileNav.svelte';
	import DesktopNav from '$lib/Header/DesktopNav.svelte';
</script>

<header
	class="fixed top-auto bottom-0 flex justify-center items-center w-full 
	h-16 px-8 bg-storm z-50 md:sticky md:top-0 
	md:bottom-auto md:justify-between lg:px-16 2xl:px-64"
>
	<p class="hidden text-3xl font-bold text-magenta md:block">Clarence Adams</p>
	<MobileNav />
	<DesktopNav />
</header>
