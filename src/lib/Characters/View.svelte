<script>
	export let character;
</script>

<div id="body">
	<button
		on:click={() => {
			character = undefined;
		}}>Retour</button
	>
	<br />
	<br />
	{character.name} Nv {character.level}
	<br />
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
		padding:1%;
	}

	#stats {
		text-align: left;
	}
</style>
