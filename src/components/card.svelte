<script lang="ts">
	import { type CardType } from '../types';

	export let card: CardType;
	export let selected: boolean;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	role="gridcell"
	on:mouseover
	on:focus
	on:mouseleave
	on:click
	class="flex h-28 w-28 items-end justify-center rounded-lg border-2 border-border bg-cardBackground bg-cover bg-center bg-no-repeat bg-origin-border transition-all hover:border-yellow-400 hover:shadow-[0_0_0_4px_#facc15] focus:border-yellow-400 focus:shadow-[0_0_0_4px_#facc15] focus:outline-none focus:ring-0 sm:h-36 sm:w-36 {selected
		? 'border-yellow-400 shadow-[0_0_0_4px_#facc15]'
		: 'shadow-none'}"
	style="background-image: url({card.imageSrc})"
	tabindex="0"
>
	<span class="w-full bg-darkRed py-1 text-center text-xs uppercase">{card.title}</span>
</div>
