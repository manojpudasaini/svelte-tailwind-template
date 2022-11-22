<script>
  import ProcedureCard from "./molecules/procedureCard.svelte";

  export let procedureObject;
  $: console.log(procedureObject, "procccc");
</script>

{#if procedureObject}
  <div class="flex flex-col space-y-4">
    {#each procedureObject as item, i}
      <ProcedureCard step={item} {i} />
    {/each}
  </div>
{/if}
