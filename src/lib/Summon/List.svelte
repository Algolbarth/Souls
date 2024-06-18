<script>
	import View from './View.svelte';

	export let page;
	export let characters;
	export let inventory;
	export let equipments;

	let view = undefined;
	let last_item = undefined;

	let summon = function (name) {
		let list = inventory.get(name).list;
		let random = list[parseInt(Math.random() * list.length)];

		view = characters.get(random, 1);
		characters.list.push(view);

		inventory.remove(name, 1);
		last_item = name;
		inventory = inventory;
	};
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
{#if inventory.get('Parchemin') != undefined}
	{inventory.get('Parchemin').number}
	x
	<button
		on:click={() => {
			summon('Parchemin');
		}}>Parchemin</button
	>
{/if}

{#if view != undefined}
	<View bind:page bind:character={view} bind:item={last_item} bind:inventory bind:equipments bind:summon />
{/if}