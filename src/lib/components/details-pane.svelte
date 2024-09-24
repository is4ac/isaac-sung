<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="flex w-full flex-col gap-2 rounded-lg border-2 border-border bg-darkGray px-4 py-2">
	<h2>{title}</h2>
	<p>{description}</p>
</div>
