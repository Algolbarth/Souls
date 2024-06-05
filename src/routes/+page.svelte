<script>
	import MenuView from './Menu.svelte';
	import ArenaView from './Arena.svelte';
	import BattleView from './Battle.svelte';
	import CharactersView from '../lib/Characters/List.svelte';
	import { Characters } from '../lib/Characters/Stockage.js';

	let page = 'Menu';
	let characters = new Characters();
	let teams = [];
	let battle = undefined;

	characters.add('Loup');

	teams.push([characters.list[0]]);
</script>

{#if page == 'Menu'}
	<MenuView bind:page />
{:else if page == 'Arena'}
	<ArenaView bind:page bind:battle bind:characters bind:teams />
{:else if page == 'Battle'}
	<BattleView bind:page bind:battle />
{:else if page == 'Characters'}
	<CharactersView bind:page bind:characters={characters.list} />
{/if}
