<script>
	import Icon from '../Characters/Icon.svelte';

	export let page;
	export let team;
</script>

<button
	on:click={() => {
		page = 'Teams';
	}}>Retour</button
>
<br />
<br />
<div id="body">
	{team.name}
	<br />
	{#each team.list as character, i}
		<Icon bind:character />
		<button
			class="close"
			on:click={() => {
				team.list.splice(i, 1);
				team = team;
			}}>x</button
		>
		<br />
	{/each}
	<br/>
	{#if team.list.length < 5}
		<button
			class="add"
			on:click={() => {
				page = 'Add';
			}}>+</button
		>
	{/if}
</div>

<style>
	#body {
		border: solid 3px black;
		padding: 8px;
	}
</style>