<script>
	import '../app.css';
	import githubIcon from '$lib/assets/icons/github-mark.png';
	import linkedinIcon from '$lib/assets/icons/linkedin.png';

	const currentYear = new Date().getFullYear();
</script>

<main class="min-h-dvh flex flex-col items-center">
	<header class="bg-blueGray h-[120px] flex items-center px-12 w-full -mb-3">
		<h1>ISAAC SUNG</h1>
	</header>

	<slot />

	<footer
		class="bg-blueGray h-[75px] mt-auto flex items-center md:justify-between md:flex-row flex-col justify-center px-12 w-full"
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
