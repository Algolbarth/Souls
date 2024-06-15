<script>
	import View from '../Equipments/View.svelte';
	import Select from '../Equipments/Select.svelte';

	export let character;
	export let equipments;

	let spell_index = 0;
	$: spell = character.spells[spell_index];

	let view = undefined;
	let slot = undefined;
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
	<br />
	<div id="equipments">
		{#each character.equipments as equipment, i}
			{#if equipment != undefined}
				<button
					on:click={() => {
						view = equipment;
					}}>{equipment.name} Nv {equipment.level}</button
				>
			{:else}
				<button
					on:click={() => {
						slot = i;
					}}>Vide</button
				>
			{/if}
			<br />
		{/each}
	</div>
</div>

{#if view != undefined}
	<div id="view">
		<View bind:equipment={view} bind:equipments bind:character/>
	</div>
{/if}

{#if slot != undefined}
	<div id="select">
		<Select bind:character bind:slot bind:equipments/>
	</div>
{/if}

<style>
	#body {
		padding: 8px;
		text-align: center;
	}

	#stats {
		text-align: left;
	}

	#equipments {
		text-align: left;
	}

	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: grey;
	}

	#select {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;

		background: white;
	}
</style>
