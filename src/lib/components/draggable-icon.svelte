<script lang="ts">
	import { onMount } from 'svelte';

	function drag_start(event) {
		var style = window.getComputedStyle(event.target, null);

		event.dataTransfer.setData(
			'text/plain',
			parseInt(style.getPropertyValue('left'), 10) -
				event.clientX +
				',' +
				(parseInt(style.getPropertyValue('top'), 10) - event.clientY)
		);
	}

	function drag_over(event) {
		event.preventDefault();
		return false;
	}

	function drop(event) {
		var offset = event.dataTransfer.getData('text/plain').split(',');
		var dm = document.getElementById('dragme');

		dm.style.left = event.clientX + parseInt(offset[0], 10) + 'px';
		dm.style.top = event.clientY + parseInt(offset[1], 10) + 'px';
		event.preventDefault();
		return false;
	}

	onMount(() => {
		document.body.addEventListener('dragover', drag_over, false);
		document.body.addEventListener('drop', drop, false);
	});
</script>

<aside draggable="true" id="dragme" on:dragstart={drag_start}>P1</aside>

<style lang="postcss">
	aside {
		position: absolute;
		margin: auto;
		left: 100px;
		top: 15px; /* set these so Chrome doesn't return 'auto' from getComputedStyle */
		z-index: 20;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: theme(colors.primary);
		border-radius: 100%;
		border: 2px solid theme(colors.white);
		width: 64px;
		height: 64px;
		user-select: none;

		&:hover {
			cursor: pointer;
		}
	}
</style>
