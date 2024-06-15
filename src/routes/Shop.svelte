<script>
	export let page;
	export let inventory;
	export let equipments;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}
>
	Retour
</button>
<br />
<br />
{#if inventory.get('Médaille') != undefined}
	{inventory.get('Médaille').number}
{:else}
	0
{/if}
Médailles
<br />
<br />
1 Parchemin
<button
	on:click={() => {
		if (inventory.get('Médaille') != undefined && inventory.get('Médaille').number >= 10) {
			inventory.remove('Médaille', 10);
			inventory.add('Parchemin', 1);

			inventory = inventory;
		}
	}}>10 Médailles</button
>
<br />
1 Équipement
<button
	on:click={() => {
		if (inventory.get('Médaille') != undefined && inventory.get('Médaille').number >= 2) {
			inventory.remove('Médaille', 2);
			equipments.new();

			inventory = inventory;
		}
	}}>2 Médailles</button
>
