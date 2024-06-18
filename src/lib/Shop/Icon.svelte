<script>
	export let item;
	export let inventory;
	export let value;
	export let view;
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
			if (inventory.get('Médaille') != undefined && inventory.get('Médaille').number >= value) {
				inventory.remove('Médaille', value);
				inventory.add(item, 1);

				inventory = inventory;
			}
		}}>{value} Médailles</button
	>
</div>
