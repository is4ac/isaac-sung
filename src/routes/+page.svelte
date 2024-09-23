<script>
	import Card from '../components/card.svelte';

	const cards = [
		{ imageSrc: 'card1.jpg', title: 'Card 1' },
		{ imageSrc: 'card2.jpg', title: 'Card 2' },
		{ imageSrc: 'card3.jpg', title: 'Card 3' },
		{ imageSrc: 'card1.jpg', title: 'Card 4' },
		{ imageSrc: 'card2.jpg', title: 'Card 5' },
		{ imageSrc: 'card3.jpg', title: 'Card 6' },
		{ imageSrc: 'card1.jpg', title: 'Card 7' },
		{ imageSrc: 'card2.jpg', title: 'Card 8' },
		{ imageSrc: 'card3.jpg', title: 'Card 9' },
		{ imageSrc: 'card1.jpg', title: 'Card 10' },
		{ imageSrc: 'card2.jpg', title: 'Card 11' },
		{ imageSrc: 'card3.jpg', title: 'Card 12' }
	];
</script>

<div class="grid grid-cols-6 gap-2">
	{#each cards as card}
		<Card {...card} />
	{/each}
</div>
