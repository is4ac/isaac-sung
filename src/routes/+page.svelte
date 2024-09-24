<script>
	import Card from '../components/card.svelte';
	import DetailsPane from '../components/details-pane.svelte';

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

<div class="z-10 flex flex-col h-[50dvh] justify-start items-center">
	<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 max-w-[750px]">
		{#each cards as card}
			<Card {...card} />
		{/each}
	</div>

	<div class="w-[95dvw] mx-auto md:max-w-[800px] mt-6">
		<DetailsPane title="Details Pane" description="This is a details pane." />
	</div>
</div>
