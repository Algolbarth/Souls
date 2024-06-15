<script>
	export let page;
	export let characters;
	export let inventory;

	let view = undefined;
	let last_item = undefined;

	let summon = function (name) {
		let list = inventory.get(name).list;
		let random = list[parseInt(Math.random() * list.length)];

		view = characters.get(random, 1);
		characters.list.push(view);

		inventory.remove(name, 1);
		last_item = name;
		inventory = inventory;
	};
</script>

{#if view == undefined}
	<button
		on:click={() => {
			page = 'Menu';
		}}
	>
		Retour
	</button>
	<br />
	<br />
	{#if inventory.get('Parchemin') != undefined}
		{inventory.get('Parchemin').number}
		x
		<button
			on:click={() => {
				summon('Parchemin');
			}}>Parchemin</button
		>
	{/if}
{:else}
	<button
		on:click={() => {
			view = undefined;
		}}
	>
		Fermer
	</button>
	<br />
	<br />
	{view.name}
	<br />
	<br />
	{#if inventory.get(last_item) != undefined}
		{inventory.get(last_item).number}
		x
		<button
			on:click={() => {
				summon(last_item);
			}}
		>
			{last_item}
		</button>
	{/if}
	<button
		on:click={() => {
			page = 'Characters';
		}}
	>
		Voir les personnages
	</button>
{/if}
