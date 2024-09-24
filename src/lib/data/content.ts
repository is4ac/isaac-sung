import fillerImage from '$lib/assets/images/filler.webp';
import kimcheeseImage from '$lib/assets/images/kimcheese.webp';
import sharkbyteImage from '$lib/assets/images/sharkbyte.webp';
import charisnotesImage from '$lib/assets/images/charisnotes.webp';
import musicavenueImage from '$lib/assets/images/musicavenue.webp';
import type { CardType } from '../types';

export const content: CardType[] = [
	{
		imageSrc: sharkbyteImage,
		title: 'SharkByte',
		description: 'A chiptune/8-bit style music remix project.',
		url: '/pages/sharkbyte'
	},
	{
		imageSrc: kimcheeseImage,
		title: 'Kimcheese',
		description: 'A lofi, jazzy, funky collaboration with AJ Smith and other friends.',
		url: '/pages/kimcheese'
	},
	{
		imageSrc: musicavenueImage,
		title: 'Music Avenue',
		description:
			'A 501(c)(3) non-profit organization that provides accessible music education to children in Dane County, Wisconsin. Website designed and maintained by me.',
		url: 'https://www.musicavenue.org'
	},
	{
		imageSrc: charisnotesImage,
		title: 'Charis Notes',
		description:
			'Personal website for Charis, a talented musician who happens to be my wife. Website designed and maintained by me.',
		url: 'https://www.charisnotes.com'
	},
	{ imageSrc: fillerImage, title: 'CV/Resume', description: '', url: '/pages/resume' },
	{ imageSrc: fillerImage, title: 'PhD & Research', description: '', url: '/pages/research' },
	{ imageSrc: fillerImage, title: 'Teaching', description: '', url: '/pages/teaching' },
	{
		imageSrc: fillerImage,
		title: 'Hoyo Translator',
		description: '',
		url: '/pages/hoyotranslator'
	},
	{ imageSrc: fillerImage, title: 'Card Game (WIP)', description: '', url: '/pages/card-game' },
	{
		imageSrc: fillerImage,
		title: 'Weather Guesser',
		description: '',
		url: '/pages/weather-guesser'
	},
	{ imageSrc: fillerImage, title: 'Brave New Word', description: '', url: '/pages/brave-new-word' },
	{ imageSrc: fillerImage, title: 'Wordoku (WIP)', description: '', url: '/pages/wordoku' }
];
