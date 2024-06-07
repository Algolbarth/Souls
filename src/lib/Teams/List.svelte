<script>
	import Preview from './Preview.svelte';
	export let page;
	export let teams;
	export let team;
</script>

<button
	on:click={() => {
		page = 'Arena';
	}}>Retour</button
>
<br />
<br />
<Preview bind:page bind:teams index={undefined} bind:team bind:select={team} />
<br/>
{#each teams as t, index}
	{#if t != team}
		<Preview bind:page bind:teams {index} bind:team={t} bind:select={team} />
		<br />
	{/if}
{/each}
<button
	on:click={() => {
		teams.push({ name: 'Équipe', list: [] });
		teams = teams;
	}}>+</button
>