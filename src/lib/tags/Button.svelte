<script>
	export let type = 'button';
</script>

<button
	{type}
	class="p-2  text-[#000] font-semibold  bg-magenta border-2 
	border-magenta hover:text-white hover:bg-night active:bg-storm"
>
	<slot />
</button>
