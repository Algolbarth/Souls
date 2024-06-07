<script>
	export let page;
	export let medals;
	export let inventory;
</script>

<button
	on:click={() => {
		page = 'Menu';
	}}
>
	Retour
</button>
<br />
<br />
{medals} médailles
<br />
<br />
1 Parchemin
<button
	on:click={() => {
		if (medals >= 10) {
			medals -= 10;
			inventory.push({ name: 'Parchemin', number: 1 });
		}
	}}>10 médailles</button
>
