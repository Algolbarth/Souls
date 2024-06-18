<script>
	import Icon from './Icon.svelte';
	import View from './View.svelte';

	export let page;
	export let characters;
	export let equipments;

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
{#each characters as character}
	<button
		on:click={() => {
			spell_index = 0;
			view = character;
		}}><Icon bind:character /></button
	>
	<br />
{/each}

{#if view != undefined}
	<View bind:character={view} bind:equipments bind:spell_index />
{/if}
