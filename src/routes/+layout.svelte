<script>
	import '../app.css';

	const currentYear = new Date().getFullYear();
</script>

<main class="min-h-dvh flex flex-col items-center">
	<header class="bg-blueGray h-[120px] flex items-center px-12 w-full -mb-3">
		<h1>ISAAC SUNG</h1>
	</header>

	<slot />

	<footer class="bg-blueGray h-[75px] mt-auto flex items-center px-12 w-full">
		<p>© {currentYear} Isaac Sung. All rights reserved.</p>
	</footer>
</main>
