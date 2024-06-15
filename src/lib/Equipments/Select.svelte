<script>
	export let character;
	export let slot;
	export let equipments;
</script>

<div id="body">
	<button
		on:click={() => {
			slot = undefined;
		}}>Fermer</button
	>
	<br />
	<br />
	{#each equipments as equipment}
		{#if equipment.slot == slot}
			<button on:click={() => {
                character.equip(equipment);
                slot = undefined;

				character = character;
            }}>{equipment.name} : Nv {equipment.level}</button>
			<br />
		{/if}
	{/each}
</div>

<style>
	#body {
		padding: 8px;
	}
</style>
