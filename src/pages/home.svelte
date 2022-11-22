<script>
  import Search from "../components/search.svelte";
  import Avatar from "../assets/avatar.png";
  import { navigate } from "svelte-navigator";
  export let user;
  $: console.log(user, "user in home");
  $: userProfile = localStorage.getItem("mini-app-profile");
  $: profile = userProfile && JSON.parse(userProfile);
</script>

<div class="px-8 py-10">
  <div class="flex items-center justify-between">
    <div class="space-y-1">
      <p class="text-xl font-semibold">
        Hello {profile?.user_profile?.display_name ?? "User"}
      </p>
      <p class="text-gray-700">What are you cooking today?</p>
    </div>
    <button
      on:click={() =>
        window.miniapp
          .logout()
          .then(() => navigate("/login", { replace: true }))}
    >
      <div class="h-10 w-10 rounded-lg bg-amber-300 p-1">
        <img
          src={profile?.user_profile?.photo_url ?? Avatar}
          alt="user-avatar"
          class="rounded-full"
        />
      </div>
    </button>
  </div>
  <Search />
</div>
