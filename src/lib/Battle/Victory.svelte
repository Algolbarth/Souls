<script>
    export let page;
    export let battle;
    export let ranking;
    export let inventory;
    export let equipments;
</script>

<button
    on:click={() => {
        inventory, equipments, ranking = battle.rewards(inventory, equipments, ranking);
        page = 'Menu';
    }}>Victoire</button
>