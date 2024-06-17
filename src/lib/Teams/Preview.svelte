<script>
    import Icon from '../Characters/Icon.svelte';
    
	export let page;
	export let teams;
	export let index;
	export let team;
	export let team_active;
	export let team_view;
</script>

<div id="body">
	{#if team != team_active && team.list.length > 0}
		<button
			on:click={() => {
				team_active = team;
			}}>{team.name}</button
		>
	{:else}
		{team.name}
	{/if}
	<button
		on:click={() => {
			team_view = team;
			page = 'Edit';
		}}>Modifier</button
	>
	{#if index != undefined}
		<button
			class="close"
			on:click={() => {
				teams.splice(index, 1);
				teams = teams;
			}}>x</button
		>
	{/if}
	:
	<br />
	{#each team.list as character}
        <Icon bind:character />
		<br />
	{/each}
</div>

<style>
	#body {
		border: 3px black solid;
		padding: 8px;
	}
</style>
