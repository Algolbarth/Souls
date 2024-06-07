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
		page = 'Characters';
	}}>Personnages</button
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