<script>
	export let page;
	export let team;
</script>

<button
	on:click={() => {
		page = 'Teams';
	}}>Retour</button
>
<br />
<br />
{team.name}
<br />
{#each team.list as character, i}
	{character.name}
	<button
		on:click={() => {
			team.list.splice(i, 1);
            team = team;
		}}>x</button
	>
	<br />
{/each}
{#if team.list.length < 5}
	<button on:click={() => {
		page = 'Add';
	}}>+</button>
{/if}
