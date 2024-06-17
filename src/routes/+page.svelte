<script>
	import MenuView from './Menu.svelte';
	import ArenaView from './Arena.svelte';
	import TeamsView from '../lib/Teams/List.svelte';
	import EditView from '../lib/Teams/Edit.svelte';
	import AddView from '../lib/Teams/Add.svelte';
	import BattleView from '../lib/Battle/Main.svelte';
	import CharactersView from '../lib/Characters/List.svelte';
	import ShopView from './Shop.svelte';
	import InventoryView from '../lib/Inventory/List.svelte';
	import SummonView from './Summon.svelte';
	import EquipmentsView from '../lib/Equipments/List.svelte';

	import { Characters } from '../lib/Characters/Stockage.js';
	import { Inventory } from '../lib/Inventory/Stockage.js';
	import { Equipments } from '../lib/Equipments/Stockage.js';

	let page = 'Menu';
	let battle = undefined;
	let ranking = 0;

	let characters = new Characters();
	characters.add('Guerrier');
	characters.add('Loup');

	let teams = [];
	teams.push({ name: 'Équipe', list: [characters.list[0], characters.list[1]] });
	let team_active = teams[0];
	let team_view = undefined;

	let inventory = new Inventory();
	inventory.add('Parchemin', 3);

	let equipments = new Equipments();
	equipments.new();
</script>

<div id="body">
	{#if page == 'Menu'}
		<MenuView bind:page />
	{:else if page == 'Arena'}
		<ArenaView bind:page bind:battle bind:characters bind:teams bind:ranking bind:inventory />
	{:else if page == 'Teams'}
		<TeamsView bind:page bind:teams bind:team_active bind:team_view />
	{:else if page == 'Edit'}
		<EditView bind:page bind:team={team_view} />
	{:else if page == 'Add'}
		<AddView bind:page bind:team={team_view} bind:characters />
	{:else if page == 'Battle'}
		<BattleView bind:page bind:battle bind:ranking bind:inventory />
	{:else if page == 'Character'}
		<CharactersView bind:page bind:characters={characters.list} bind:equipments={equipments.list} />
	{:else if page == 'Equipment'}
		<EquipmentsView bind:page bind:equipments />
	{:else if page == 'Inventory'}
		<InventoryView bind:page bind:inventory />
	{:else if page == 'Shop'}
		<ShopView bind:page bind:inventory bind:equipments />
	{:else if page == 'Summon'}
		<SummonView bind:page bind:inventory bind:characters />
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
