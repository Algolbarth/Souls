<script>
	export let view;
</script>

<div id="body">
	<button
		on:click={() => {
			view = undefined;
		}}>Fermer</button
	>
	<br />
	<br />
	{view.name}
	<br />
	<br />
	Quantité : {view.number}
</div>

<style>
	#body {
		padding: 8px;
		text-align: center;
		background: darkgray;
	}
</style>
