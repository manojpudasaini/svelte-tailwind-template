<script>
  import IngredientCard from "./molecules/ingredientCard.svelte";
  export let ingredient;
  $: console.log(ingredient, "ing");
</script>

{#if ingredient}
  <div class="flex flex-col space-y-2">
    {#each ingredient as item}
      <IngredientCard ingredient={item} />
    {/each}
  </div>
{/if}
