<script>
  export let ingredient;
  //   $: console.log(ingredient, "card");
</script>

{#if ingredient?.name && ingredient?.quantity}
  <div
    class="w-full h-20 bg-gray-50 py-2 rounded-lg flex justify-between items-center px-4 "
  >
    <div class="flex items-center space-x-4">
      <div class="h-14 w-14 bg-white p-2 rounded-md drop-shadow-sm">
        <img
          src={ingredient?.image}
          alt="ingredient-pic"
          class="rounded-md object-cover h-10 w-10"
        />
      </div>
      <p class="font-semibold text-base">{ingredient?.name}</p>
    </div>
    <p class="font-normal text-sm text-right text-gray-500">
      {ingredient?.quantity}
    </p>
  </div>
{/if}
