<script lang="ts">
	export let imageSrc: string;
	export let title: string;
</script>

<div
	class="h-36 w-36 rounded-lg flex items-end justify-center bg-cardBackground bg-origin-border bg-center bg-no-repeat bg-cover border-border border-2"
	style="background-image: url(../assets/images/${imageSrc})"
>
	<span class="uppercase">{title}</span>
</div>
