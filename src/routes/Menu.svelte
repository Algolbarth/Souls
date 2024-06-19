<script>
	export let page;
</script>

<button
	on:click={() => {
		page = 'Explore';
	}}>Explorer</button
>
<br />
<button
	on:click={() => {
		page = 'Arena';
	}}>Arène</button
>
<br />
<br />
<button
	on:click={() => {
		page = 'Teams';
	}}>Équipes</button
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
<br />
<button
	on:click={() => {
		page = 'Summon';
	}}>Invocations</button
>
<br />
<button
	on:click={() => {
		page = 'Forge';
	}}>Forge</button
>
<br />
<br />
<button
	on:click={() => {
		page = 'Shop';
	}}>Boutique</button
>