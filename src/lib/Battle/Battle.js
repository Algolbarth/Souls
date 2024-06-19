export function new_battle(characters, teams) {
    let battle = {
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

    return battle;
}