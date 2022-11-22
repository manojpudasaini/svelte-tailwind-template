<script>
  import { Icon, Star } from "svelte-hero-icons";
  import { Link } from "svelte-navigator";
  export let food;
  $: id = food?.idMeal;
</script>

<Link to={`/food/${id}`}>
  <div class="relative  ">
    <img
      src={food?.strMealThumb}
      loading="lazy"
      alt="food"
      class="object-cover rounded-lg"
    />
    <div
      class="w-full h-full bg-gradient-to-t from-black absolute top-0 left-0 opacity-50 rounded-lg"
    />
    <div
      class="bg-yellow-200 flex items-center  rounded-2xl py-1 px-2 absolute top-2 right-2 gap-1"
    >
      <Icon src={Star} solid class="text-amber-500 h-3 w-3" />
      <p class="text-[10px]">4.0</p>
    </div>
    <div
      class="text-white absolute bottom-2 px-2 flex flex-col gap-1 subpixel-antialiased bg-black bg-clip-text"
    >
      <p class="text-sm font-semibold leading-3 ">
        {food?.strMeal}
      </p>
      <p class="text-[10px] font-normal leading-3">By Chef {food?.strArea}</p>
    </div>
  </div>
</Link>
