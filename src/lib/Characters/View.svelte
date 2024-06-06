<script>
	export let character;
</script>

<div id="body">
	<button
		on:click={() => {
			character = undefined;
		}}>Fermer</button
	>
	<br />
	<br />
	{character.name} Nv {character.level}
	<br />
	<br />
	{#each character.spells as spell}
		{spell.name}
		<br />
	{/each}
	<br />
	<div id="stats">
		{#each character.stats as stat}
			{stat.name} : {stat.value()}
			<br />
		{/each}
	</div>
</div>

<style>
	#body {
		padding: 1%;
	}

	#stats {
		text-align: left;
	}
</style>
