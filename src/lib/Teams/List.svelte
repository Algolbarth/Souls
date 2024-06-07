<script>
	import Preview from './Preview.svelte';
	export let page;
	export let teams;
	export let team_active;
	export let team_view;
</script>

<button
	on:click={() => {
		page = 'Arena';
	}}>Retour</button
>
<br />
<br />
<Preview bind:page bind:teams index={undefined} bind:team={team_active} bind:team_active bind:team_view />
<br/>
{#each teams as t, index}
	{#if t != team_active}
		<Preview bind:page bind:teams {index} bind:team={t} bind:team_active bind:team_view />
		<br />
	{/if}
{/each}
<button
	on:click={() => {
		teams.push({ name: 'Équipe', list: [] });
		teams = teams;
	}}>+</button
>