<script>
  import { Icon, LocationMarker } from "svelte-hero-icons";
  import Avatar from "../assets/creator.png";
</script>

<div class="flex items-center justify-between">
  <div class="flex items-center space-x-2">
    <div class="w-12 h-12 rounded-full p-1">
      <img src={Avatar} alt="chef-avatar" class="rounded-full" />
    </div>
    <div class="flex flex-col items-start justify-start">
      <p class="font-semibold text-gray-700">Laura Wilson</p>
      <div class="flex items-center">
        <Icon src={LocationMarker} solid class="text-emerald-600 h-6 w-6" />
        <p class="text-gray-500 text-sm">Lagos, Nigeria</p>
      </div>
    </div>
  </div>
  <button
    class="text-white font-semibold text-sm bg-emerald-600 rounded-lg px-5 py-2"
    >Follow</button
  >
</div>
