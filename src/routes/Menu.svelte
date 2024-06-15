<script>
	export let page;
</script>

<button
	on:click={() => {
		page = 'Arena';
	}}>Arène</button
>
<br />
<button
	on:click={() => {
		page = 'Character';
	}}>Personnages</button
>
<br />
<button
	on:click={() => {
		page = 'Equipment';
	}}>Équipements</button
>
<br />
<button
	on:click={() => {
		page = 'Inventory';
	}}>Inventaire</button
>
<br />
<button
	on:click={() => {
		page = 'Shop';
	}}>Boutique</button
>
<br />
<button
	on:click={() => {
		page = 'Summon';
	}}>Invocations</button
>