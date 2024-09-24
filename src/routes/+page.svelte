<script lang="ts">
	import { type CardType } from '../types';
	import Card from '../components/card.svelte';
	import DetailsPane from '../components/details-pane.svelte';

	import fillerImage from '$lib/assets/images/filler.webp';
	import kimcheeseImage from '$lib/assets/images/kimcheese.webp';
	import sharkbyteImage from '$lib/assets/images/sharkbyte.webp';

	const cards = [
		{
			imageSrc: sharkbyteImage,
			title: 'SharkByte',
			description: 'A chiptune/8-bit style music remix project.'
		},
		{
			imageSrc: kimcheeseImage,
			title: 'Kimcheese',
			description: 'A lofi, jazzy, funky collaboration with AJ Smith and other friends.'
		},
		{ imageSrc: fillerImage, title: 'Filler 3', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 4', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 5', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 6', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 7', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 8', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 9', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 10', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 11', description: '' },
		{ imageSrc: fillerImage, title: 'Filler 12', description: '' }
	];

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
</script>

<div class="z-10 flex h-[50dvh] flex-col items-center justify-start">
	<div class="grid max-w-[750px] grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
		{#each cards as card}
			<Card
				on:mouseover={() => handleHover(card)}
				on:focus={() => handleHover(card)}
				on:mouseleave={() => (hoveredCard = null)}
				on:click={() => handleClick(card)}
				{card}
				selected={selectedCard === card}
			/>
		{/each}
	</div>

	<div class="mx-auto mt-6 w-[95dvw] md:max-w-[800px]">
		<DetailsPane
			title={displayCard ? displayCard.title : 'Details'}
			description={displayCard ? displayCard.description : 'Select a fighter!'}
		/>
	</div>
</div>
