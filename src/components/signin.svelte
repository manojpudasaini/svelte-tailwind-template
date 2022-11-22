<script>
  import Input from "./Input.svelte";
  import { Icon, ArrowRight } from "svelte-hero-icons";
  import GoogleIcon from "../assets/google.png";
  import FacebookIcon from "../assets/facebook.png";
  import { Link, useNavigate, useLocation } from "svelte-navigator";
  const navigate = useNavigate();
  const location = useLocation();
</script>

<div class="bg-white h-[100vh] rounded-3xl max-w-screen-md mx-auto px-8 py-24">
  <div class="flex flex-col text-start">
    <p class="text-2xl font-semibold leading-10">Hello,</p>
    <p class="text-xl leading-8 text-[#121212]">Welcome Back!</p>
  </div>
  <div class="mt-14 flex flex-col gap-5">
    <Input type="email" label="Email" name="email" placeholder="Enter Email" />
    <Input
      type="password"
      label="Enter Password"
      name="password"
      placeholder="Enter Password"
    />
  </div>
  <div class="mt-5 flex flex-col items-start justify-center gap-7">
    <button class="bg-none text-yellow-500 text-xs ">Forgot Password</button>
    <button
      class="flex flex-row items-center justify-center gap-3 px-[50px] py-[15px] bg-emerald-600 rounded-xl w-full text-white font-semibold"
      ><span>Sign In</span>
      <Icon src={ArrowRight} class="w-[13.33px] h-[11.67px]" />
    </button>
  </div>
  <div
    class="flex items-center gap-2 text-gray-400 text-sm justify-center mt-5"
  >
    <div class="w-16 h-[2px] bg-gray-300 " />
    <p>Or Sign in With</p>
    <div class="w-16 h-[2px] bg-gray-300 " />
  </div>
  <div class=" flex items-center justify-center gap-6 mt-5">
    <button
      on:click={() =>
        window.miniapp.login("google").then((data) => {
          console.log(data, "daytaaa");
          if (data?.user_profile) {
            navigate("/home", { replace: true });
          }
        })}
      class="shadow-lg flex items-center justify-center w-11 h-11 rounded-2xl"
    >
      <img src={GoogleIcon} alt="google-logo" />
    </button>
    <button
      on:click={() =>
        window.miniapp.login("facebook").then((data) => {
          console.log(data, "daytaaa");
          if (data?.user_profile) {
            navigate("/home", { replace: true });
          }
        })}
      class="shadow-lg flex items-center justify-center w-11 h-11 rounded-2xl"
    >
      <img src={FacebookIcon} alt="facebook-logo" />
    </button>
  </div>
  <p class="text-sm mt-14 text-center">
    Don't have an account? <Link to="/signup">
      <span class="text-amber-500">Sign up</span>
    </Link>
  </p>
</div>
