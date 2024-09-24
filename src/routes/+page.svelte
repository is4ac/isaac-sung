<script lang="ts">
	import { type CardType } from '$lib/types';
	import Card from '$lib/components/card.svelte';
	import DetailsPane from '$lib/components/details-pane.svelte';
	import { content } from '$lib/data/content';
	import { pageTitle } from '$lib/stores/pageTitle';

	let selectedCard: CardType | null = null;
	let hoveredCard: CardType | null = null;
	let displayCard: CardType | null = null;

	$: displayCard = hoveredCard || selectedCard;

	const handleHover = (card: CardType) => {
		hoveredCard = card;
	};

	const handleClick = (card: CardType) => {
		selectedCard = card;
	};

	pageTitle.set('isaac-sung.com');
</script>

<div class="z-10 flex h-[50dvh] flex-col items-center justify-start">
	<div class="grid max-w-[750px] grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
		{#each content as card}
			<a href={card.url} class="hover:opacity-100" tabindex="-1">
				<Card
					on:mouseover={() => handleHover(card)}
					on:focus={() => handleHover(card)}
					on:mouseleave={() => (hoveredCard = null)}
					on:click={() => handleClick(card)}
					{card}
					selected={selectedCard === card}
				/>
			</a>
		{/each}
	</div>

	<div class="mx-auto mt-6 w-[95dvw] md:max-w-[800px]">
		<DetailsPane
			title={displayCard ? displayCard.title : 'Details'}
			description={displayCard ? displayCard.description : 'Select a fighter!'}
		/>
	</div>
</div>
