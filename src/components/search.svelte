<script>
  import { onMount } from "svelte";
  import { Icon, ArrowLeft, Search, Adjustments } from "svelte-hero-icons";
  import FoodList from "./foodList.svelte";
  import { navigate } from "svelte-navigator";
  import { Circle3 } from "svelte-loading-spinners";
  let foods = [];
  let loading = false;
  let searchText;
  let category = [];
  let catName;
  $: console.log(category, "cat");
  $: foodLength = foods?.length;
  const fetchFoods = async (searchText) => {
    loading = true;
    const response = await fetch(
      searchText
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        : "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let resp = await response.json();
    if (resp?.meals) {
      foods = resp?.meals;
    } else {
      foods = [];
    }
    loading = false;
  };
  onMount(() => {
    fetchFoods(searchText);
    fetchCategory();
  });

  const fetchCategory = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    let resp = await response?.json();
    if (resp?.meals) {
      category = resp?.meals;
    }
  };
  const fetchByCategory = async (categoryName) => {
    loading = true;
    catName = categoryName;
    let foodArray = [];
    console.log(categoryName, "cat name");
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    let resp = await response.json();
    if (resp?.meals) {
      let meals = resp?.meals;
      console.log(meals, "category meals");

      for (var i = 0; i < meals?.length; i++) {
        const resp = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals[i]?.idMeal}`
        );
        let f = await resp?.json();
        let ff = f.meals[0];
        foodArray.push(ff);
      }
      foods = foodArray;
    } else {
      foods = [];
    }
    loading = false;
  };
</script>

<div class="flex flex-col justify-center gap-10  mx-auto  py-8">
  <div class="flex items-center gap-6 w-full  mx-auto">
    <div
      class="text-gray-500  border-2 border-gray-300 h-10 flex items-center rounded-lg flex-1"
    >
      <Icon src={Search} class="w-5 h-5 ml-5" />
      <input
        type="text"
        bind:value={searchText}
        on:input={() => fetchFoods(searchText)}
        id="search-text"
        name="search-text"
        placeholder="Search recipe"
        class="h-full w-full outline-none border-none bg-transparent px-4 py-2 active:bg-white focus:bg-white"
      />
    </div>
    <button class="w-10 h-10 bg-emerald-500 text-white rounded-lg p-1">
      <Icon src={Adjustments} class="rotate-90" />
    </button>
  </div>
  <div class="flex overflow-x-scroll no-scrollbar space-x-2 ">
    <button
      class="bg-emerald-600 py-2 px-5 rounded-lg text-xs text-white font-semibold outline-none border-none"
      on:click={() => fetchFoods()}
    >
      All
    </button>
    {#if category.length > 0}
      {#each category as cat}
        <button
          class="bg-emerald-600 py-2 px-5 rounded-lg text-xs text-white font-semibold outline-none border-none "
          on:click={() => fetchByCategory(cat?.strCategory)}
        >
          {cat?.strCategory}
        </button>
      {/each}
    {/if}
  </div>
  <div class=" flex flex-col gap-4">
    <div class="space-y-5">
      {#if loading}
        <div class="h-[40vh] w-full flex items-center justify-center">
          <Circle3 size="60" unit="px" duration="1s" />
        </div>
      {:else if foods}
        {#if searchText}
          <div class=" text-gray-500  flex items-center justify-between">
            <p class="font-semibold text-2xl">Search Result</p>
            <p class="font-normal text-xs">{foodLength}{" "}results</p>
          </div>
        {/if}
        <FoodList {foods} />
      {:else}
        <p class="text-xl font-bold text-red-500 text-center mt-2">
          Not Found !
        </p>
      {/if}
    </div>
  </div>
</div>
