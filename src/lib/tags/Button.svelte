<script>
	export let type = 'button';
</script>

<button
	{type}
	class="border-2  border-magenta bg-magenta  p-2 font-semibold 
	text-[#000] hover:bg-night hover:text-white active:bg-storm"
>
	<slot />
</button>
