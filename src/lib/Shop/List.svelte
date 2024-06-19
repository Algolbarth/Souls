<script>
	import Icon from './Icon.svelte';
	import View from '../Inventory/View.svelte';

	export let page;
	export let inventory;

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
{#if inventory.get('Crédit') != undefined}
	{inventory.get('Crédit').number}
{:else}
	0
{/if}
Crédits
<br />
{#if inventory.get('Médaille') != undefined}
	{inventory.get('Médaille').number}
{:else}
	0
{/if}
Médailles
<br />
<br />
<Icon bind:inventory bind:view item={"Débris"} number={10} value={250} />
<Icon bind:inventory bind:view item={"Parchemin"} money="Médaille" value={10} />

{#if view != undefined}
	<View bind:item={view} />
{/if}