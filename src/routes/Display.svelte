<script>
    export let character;
</script>

<div id="body">
    {character.name}
    <br/>
    {character.get_stat("Vie").current} / {character.get_stat("Vie").value()} PV
    <br/>
    {character.get_stat("Bouclier").current} / {character.get_stat("Bouclier").value()} PB
    <br/>
    {character.get_stat("Énergie").current} / {character.get_stat("Énergie").value()} PE
    <br/>
    {character.atb} % ATB
</div>

<style>
    #body {
        border:solid;
        padding:1%;
    }
</style>