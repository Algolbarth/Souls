<script>
	import Icon from './Icon.svelte';
	import View from '../Inventory/View.svelte';

	export let page;
	export let inventory;
	export let equipments;

	let view = undefined;
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
{#if inventory.get('Médaille') != undefined}
	{inventory.get('Médaille').number}
{:else}
	0
{/if}
Médailles
<br />
<br />
<Icon item={"Parchemin"} bind:inventory value={10} bind:view />

{#if view != undefined}
	<View bind:item={view} />
{/if}