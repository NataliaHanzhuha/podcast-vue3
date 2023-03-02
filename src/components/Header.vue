<template>
  <header
    class="h-16 w-full mb-4 px-4 bg-white dark:bg-gray-800 border-b-2 border-white"
  >
    <div class="flex justify-between align-baseline mx-auto md:mx-6">
      <router-link to="/" class="sidebar-icon group">
        <CIcon :icon="cilAirplaneMode" size="lg" />
      </router-link>

      <h1 class="header-text">Podcast Therapy</h1>

      <router-link
        to="/search"
        class="text-sm text-gray-700 dark:text-gray-200 self-center"
        >Search</router-link
      >
    </div>
  </header>
</template>

<script>
import { CIcon } from "@coreui/icons-vue";
import { cilAirplaneMode } from "@coreui/icons";
export default {
  name: "App",
  components: {
    CIcon,
  },
  setup() {
    return {
      cilAirplaneMode,
    };
  },
};
</script>
