<script>
	import Icon from '../Characters/Icon.svelte';

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
		<Icon bind:character />
	{:else}
		<button
			on:click={() => {
				team.list.push(character);
				page = 'Edit';
			}}><Icon bind:character /></button
		>
	{/if}
	<br />
{/each}
