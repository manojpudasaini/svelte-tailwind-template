<script>
  export let type = "text";
  export let label;
  export let name;
  export let placeholder;
</script>

<div class="flex flex-col gap-1">
  <label class="text-sm text-gray-700 font-normal" for={name}>{label}</label>
  <input
    {type}
    {name}
    {placeholder}
    class=" border-[1.5px] border-gray-300 rounded-xl h-14 active:border-gray-300 active: outline-none text-gray-600 text-sm leading-5 px-5"
  />
</div>
