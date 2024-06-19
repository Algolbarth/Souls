<script>
	import Icon from './Icon.svelte';
	import View from './View.svelte';

	export let page;
	export let characters;
	export let equipments;
	export let inventory;

	let view = undefined;
	let spell_index = 0;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{#each characters.list as character}
	<button
		on:click={() => {
			spell_index = 0;
			view = character;
		}}><Icon bind:character /></button
	>
	<br />
{/each}

{#if view != undefined}
	<View bind:character={view} bind:characters bind:equipments bind:inventory bind:spell_index />
{/if}
