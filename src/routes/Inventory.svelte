<script>
	export let page;
	export let inventory;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{#each inventory as item}
	{item.number} x {item.name}
	<br />
{/each}
