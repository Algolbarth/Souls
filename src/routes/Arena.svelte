<script>
	import { new_battle } from '../lib/Battle/Battle.js';

	export let page;
	export let battle;
	export let characters;
	export let teams;
	export let ranking;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}>Retour</button
>
<br />
<br />
{ranking} Points
<br />
<br />
<button
	on:click={() => {
		battle = new_battle(characters, teams);
		battle.rewards = function (inventory, equipments, ranking) {
			ranking += 5;
        	inventory.add('Médaille', 3);

			return inventory, equipments, ranking;
		};
		page = 'Battle';
	}}>Combattre</button
>
