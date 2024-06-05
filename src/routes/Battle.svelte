<script>
	import Display from './Display.svelte';
	export let page;
	export let battle;

	$: isFinish = function () {
		return false;
	};

	$: isVictory = function () {
		return true;
	};

	let turn = undefined;
	let select = undefined;
	let message = undefined;

	function next() {
		let priority = undefined;

		for (const camp of [battle.player, battle.bot]) {
			for (const character of camp.list) {
				character.atb += character.get_stat('Vitesse').value() / 100;
				if (character.atb >= 100 && (priority == undefined || priority.atb < character.atb)) {
					priority = character;
				}
			}
		}

		if (priority == undefined) {
			select = undefined;
			next();
		} else {
			turn = priority;

			if (turn.autoplay) {
				let target = turn.owner.adversary.list[0];
				target.get_stat('Vie').current -= turn.get_stat('Dégâts').value();

				message = turn.name + ' attaque ' + target.name;

				turn.atb = 0;
			}
		}
	}

	next();
</script>

{#if !isFinish()}
	<div id="container">
		<div>
			{#each battle.player.list as character}
				<Display bind:character />
			{/each}
		</div>
		<div>
			{#each battle.bot.list as character}
				<Display bind:character />
			{/each}
		</div>
	</div>

	<div id="message">
		{#if turn.autoplay}
			{message}
		{:else}
			{#each turn.spells as spell}
				{#if spell == select}
					<button
						on:click={() => {
							select = spell;
						}}>{spell.name}</button
					>
				{:else}
					<button
						on:click={() => {
							select = spell;
						}}>{spell.name}</button
					>
				{/if}
				<br />
			{/each}

			{#if select != undefined}
				{select.name}
				<br />
				<svelte:component this={select.description} bind:spell={select} />
			{/if}
		{/if}
	</div>
{:else if isVictory()}
	<button
		on:click={() => {
			page = 'Arena';
		}}>Victoire</button
	>
{:else}
	<button
		on:click={() => {
			page = 'Arena';
		}}>Défaite</button
	>
{/if}

<style>
	#container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	#message {
		border: solid;
		padding: 1%;
	}
</style>
