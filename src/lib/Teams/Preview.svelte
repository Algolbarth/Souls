<script>
	import Icon from '../Characters/Icon.svelte';

	export let teams;
	export let index;
	export let team;
	export let team_active;
	export let team_view;
	export let view;
	export let spell_index;
</script>

<div id="body">
	{#if team != team_active && team.list.length > 0}
		<button
			on:click={() => {
				view = undefined;
				team_active = team;
			}}>{team.name}</button
		>
	{:else}
		{team.name}
	{/if}
	<button
		on:click={() => {
			view = undefined;
			team_view = team;
		}}>Modifier</button
	>
	{#if index != undefined}
		<button
			class="close"
			on:click={() => {
				view = undefined;
				teams.splice(index, 1);
				
				teams = teams;
			}}>x</button
		>
	{/if}
	:
	<br />
	{#each team.list as character}
		<button
			on:click={() => {
				spell_index = 0;
				view = character;
			}}><Icon bind:character /></button
		>
		<br />
	{/each}
</div>

<style>
	#body {
		border: 3px black solid;
		padding: 8px;
	}
</style>
