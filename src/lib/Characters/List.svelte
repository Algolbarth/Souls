<script>
	import Icon from './Icon.svelte';
	import View from './View.svelte';
	export let page;
	export let characters = [];

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
	<Icon bind:character bind:view />
{/each}

{#if view != undefined}
	<div id="view">
		<View bind:character={view} />
	</div>
{/if}

<style>
	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		text-align: center;

		background: grey;
	}
</style>
