<script>
    export let equipment;
</script>

{equipment.name}
{#each Array(equipment.rank) as _}
    *
{/each}
Nv {equipment.level}