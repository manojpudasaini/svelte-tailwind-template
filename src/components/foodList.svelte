<script>
  import FoodCard from "./molecules/foodCard.svelte";
  export let foods = [];
  $: console.log(foods, "foods");
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4">
  {#each foods as food}
    <FoodCard {food} />
  {/each}
</div>
