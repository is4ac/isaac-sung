<script>
	import '../app.css';
	import githubIcon from '$lib/assets/icons/github-mark.png';
	import linkedinIcon from '$lib/assets/icons/linkedin.png';

	const currentYear = new Date().getFullYear();
</script>

<main class="min-h-dvh flex flex-col items-center">
	<header class="relative z-0 bg-blueGray h-[120px] px-12 w-full -mb-3">
		<h2 class="absolute left-[50%] -ml-[120px] top-5 lg:ml-0 lg:left-auto lg:bottom-5 lg:top-auto">
			<em>ISAAC SUNG</em>
		</h2>

		<div
			class="absolute left-[50%] bottom-4 -ml-[150px] w-[300px] bg-background px-4 py-1 border-border border-x-8 border-y-2 text-center"
		>
			<h4>isaac-sung.com</h4>
		</div>
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
