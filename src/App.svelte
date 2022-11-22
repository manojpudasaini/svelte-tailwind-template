<script>
  import Splash from "./components/splash.svelte";
  import Signin from "./components/signin.svelte";
  import Search from "./components/search.svelte";
  import { Router, Route } from "svelte-navigator";
  import Signup from "./components/signup.svelte";
  import { onMount } from "svelte";
  import { miniAppInitializer } from "./miniAppInitializer";
  import Food from "./pages/food.svelte";
  import Home from "./pages/home.svelte";
  import PrivateRoute from "./utils/PrivateRoute.svelte";
  import { Circle3 } from "svelte-loading-spinners";
  let fetchuser;
  let pageReady = false;
  const handleInit = () => {
    miniAppInitializer()
      ?.then((user) => {
        if (user.user_profile) {
          console.log(user, "user in app ");
          fetchuser = user.user_profile;
        }
        pageReady = true;
      })
      .catch((e) => {
        console.log(e);
        pageReady = true;
      });
  };
  onMount(() => {
    handleInit();
  });
</script>

<main class="font-poppins max-w-screen-xl  w-full mx-auto ">
  {#if pageReady}
    <!-- {#if fetchuser} -->
    <Router>
      <Route exact path="/" component={Splash} />
      <Route path="/login" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/home" let:location>
        <Home user={fetchuser} />
      </PrivateRoute>
      <PrivateRoute path="/search" let:location>
        <Search />
      </PrivateRoute>
      <!-- <Route path="/food/:id" let:params>
      <Food user={fetchuser} />
    </Route> -->
      <PrivateRoute path="/food/:id" let:params>
        <Food user={fetchuser} />
      </PrivateRoute>
    </Router>
    <!-- {/if} -->
  {:else}
    <div class="flex items-center justify-center mx-auto h-[80vh]">
      <Circle3 size="60" unit="px" duration="1s" />
    </div>
  {/if}
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
