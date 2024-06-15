<script>
	export let page;
	export let battle;
	export let characters;
	export let teams;
	export let ranking;
	export let inventory;

	function new_battle() {
		battle = {
			player: {
				list: []
			},
			bot: {
				list: []
			}
		};

		battle.player.adversary = battle.bot;
		battle.bot.adversary = battle.player;

		battle.player.list = teams[0].list;

		battle.bot.list.push(characters.get('Loup'));

		for (const character of battle.player.list) {
			character.owner = battle.player;
			character.can_autoplay = false;
		}

		for (const character of battle.bot.list) {
			character.owner = battle.bot;
			character.can_autoplay = true;
		}

		for (const camp of [battle.player, battle.bot]) {
			for (const character of camp.list) {
				character.atb = 0;

				for (const stat of character.stats) {
					stat.add = 0;
				}

				character.get_stat('Vie').current = character.get_stat('Vie').value();
				character.get_stat('Bouclier').current = character.get_stat('Bouclier').value();
				character.get_stat('Énergie').current = character.get_stat('Énergie').value();
			}
		}
	}
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
{#if inventory.get("Médaille") != undefined}
	{inventory.get("Médaille").number}
{:else}
	0
{/if}
Médailles
<br />
<br />
<button
	on:click={() => {
		new_battle();
		page = 'Battle';
	}}>Combattre</button
>
<br />
<br />
<button
	on:click={() => {
		page = 'Teams';
	}}>Voir les équipes</button
>
