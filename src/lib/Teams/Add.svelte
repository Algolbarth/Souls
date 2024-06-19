<script>
	import Icon from '../Characters/Icon.svelte';

	export let add;
	export let team;
	export let teams;
	export let team_active;
	export let characters;
	export let view;
	export let spell_index;
</script>

<div id="window">
	<div id="body">
		<button
			on:click={() => {
				view = undefined;
				add = false;
			}}>Annuler</button
		>
		<br />
		<br />
		{#each characters.list as character}
			<button
				on:click={() => {
					spell_index = 0;
					view = character;
				}}><Icon bind:character /></button
			>
			{#if team.list.includes(character)}
				<div id="already_in_team">
					Utilisé
				</div>
			{:else}
				<button
					on:click={() => {
						team.list.push(character);

						team = team;
						team_active = team_active;
						teams = teams;

						view = undefined;
						add = false;
					}}>Ajouter</button
				>
			{/if}
			<br />
		{/each}
	</div>
</div>

<style>
	#window {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;

		background: white;
	}

	#body {
		padding: 8px;
	}
	
	#already_in_team {
		display: inline-block;
		color: red;
	}
</style>