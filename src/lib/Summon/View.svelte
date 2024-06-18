<script>
	import Icon from '../Characters/Icon.svelte';
	import View from '../Characters/View.svelte';

	export let page;
	export let character;
	export let item;
	export let inventory;
	export let equipments;
	export let summon;

	let view = undefined;
	let spell_index = 0;
</script>

<div id="window">
	<div id="body">
		<button
			class="classic"
			on:click={() => {
				character = undefined;
			}}
		>
			Fermer
		</button>
		<br />
		<br />
		<button
			on:click={() => {
				view = character;
			}}
		>
			<Icon bind:character />
		</button>
		<br />
		<br />
		<button
			class="classic"
			on:click={() => {
				page = 'Character';
			}}
		>
			Voir les personnages
		</button>
		<br />
		<br />
		{#if inventory.get(item) != undefined}
			{inventory.get(item).number}
			x
			<button
				on:click={() => {
					summon(item);
				}}
			>
				{item}
			</button>
		{/if}
	</div>
</div>

{#if view != undefined}
	<View bind:character={view} bind:spell_index bind:equipments />
{/if}

<style>
	#window {
		position: fixed;
		width: 50vw;
		height: 90vh;
		left: 25vw;
		top: 5vh;

		background: darkgray;
	}

	#body {
		padding: 8px;
		text-align: center;
	}
</style>
