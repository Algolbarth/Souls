<script>
	import MenuView from './Menu.svelte';
	import ArenaView from './Arena.svelte';
	import TeamsView from '../lib/Teams/List.svelte';
	import EditView from '../lib/Teams/Edit.svelte';
	import AddView from '../lib/Teams/Add.svelte';
	import BattleView from '../lib/Battle/Main.svelte';
	import CharactersView from '../lib/Characters/List.svelte';
	
	import { Characters } from '../lib/Characters/Stockage.js';

	let page = 'Menu';
	let characters = new Characters();
	let teams = [];
	let battle = undefined;
	let medals = 0;
	let ranking = 0;

	characters.add('Guerrier');
	characters.add('Loup');

	teams.push({name : "Équipe", list : [characters.list[0], characters.list[1]]});
	let team_active = teams[0];
	let team_view = undefined;
</script>

<div id="body">
	{#if page == 'Menu'}
		<MenuView bind:page />
	{:else if page == 'Arena'}
		<ArenaView bind:page bind:battle bind:characters bind:teams bind:ranking bind:medals />
	{:else if page == 'Teams'}
		<TeamsView bind:page bind:teams bind:team_active bind:team_view />
	{:else if page == 'Edit'}
		<EditView bind:page bind:team={team_view} />
	{:else if page == 'Add'}
		<AddView bind:page bind:team={team_view} bind:characters />
	{:else if page == 'Battle'}
		<BattleView bind:page bind:battle bind:ranking bind:medals />
	{:else if page == 'Characters'}
		<CharactersView bind:page bind:characters={characters.list} />
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
	}
</style>
