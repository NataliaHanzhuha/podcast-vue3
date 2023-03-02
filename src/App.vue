<template>
  <div
    class="flex flex-col min-h-screen bg-white-200 dark:bg-gray-800 min-h-screen container mx-auto"
  >
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    "my-header": Header,
    "my-footer": Footer,
    "my-content": Content,
  },
};
</script>
