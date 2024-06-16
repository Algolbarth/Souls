<script>
	import View from './View.svelte';
	import Icon from './Icon.svelte';

	export let page;
	export let equipments;

	let view = undefined;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{#each equipments.list as equipment}
	<button
		on:click={() => {
			view = equipment;
		}}
	>
		<Icon bind:equipment />
	</button>
	<br />
{/each}

{#if view != undefined}
	<div id="view">
		<View bind:equipment={view} bind:equipments />
	</div>
{/if}

<style>
	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: grey;
	}
</style>
