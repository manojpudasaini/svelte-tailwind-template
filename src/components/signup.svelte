<script>
  import { ArrowRight, Icon } from "svelte-hero-icons";
  import Input from "./Input.svelte";
  import GoogleIcon from "../assets/google.png";
  import FacebookIcon from "../assets/facebook.png";
  import { Link } from "svelte-navigator";
</script>

<div class="pt-14 px-8">
  <p class="text-xl font-semibold leading-8">Create and account</p>
  <p class="text-xs leading-4 text-gray-600">
    Let's help you set up your account,<br />it won't take long
  </p>
  <div class="flex flex-col space-y-6 mt-8">
    <Input name="name" label="Name" type="text" placeholder="Enter Name" />
    <Input name="email" label="Email" type="email" placeholder="Enter Email" />
    <Input
      name="password"
      label="Password"
      type="text"
      placeholder="Password"
    />
    <Input
      name="confirmPassword"
      label="Confirm Password"
      type="text"
      placeholder="Retype Password"
    />
    <div class="flex items-center pl-2 space-x-2">
      <input type="checkbox" class="accent-amber-500" />
      <p class="text-sm text-amber-500">Accept terms & Condition</p>
    </div>
    <button
      class="flex flex-row items-center justify-center gap-3 px-[50px] py-[15px] bg-emerald-600 rounded-xl w-full text-white font-semibold"
      ><span>Sign Up</span>
      <Icon src={ArrowRight} class="w-[13.33px] h-[11.67px]" />
    </button>
    <div
      class="flex items-center gap-2 text-gray-400 text-sm justify-center mt-5"
    >
      <div class="w-16 h-[2px] bg-gray-300 " />
      <p>Or Sign in With</p>
      <div class="w-16 h-[2px] bg-gray-300 " />
    </div>
    <div class=" flex items-center justify-center gap-6 mt-5">
      <button
        class="shadow-lg flex items-center justify-center w-11 h-11 rounded-2xl"
      >
        <img src={GoogleIcon} alt="google-logo" />
      </button>
      <button
        class="shadow-lg flex items-center justify-center w-11 h-11 rounded-2xl"
      >
        <img src={FacebookIcon} alt="facebook-logo" />
      </button>
    </div>
    <p class="text-xs font-medium leading-4 text-center">
      Already a member? <Link to="/login">
        <span class="text-amber-500">Sign In</span>
      </Link>
    </p>
  </div>
</div>
