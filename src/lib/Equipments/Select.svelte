<script>
	import Icon from './Icon.svelte';

	export let character;
	export let slot;
	export let equipments;

	$: list = function () {
		let array = [];

		for (const equipment of equipments) {
			if (equipment.bearer == undefined && equipment.slot == slot) {
				array.push(equipment);
			}
		}

		return array;
	};
</script>

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
					character.equip(equipment);
					slot = undefined;

					character = character;
				}}
			>
				<Icon bind:equipment />
			</button>
			<br />
		{/each}
	{:else}
		Aucun équipement disponible
	{/if}
</div>

<style>
	#body {
		padding: 8px;
	}
</style>
