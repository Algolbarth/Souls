<script>
	export let character;
	export let view;
</script>

<button
	on:click={() => {
		view = character;
	}}>{character.name} Nv {character.level}</button
>
<br />
