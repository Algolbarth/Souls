<script>
	import View from '../Characters/View.svelte';

	export let equipment;
	export let equipments;
	export let character = undefined;
	export let inventory = undefined;

	let view = undefined;
</script>

<div id="window">
	<div id="body">
		<button
			class="classic"
			on:click={() => {
				equipment = undefined;
			}}>Fermer</button
		>
		<br />
		<br />
		{equipment.name} Nv {equipment.level}
		<br />
		{#each Array(equipment.rank) as _}
			*
		{/each}
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
				class="classic"
				on:click={() => {
					equipment.bearer.unequip(equipment.slot);
					equipment = undefined;

					character = character;
				}}>Enlever</button
			>
			<br />
			<br />
		{:else}
			<button
				class="classic"
				on:click={() => {
					inventory.add('Débris', equipment.level);
					equipments.remove(equipment);

					equipment = undefined;
					equipments = equipments;
				}}>Vendre</button
			>
		{/if}
		<div id="stats">
			{equipment.stats[0].name} : {equipment.stats[0].value}
			<br />
			<br />
			{#each Array(equipment.rank) as _, i}
				{equipment.stats[i + 1].name} : {equipment.stats[i + 1].value}
				<br />
			{/each}
		</div>
	</div>
</div>

{#if view != undefined}
	<View bind:character={view} bind:equipments bind:inventory />
{/if}

<style>
	#window {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: darkgray;
	}

	#body {
		padding: 8px;
		text-align: center;
	}

	#stats {
		text-align: left;
	}
</style>
