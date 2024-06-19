<script>
	export let item;
</script>

<div id="window">
	<div id="body">
		<button
			class="classic"
			on:click={() => {
				item = undefined;
			}}>Fermer</button
		>
		<br />
		<br />
		{item.name}
		<br />
		<br />
		Quantité : {item.number}
		<br />
		<br />
		<svelte:component this={item.description} bind:item />
	</div>
</div>

<style>
	#window {
		position: fixed;
		width: 50vw;
		height: 50vh;
		left: 25vw;
		top: 25vh;

		background: darkgray;
	}

	#body {
		padding: 8px;
		text-align: center;
	}
</style>
