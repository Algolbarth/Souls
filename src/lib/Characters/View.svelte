<script>
	export let character;

	let spell_index = 0;
	$: spell = character.spells[spell_index];
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
	{#each character.spells as s, i}
		<button
			on:click={() => {
				spell_index = i;
			}}>{s.name}</button
		>
		<br />
	{/each}
	<svelte:component this={spell.description} bind:spell />
	<br />
	<br />
	<div id="stats">
		{#each character.stats as stat}
			{#if stat.value() > 0}
				{stat.name} : {stat.value()}
				<br />
			{/if}
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
