<script>
	import MenuView from './Menu.svelte';
	import ArenaView from './Arena.svelte';
	import TeamsView from './Teams.svelte';
	import BattleView from './Battle.svelte';
	import CharactersView from '../lib/Characters/List.svelte';
	
	import { Characters } from '../lib/Characters/Stockage.js';

	let page = 'Menu';
	let characters = new Characters();
	let teams = [];
	let battle = undefined;

	characters.add('Guerrier');
	characters.add('Loup');

	teams.push([characters.list[0], characters.list[1]]);
</script>

<div id="body">
	{#if page == 'Menu'}
		<MenuView bind:page />
	{:else if page == 'Arena'}
		<ArenaView bind:page bind:battle bind:characters bind:teams />
	{:else if page == 'Teams'}
		<TeamsView bind:page bind:teams />
	{:else if page == 'Battle'}
		<BattleView bind:page bind:battle />
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
