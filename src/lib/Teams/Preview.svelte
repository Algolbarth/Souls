<script>
    export let page;
    export let teams;
    export let index;
    export let team;
    export let select;
</script>

<div id="body">
    {#if team != select}
        <button
            on:click={() => {
                select = team;
            }}>{team.name}</button
        >
    {:else}
        {team.name}
    {/if}
    <button
        on:click={() => {
            select = team;
            page = 'Edit';
        }}>Modifier</button
    >
    {#if index != undefined}
        <button
            on:click={() => {
                teams.splice(index, 1);
                teams = teams;
            }}>x</button
        >
    {/if}
    :
    <br />
    {#each team.list as character}
        {character.name}
        <br />
    {/each}
</div>

<style>
	#body {
		border: 3px black solid;
		padding: 1%;
	}
</style>
