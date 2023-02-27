<template>
  <header class="sticky top-0 left-0 h-16 flex
              bg-white dark:bg-gray-900">
    <my-btn tooltip="Plane">
      <CIcon :icon="cilAirplaneMode" size="lg" />
    </my-btn>
   
    <h1 class="header-text ">Podcast Therapy</h1>
  </header>
</template>

<script>
import MenuButton from './MenuButton.vue'
import { CIcon } from '@coreui/icons-vue';
import { cilAirplaneMode, cilAlbum, cilAnimal } from '@coreui/icons';
export default {
  name: "App",
  components: {
    "my-btn": MenuButton,
    CIcon
  },
  setup() {
    return {
      cilAirplaneMode, cilAlbum, cilAnimal
    }
  }
}

</script>