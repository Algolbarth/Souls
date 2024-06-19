<script>
	import View from '../Inventory/View.svelte';

	export let page;
	export let inventory;
	export let equipments;

	let view = undefined;
	let level = 1;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}
>
	Retour
</button>
<br />
<br />
{#if inventory.get('Débris') != undefined}
	{inventory.get('Débris').number}
{:else}
	0
{/if}
Débris
<br />
<br />
Niveau <input type="number" min="1" bind:value={level} />
<br />
<br />
Équipement aléatoire :
<button
	on:click={() => {
		if (inventory.get('Débris') != undefined && inventory.get('Débris').number >= 2 * level) {
			inventory.remove('Débris', 2 * level);
			equipments.new(level);

			inventory = inventory;
		}
	}}>{2 * level} Débris</button
>

{#if view != undefined}
	<View bind:item={view} />
{/if}
