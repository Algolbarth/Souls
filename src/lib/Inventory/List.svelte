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
	<ItemView bind:item={view} />
{/if}