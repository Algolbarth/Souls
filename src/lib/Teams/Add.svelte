<script>
	export let page;
	export let team;
	export let characters;
</script>

<button
	on:click={() => {
		page = 'Edit';
	}}>Annuler</button
>
<br />
<br />
{#each characters.list as character}
	{#if team.list.includes(character)}
		{character.name}
	{:else}
		<button on:click={() => {
            team.list.push(character);
            page = "Edit";
        }}>{character.name}</button>
	{/if}
    <br/>
{/each}
