<script>
	import Menu from './Menu.svelte';
	import Arena from './Arena.svelte';
	import Explore from './Explore.svelte';
	import Teams from '../lib/Teams/List.svelte';
	import Battle from '../lib/Battle/Main.svelte';
	import Characters from '../lib/Characters/List.svelte';
	import Shop from '../lib/Shop/List.svelte';
	import Forge from '../lib/Forge/List.svelte';
	import Inventory from '../lib/Inventory/List.svelte';
	import Summon from '../lib/Summon/List.svelte';
	import Equipments from '../lib/Equipments/List.svelte';

	import { Characters as CharactersClass } from '../lib/Characters/Stockage.js';
	import { Inventory as InventoryClass } from '../lib/Inventory/Stockage.js';
	import { Equipments as EquipmentsClass } from '../lib/Equipments/Stockage.js';

	let page = 'Menu';
	let battle = undefined;
	let ranking = 0;

	let characters = new CharactersClass();
	for (const instance of characters.instances) {
		characters.add(instance.name);
	}

	let teams = [];
	teams.push({ name: 'Équipe', list: [characters.list[0], characters.list[1]] });
	let team_active = teams[0];

	let inventory = new InventoryClass();
	inventory.add('Parchemin', 3);

	let equipments = new EquipmentsClass();
	for (let i = 0; i < 6; i++) {
		equipments.new(1, 1, i);
	}
</script>

<div id="body">
	{#if page == 'Menu'}
		<Menu bind:page />
	{:else if page == 'Explore'}
		<Explore bind:page bind:battle bind:characters bind:teams />
	{:else if page == 'Arena'}
		<Arena bind:page bind:battle bind:characters bind:teams bind:ranking />
	{:else if page == 'Teams'}
		<Teams bind:page bind:teams bind:team_active bind:characters bind:equipments bind:inventory />
	{:else if page == 'Battle'}
		<Battle bind:page bind:battle bind:ranking bind:inventory bind:equipments />
	{:else if page == 'Character'}
		<Characters bind:page bind:characters bind:equipments bind:inventory />
	{:else if page == 'Equipment'}
		<Equipments bind:page bind:equipments bind:inventory />
	{:else if page == 'Inventory'}
		<Inventory bind:page bind:inventory />
	{:else if page == 'Shop'}
		<Shop bind:page bind:inventory />
	{:else if page == 'Forge'}
		<Forge bind:page bind:inventory bind:equipments />
	{:else if page == 'Summon'}
		<Summon bind:page bind:inventory bind:characters bind:equipments />
	{/if}
</div>

<style>
	#body {
		font-family: Arial, Helvetica, sans-serif;
	}

	:global(button) {
		border: none;
		background: none;

		font-size: inherit;
		font-family: inherit;

		margin: 0;
		padding: 0;

		cursor: pointer;
	}

	:global(button.classic) {
		background: grey;
		padding: 5px;
		margin: 5px;
	}

	:global(button.close) {
		background: red;
		color: white;

		width: 20px;
		height: 20px;
	}

	:global(button.add) {
		background: blue;
		color: white;

		width: 20px;
		height: 20px;
	}
</style>
