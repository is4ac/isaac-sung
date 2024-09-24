<script lang="ts">
	export let imageSrc: string;
	export let title: string;
</script>

<div
	class="h-28 w-28 sm:h-36 sm:w-36 rounded-lg flex items-end justify-center bg-cardBackground bg-origin-border bg-center bg-no-repeat bg-cover border-border border-2"
	style="background-image: url({imageSrc})"
>
	<span class="uppercase text-xs sm:text-base">{title}</span>
</div>
