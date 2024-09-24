<script>
	import '../app.css';
	import githubIcon from '$lib/assets/icons/github-mark.png';
	import linkedinIcon from '$lib/assets/icons/linkedin.png';
	import { pageTitle } from '$lib/stores/pageTitle';

	const currentYear = new Date().getFullYear();
</script>

<main class="flex min-h-dvh flex-col items-center">
	<header class="relative z-0 -mb-3 h-[100px] w-full bg-blueGray px-12">
		<h2 class="absolute left-[50%] top-2 -ml-[120px] lg:bottom-5 lg:left-auto lg:top-auto lg:ml-0">
			<em><a href="/">ISAAC SUNG</a></em>
		</h2>

		<div
			class="absolute bottom-4 left-[50%] -ml-[150px] w-[300px] border-x-8 border-y-2 border-border bg-background px-4 py-1 text-center"
		>
			<h4>{$pageTitle}</h4>
		</div>

		{#if $pageTitle !== 'isaac-sung.com'}
			<a href="/" class="absolute right-3 top-[50%] -mt-3 md:right-12">Back</a>
		{/if}
	</header>

	<slot />

	<footer
		class="mt-auto flex h-[75px] w-full flex-col items-center justify-center bg-blueGray px-12 md:flex-row md:justify-between"
	>
		<p>© {currentYear} Isaac Sung. All rights reserved.</p>
		<p class="flex items-center gap-2">
			<a href="https://github.com/is4ac/isaac-sung"
				><img
					style="filter: grayscale(1) brightness(0) saturate(0%) invert(1); -webkit-filter: grayscale(1) brightness(0) saturate(0%) invert(1);"
					width="24px"
					height="24px"
					src={githubIcon}
					alt="GitHub profile for is4ac"
				/></a
			>
			<a
				href="https://www.linkedin.com/in/isaac-sung
			"
				><img
					style="filter: grayscale(1) brightness(0) saturate(0%) invert(1); -webkit-filter: grayscale(1) brightness(0) saturate(0%) invert(1);"
					width="24px"
					height="24px"
					src={linkedinIcon}
					alt="LinkedIn profile for Isaac"
				/></a
			>
			<a href="mailto:isaac@isaac-sung.com">isaac@isaac-sung.com</a>
		</p>
	</footer>
</main>

<style lang="postcss">
</style>
