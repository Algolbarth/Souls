<script>
	import Icon from '../Characters/Icon.svelte';

	export let team;
	export let teams;
	export let team_active;
	export let add;
	export let view;
	export let spell_index;
</script>

<div id="window">
	<div id="body">
		<button
			on:click={() => {
				view = undefined;
				team = undefined;
			}}>Retour</button
		>
		<br />
		<br />
		<div id="team">
			{team.name}
			<br />
			{#each team.list as character, i}
				<button
					on:click={() => {
						spell_index = 0;
						view = character;
					}}><Icon bind:character /></button
				>
				<button
					class="close"
					on:click={() => {
						team.list.splice(i, 1);

						team = team;
						team_active = team_active;
						teams = teams;

						view = undefined;
					}}>x</button
				>
				<br />
			{/each}
			<br />
			{#if team.list.length < 5}
				<button
					class="add"
					on:click={() => {
						view = undefined;
						add = true;
					}}>+</button
				>
			{/if}
		</div>
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

	#team {
		border: solid 3px black;
		padding: 8px;
	}
</style>
