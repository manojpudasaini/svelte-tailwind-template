<script>
  import { onMount } from "svelte";
  import { ArrowLeft, Cake, DotsHorizontal, Icon } from "svelte-hero-icons";
  export let user;
  $: console.log(user, "user in food page");
  import { navigate, useParams } from "svelte-navigator";
  import CreatorProfile from "../components/creatorProfile.svelte";
  import Ingredient from "../components/Ingredient.svelte";
  import Procedure from "../components/Procedure.svelte";
  const params = useParams();
  $: id = $params.id;
  $: console.log($params, id, "params");
  let food;
  let ingredientObject;
  let procedureObject;
  $: ingredientLength = ingredientObject?.length;
  $: procedureLength = procedureObject?.length - 1;
  const fetchMeal = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
    const resp = await response.json();
    food = await resp?.meals[0];
    procedureObject = food?.strInstructions?.split(".");
    ingredientObject = [
      {
        name: food?.strIngredient1,
        quantity: food?.strMeasure1,
        image:
          "https://cdn.pixabay.com/photo/2015/03/07/13/55/tomato-663097_960_720.jpg",
      },
      {
        name: food?.strIngredient2,
        quantity: food?.strMeasure2,
        image:
          "https://cdn.pixabay.com/photo/2022/10/23/12/40/basket-7541194_960_720.jpg",
      },
      {
        name: food?.strIngredient3,
        quantity: food?.strMeasure3,
        image:
          "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg",
      },
      {
        name: food?.strIngredient4,
        quantity: food?.strMeasure4,
        image:
          "https://cdn.pixabay.com/photo/2016/11/22/21/44/cabbage-1850722_960_720.jpg",
      },
      {
        name: food?.strIngredient5,
        quantity: food?.strMeasure5,
        image:
          "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      },
      {
        name: food?.strIngredient6,
        quantity: food?.strMeasure6,
        image:
          "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg",
      },
      {
        name: food?.strIngredient7,
        quantity: food?.strMeasure7,
        image:
          "https://cdn.pixabay.com/photo/2015/03/07/13/55/tomato-663097_960_720.jpg",
      },
      {
        name: food?.strIngredient8,
        quantity: food?.strMeasure8,
        image:
          "https://cdn.pixabay.com/photo/2022/10/23/12/40/basket-7541194_960_720.jpg",
      },
      {
        name: food?.strIngredient9,
        quantity: food?.strMeasure9,
        image:
          "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      },
      {
        name: food?.strIngredient10,
        quantity: food?.strMeasure10,
        image:
          "https://cdn.pixabay.com/photo/2016/11/22/21/44/cabbage-1850722_960_720.jpg",
      },
    ];
  };
  $: console.log(food, "food");
  $: console.log(procedureObject, "proc>><><");
  onMount(() => fetchMeal());
  let showIngredient = true;
  let showProcedure = false;
</script>

<div class="px-8 py-4 space-y-4">
  <div class="flex items-center justify-between">
    <button class="h-8 w-8 text-gray-600" on:click={() => navigate("/home")}>
      <Icon src={ArrowLeft} />
    </button>
    <button class="h-8 w-8 text-gray-600">
      <Icon src={DotsHorizontal} />
    </button>
  </div>
  <div class=" flex flex-col gap-4">
    <img
      src={food?.strMealThumb}
      alt="food-thumb"
      class=" rounded-lg h-40 w-full object-cover"
    />
    <div class="flex items-center justify-between px-2">
      <p class="text-base leading-6 font-semibold w-96 ">
        {food?.strMeal}
      </p>
      <p class="text-sm text-gray-500">{food?.strCategory}</p>
    </div>
    <CreatorProfile />
    <div class={`flex items-center justify-between gap-2 `}>
      <button
        class={`w-1/2 py-2 rounded-xl text-sm font-semibold ${
          showIngredient
            ? "bg-emerald-600 text-white"
            : "bg-white text-emerald-600"
        } transition-all duration-300`}
        on:click={() => (
          (showIngredient = !showIngredient), (showProcedure = !showProcedure)
        )}>Ingredient</button
      >
      <button
        class={`w-1/2  py-2 rounded-xl text-sm font-semibold ${
          showProcedure
            ? "bg-emerald-600 text-white"
            : "bg-white text-emerald-600"
        } transition-all duration-300`}
        on:click={() => (
          (showProcedure = !showProcedure), (showIngredient = !showIngredient)
        )}>Procedure</button
      >
    </div>

    <div>
      {#if showIngredient}
        <div
          class="flex items-center justify-between text-gray-400 text-sm my-4"
        >
          <div class="flex items-center">
            <Icon src={Cake} class="h-5 w-5 " />
            <p class="px-1">1 serve</p>
          </div>
          <p>{ingredientLength} items</p>
        </div>
        <Ingredient ingredient={ingredientObject} />
      {/if}
      {#if showProcedure}
        <div
          class="flex items-center justify-between text-gray-400 text-sm my-4"
        >
          <div class="flex items-center">
            <Icon src={Cake} class="h-5 w-5 " />
            <p class="px-1">1 serve</p>
          </div>
          <p>{procedureLength} steps</p>
        </div>
        <Procedure {procedureObject} />
      {/if}
    </div>
  </div>
</div>
