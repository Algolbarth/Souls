<script>
	export let character;
</script>

{character.name}
{#each Array(character.rank) as _}
    *
{/each}
Nv {character.level}