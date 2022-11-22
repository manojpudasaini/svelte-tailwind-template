<script>
  export let step;
  export let i;
</script>

{#if step}
  <div
    class="w-full bg-gray-50 py-2 rounded-lg flex justify-between items-center px-4 text-sm font-normal text-gray-500 "
  >
    <div class="flex flex-col items-start justify-start">
      <p class=" text-start text-gray-800 font-medium pt-2">
        Step {i + 1}
      </p>
      <p class="text-start pt-1">{step}</p>
    </div>
  </div>
{/if}
