<script>
	import Display from './Display.svelte';
	import Victory from './Victory.svelte';

	export let page;
	export let battle;
	export let ranking;
	export let inventory;
	export let equipments;

	$: isDefeat = function () {
		for (const character of battle.player.list) {
			if (character.alive()) {
				return false;
			}
		}
		return true;
	};

	$: isVictory = function () {
		for (const character of battle.bot.list) {
			if (character.alive()) {
				return false;
			}
		}
		return true;
	};

	let active = undefined;
	let spell = undefined;
	let message = undefined;

	function next() {
		active = undefined;

		for (const camp of [battle.player, battle.bot]) {
			for (const character of camp.list) {
				if (
					character.alive() &&
					character.atb >= 100 &&
					(active == undefined || active.atb < character.atb)
				) {
					active = character;
				}
			}
		}

		if (active == undefined) {
			for (const camp of [battle.player, battle.bot]) {
				for (const character of camp.list) {
					if (character.alive()) {
						character.atb += character.get_stat('Vitesse').value() / 100;
						character.atb = parseFloat(character.atb.toFixed(2));
					}
				}
			}

			next();
		} else if (active.can_autoplay) {
			active.atb = 0;

			let target = active.owner.adversary.list[0];
			message = active.get_spell('Griffe').use(target);

			battle = battle;
		}
	}

	next();
</script>

{#if !isVictory() && !isDefeat()}
	<div id="container">
		<div>
			{#each battle.player.list as character}
				<Display bind:character bind:spell bind:active bind:message />
			{/each}
		</div>
		<div>
			{#each battle.bot.list as character}
				<Display bind:character bind:spell bind:active bind:message />
			{/each}
		</div>
	</div>

	<div id="message">
		{#if message != undefined}
			{message}
			<br />
			<button
				on:click={() => {
					message = undefined;
					next();
				}}>Ok</button
			>
		{:else}
			{#each active.spells as s}
				<button
					on:click={() => {
						spell = s;
					}}>{s.name}</button
				>
				<br />
			{/each}

			{#if spell != undefined}
				<br />
				{spell.name}
				<br />
				<svelte:component this={spell.description} bind:spell />
			{/if}
		{/if}
	</div>
{:else if !isDefeat() && isVictory()}
	<Victory bind:page bind:battle bind:ranking bind:inventory bind:equipments />
{:else}
	<button
		on:click={() => {
			ranking -= 25;
			if (ranking < 0) {
				ranking = 0;
			}
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
		padding: 8px;
	}
</style>
