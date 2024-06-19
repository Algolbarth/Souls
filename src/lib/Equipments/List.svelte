<script>
	import View from './View.svelte';
	import Icon from './Icon.svelte';

	export let page;
	export let equipments;
	export let inventory;

	let view = undefined;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{#each equipments.list as equipment}
	<button
		on:click={() => {
			view = equipment;
		}}
	>
		<Icon bind:equipment />
	</button>
	<br />
{/each}

{#if view != undefined}
	<View bind:equipment={view} bind:equipments bind:inventory/>
{/if}
