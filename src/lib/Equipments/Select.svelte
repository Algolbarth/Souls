<script>
	import Icon from './Icon.svelte';
	import View from './View.svelte';

	export let character;
	export let slot;
	export let equipments;
	export let inventory;

	$: list = function () {
		let array = [];

		for (const equipment of equipments.list) {
			if (equipment.bearer == undefined && equipment.slot == slot) {
				array.push(equipment);
			}
		}

		return array;
	};

	let view = undefined;
</script>

<div id="window">
	<div id="body">
		<button
			on:click={() => {
				slot = undefined;
			}}>Fermer</button
		>
		<br />
		<br />
		{#if list().length > 0}
			{list().length} équipements disponibles
			<br />
			<br />
			{#each list() as equipment}
				<button
					on:click={() => {
						view = equipment;
					}}
				>
					<Icon bind:equipment />
				</button>
				<button
					on:click={() => {
						character.equip(equipment);
						slot = undefined;
	
						character = character;
					}}
				>
					Équiper
				</button>
				<br />
			{/each}
		{:else}
			Aucun équipement disponible
		{/if}
	</div>
</div>

{#if view != undefined}
	<View bind:equipment={view} bind:equipments bind:inventory />
{/if}

<style>
	#window {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;

		background: white;
	}

	#body {
		padding: 8px;
	}
</style>
