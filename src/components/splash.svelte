<script>
  import Background from "../assets/background.png";
  import Chef from "../assets/chef.png";
  import { Icon, ArrowRight } from "svelte-hero-icons";
  import { Link } from "svelte-navigator";
</script>

<div class="relative text-white">
  <img
    src={Background}
    alt="background"
    class="object-cover bg-no-repeat bg-white"
  />
  <div
    class="absolute top-[104px] left-[83px] flex flex-col items-center gap-[14px]"
  >
    <img src={Chef} alt="chef" />
    <p class=" text-lg font-semibold text-center">100K+ Premium Recipe</p>
  </div>
  <div
    class="absolute top-[446px] left-[50px] text-center flex flex-col items-center gap-[20px] w-[275px]"
  >
    <p class="text-[50px] font-semibold leading-[120%]">Get Cooking</p>
    <p class="text-base leading-4 font-normal">
      Simple way to find Tasty Recipe
    </p>
  </div>
  <div class="absolute top-[674px] left-[66px]">
    <Link to="/login">
      <button
        class="flex items-center justify-center gap-2 px-[50px] py-[15px] bg-green-600 rounded-xl"
        ><span class="text-base font-semibold">Start Cooking</span>
        <Icon src={ArrowRight} class="w-[13.33px] h-[11.67px]" /></button
      >
    </Link>
  </div>
</div>
