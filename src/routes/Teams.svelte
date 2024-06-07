<script>
	export let page;
	export let teams;
</script>

<button
	on:click={() => {
		page = 'Arena';
	}}>Retour</button
>
<br />
<br />
{#each teams as team}
	{#each team as character}
		{character.name}
		<br />
	{/each}
	<br />
{/each}
