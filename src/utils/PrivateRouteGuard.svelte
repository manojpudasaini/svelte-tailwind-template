<script>
  import { onMount } from "svelte";
  import { useNavigate, useLocation } from "svelte-navigator";
  const navigate = useNavigate();
  const location = useLocation();
  let token;
  const fetchToken = () => {
    token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login", {
        state: { from: $location.pathname },
        replace: true,
      });
    }
  };

  onMount(() => fetchToken());
</script>

{#if token}
  <slot />
{/if}
