<template>
  <div
    class="flex flex-col min-h-screen bg-white-200 dark:bg-gray-800 min-h-screen container mx-auto"
  >
    <my-header></my-header>
    <main className="content-container">
      <div class="container mx-auto px-4 py-8">
        <router-view></router-view>
      </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "my-header": Header,
    "my-footer": Footer,
  },
};
</script>
