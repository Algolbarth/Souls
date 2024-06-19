<script>
	import Preview from './Preview.svelte';
	import View from '../Characters/View.svelte';
	import Edit from './Edit.svelte';
	import Add from './Add.svelte';
	
	export let page;
	export let teams;
	export let team_active;
	export let characters;
	export let equipments;
	export let inventory;

	let view = undefined;
	let spell_index = 0;

	let team_view = undefined;
	let add = false;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
<Preview
	bind:teams
	index={undefined}
	bind:team={team_active}
	bind:team_active
	bind:team_view
	bind:view
	bind:spell_index
/>
<br />
{#each teams as t, index}
	{#if t != team_active}
		<Preview bind:teams {index} bind:team={t} bind:team_active bind:team_view bind:view bind:spell_index />
		<br />
	{/if}
{/each}
<button
	class="add"
	on:click={() => {
		view = undefined;
		teams.push({ name: 'Équipe', list: [] });
		teams = teams;
	}}>+</button
>

{#if team_view != undefined}
	<Edit bind:team={team_view} bind:teams bind:team_active bind:add bind:view bind:spell_index />
{/if}

{#if add}
	<Add bind:add bind:team={team_view} bind:teams bind:team_active bind:characters bind:view bind:spell_index />
{/if}

{#if view != undefined}
	<View bind:character={view} bind:characters bind:equipments bind:inventory bind:spell_index />
{/if}