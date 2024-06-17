<script>
	import Icon from './Icon.svelte';
	import View from './View.svelte';

	export let page;
	export let characters = [];
	export let equipments = [];

	let view = undefined;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{#each characters as character}
	<button
		on:click={() => {
			view = character;
		}}><Icon bind:character /></button
	>
	<br />
{/each}

{#if view != undefined}
	<div id="view">
		<View bind:character={view} bind:equipments />
	</div>
{/if}

<style>
	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: darkgray;
	}
</style>
