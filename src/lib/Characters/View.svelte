<script>
	import View from '../Equipments/View.svelte';
	import Select from '../Equipments/Select.svelte';
	import Icon from '../Equipments/Icon.svelte';

	export let character;
	export let equipments;

	let spell_index = 0;
	$: spell = character.spells[spell_index];

	let view = undefined;
	let slot = undefined;
</script>

<div id="body">
	<button
		class="classic"
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
			class="classic"
			on:click={() => {
				spell_index = i;
			}}>{s.name}</button
		>
	{/each}
	<br />
	<br />
	<div id="spell">
		<svelte:component this={spell.description} bind:spell />
	</div>
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
					class="equipment"
					on:click={() => {
						view = equipment;
					}}
				>
					<Icon bind:equipment />
				</button>
			{:else}
				<button
					class="equipment"
					on:click={() => {
						slot = i;
					}}>Vide</button
				>
			{/if}
		{/each}
	</div>
</div>

{#if view != undefined}
	<div id="view">
		<View bind:equipment={view} bind:equipments bind:character />
	</div>
{/if}

{#if slot != undefined}
	<div id="select">
		<Select bind:character bind:slot bind:equipments />
	</div>
{/if}

<style>
	#body {
		padding: 8px;
		text-align: center;
	}

	#spell {
		border: solid 2px black;
		padding: 8px;
	}

	#stats {
		text-align: left;
	}

	#equipments {
		text-align: left;

		display:grid;
		grid-template-columns: repeat(3, 1fr);
	}

	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: darkgray;
	}

	#select {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;

		background: white;
	}

	.equipment {
		border: solid black 2px;
		background: lightgray;

		margin: 5px;
		padding: 5px;
	}
</style>
