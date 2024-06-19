<script>
	import { new_battle } from '../lib/Battle/Battle.js';

	export let page;
	export let battle;
	export let characters;
	export let teams;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
<button
	on:click={() => {
		battle = new_battle(characters, teams);
		battle.rewards = function (inventory, equipments, ranking) {
			inventory.add("Crédit", 1000);

			return inventory, equipments, ranking;
		};
		page = 'Battle';
	}}>Combattre</button
>