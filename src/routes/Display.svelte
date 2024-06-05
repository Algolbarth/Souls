<script>
	export let character;
	export let spell;
	export let next = function () {};
</script>

<div id="body">
	{#if spell != undefined && spell.select(character)}
		<button
			on:click={() => {
				spell.use(character);
				spell = undefined;
				next();
			}}>{character.name}</button
		>
	{:else}
		{character.name}
	{/if}
	<br />
	{character.current} / {character.get_stat('Vie').value()} PV
	<br />
	{character.get_stat('Bouclier').current} / {character.get_stat('Bouclier').value()} PB
	<br />
	{character.get_stat('Énergie').current} / {character.get_stat('Énergie').value()} PE
	<br />
	{character.atb} % ATB
</div>

<style>
	#body {
		border: solid;
		padding: 1%;
	}
</style>
