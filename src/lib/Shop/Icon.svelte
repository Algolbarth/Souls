<script>
	export let inventory;
	export let view;
	export let item;
	export let number = 1;
	export let money = "Crédit";
	export let value;
</script>

<div>
	<button
		on:click={() => {
			if (inventory.get(item) != undefined) {
				view = inventory.get(item);
			}
			else {
				view = inventory.new(item, 0);
			}
		}}>{item}</button
	>
	:
	<button
		on:click={() => {
			if (inventory.get(money) != undefined && inventory.get(money).number >= value) {
				inventory.remove(money, value);
				inventory.add(item, number);

				inventory = inventory;
			}
		}}>{value} {money}</button
	>
</div>
