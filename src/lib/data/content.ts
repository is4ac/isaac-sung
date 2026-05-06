import kimcheeseImage from '$lib/assets/images/kimcheese.webp';
import sharkbyteImage from '$lib/assets/images/sharkbyte.webp';
import charisnotesImage from '$lib/assets/images/charisnotes.webp';
import musicavenueImage from '$lib/assets/images/musicavenue.webp';
import bnwImage from '$lib/assets/images/bnw_icon.png';
import abyssalImage from '$lib/assets/images/abyssal.webp';
import weatherGuesserImage from '$lib/assets/images/weatherguesser.webp';
import resumeImage from '$lib/assets/images/resume.webp';
import researchImage from '$lib/assets/images/research.webp';
import teachingImage from '$lib/assets/images/teaching.webp';
import type { CardType } from '../types';

export const content: CardType[] = [
	{
		imageSrc: weatherGuesserImage,
		title: 'Weather Guesser',
		description:
			'A simple web game to guess the current temperature of random cities from around the world.',
		url: 'https://weatherguesser.isaac-sung.com'
	},
	{
		imageSrc: abyssalImage,
		title: 'Abyssal Funk (WIP)',
		description: 'An original card game (work in progress).',
		url: 'https://game.isaac-sung.com'
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
	{
		imageSrc: sharkbyteImage,
		title: 'SharkByte',
		description: 'A chiptune/8-bit style music remix project.',
		url: 'https://open.spotify.com/artist/4yBEVFixNw23qBsCoNgkOX'
	},
	{
		imageSrc: kimcheeseImage,
		title: 'Kimcheese',
		description: 'A lofi, jazzy, funky collaboration with AJ Smith and other friends.',
		url: 'https://open.spotify.com/artist/2Z8utZKINvFmEbAdSeFMei'
	},
	{
		imageSrc: resumeImage,
		title: 'CV/Resume',
		description: 'View my work experience and related skills in PDF form.',
		url: '/Isaac_Sung_Resume_2025.pdf'
	},
	{
		imageSrc: bnwImage,
		title: 'Brave New Word',
		description:
			'Brave New Word is a quick, casual word finding game made as part of a dissertation research project.',
		url: 'https://isaacsung.itch.io/brave-new-word'
	},
	{ imageSrc: researchImage, title: 'PhD & Research', description: 'Coming soon', url: '/' },
	{ imageSrc: teachingImage, title: 'Teaching', description: 'Coming soon', url: '/' },
];
