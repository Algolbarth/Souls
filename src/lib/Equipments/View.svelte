<script>
	import View from '../Characters/View.svelte';

	export let equipment;
	export let equipments;

	let view = undefined;
</script>

<div id="body">
	<button
		on:click={() => {
			equipment = undefined;
		}}>Fermer</button
	>
	<br />
	<br />
	{equipment.name} Nv {equipment.level}
	<br />
	<br />
	{#if equipment.bearer != undefined}
		Équipé sur
		<button
			on:click={() => {
				view = equipment.bearer;
			}}>{equipment.bearer.name}</button
		>
		<button
			on:click={() => {
				equipment.bearer.unequip(equipment.slot);
				equipment = undefined;
			}}>Enlever</button
		>
		<br />
		<br />
	{/if}
	<div id="stats">
		{equipment.stat.name} : {equipment.stat.value}
	</div>
</div>

{#if view != undefined}
	<div id="view">
		<View bind:character={view} bind:equipments />
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

	#view {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: grey;
	}
</style>
