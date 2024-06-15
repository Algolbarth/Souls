<script>
	import ItemView from './View.svelte';
	export let page;
	export let inventory;

	let view = undefined;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{#each inventory.list as item}
	{item.number} x
	<button on:click={() => {
		view = item;
	}}>{item.name}</button>
	<br />
{/each}

{#if view != undefined}
	<div id="view">
		<ItemView bind:view />
	</div>
{/if}

<style>
	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;
	}
</style>