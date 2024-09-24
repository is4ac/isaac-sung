<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div
	class="flex min-h-[20dvh] w-full flex-col gap-4 rounded-lg border-2 border-border bg-darkGray px-6 py-4"
>
	<h3>{title}</h3>
	<p class="leading-relaxed">{description}</p>
</div>
