<script>
	export let character;
	export let spell;
	export let active;
	export let message;

	$: alive = character.alive();
	$: can_be_target = alive && spell != undefined && spell.select(character);
</script>

<div id="body" class={(active == character ? 'yellow' : '') + ' ' + (can_be_target ? 'green' : '')}>
	{#if can_be_target}
		<button
			on:click={() => {
				active.atb = 0;
				message = spell.use(character);
				spell = undefined;
				
				character = character;
			}}>{character.name}</button
		>
	{:else}
		{character.name}
	{/if}
	<br />
	{#if alive}
		{character.get_stat('Vie').current} / {character.get_stat('Vie').value()} PV
		<br />
		{#if character.get_stat('Bouclier').current > 0 || character.get_stat('Bouclier').value() > 0}
			{character.get_stat('Bouclier').current}
			{#if character.get_stat('Bouclier').value() > 0}
				/ {character.get_stat('Bouclier').value()}
			{/if}
			PB
			<br />
		{/if}
		{character.get_stat('Énergie').current} / {character.get_stat('Énergie').value()} PE
		<br />
		{character.atb} % PI
	{:else}
		Mort
	{/if}
</div>

<style>
	#body {
		border: 3px solid black;
		padding: 8px;
	}

	#body.yellow {
		border-color: goldenrod;
	}

	#body.green {
		border-color: green;
	}
</style>
