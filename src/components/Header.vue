<template>
  <header class="h-16 w-full m-4
  bg-white dark:bg-gray-800 border-b-2 border-white">

  <div class="flex justify-between align-baseline 
              mx-auto md:mx-6">
    <i class="sidebar-icon group">
      <CIcon :icon="cilAirplaneMode" size="lg" />
    </i>

    <h1 class="header-text">Podcast Therapy</h1>
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
