<template>
  <header
    class="h-16 w-full mb-4 px-4 bg-white dark:bg-gray-800 border-b-2 border-white"
  >
    <div class="flex justify-between align-baseline items-center mx-auto md:mx-6">
      <router-link to="/">
        <h1 class="header-text">Подкаст Терапія</h1>
      </router-link>

      <i class="sidebar-icon" @click="() => (openMenu = !openMenu)">
        <CIcon :icon="cilBurger" size="lg" v-if="!openMenu" />
      </i>
    </div>
  </header>

  <section
    v-if="openMenu"
    class="fixed top-0 left-0 w-full h-full dark:bg-gray-700 mb-4 px-6"
  >
    <div class="flex justify-end align-baseline mx-auto md:mx-6">
      <i
        v-if="openMenu"
        class="sidebar-icon"
        @click="() => (openMenu = !openMenu)"
      >
        <CIcon :icon="cilX" size="lg" />
      </i>
    </div>

    <div class="flex flex-col items-center justify-between gap-16 my-10">
      <h3 class="header-text uppercase">Меню</h3>
      <router-link
        v-for="item in menuItems"
        :key="item.link"
        :to="item.link"
        class="router-link"
        @click="() => (openMenu = false)"
        >{{ item.label }}</router-link
      >
    </div>
  </section>
</template>

<script>
import { CIcon } from "@coreui/icons-vue";
import { cilAirplaneMode, cilBurger, cilX } from "@coreui/icons";
export default {
  name: "App",
  components: {
    CIcon,
  },
  data() {
    return {
      openMenu: false,
      menuItems: [
        {
          label: "Домівка",
          link: "/",
        },
        {
          label: "Пошук",
          link: "/search",
        },
        {
          label: "Відео",
          link: "/videos",
        },
        {
          label: "Книги",
          link: "/books",
        },
      ],
    };
  },
  setup() {
    return {
      cilAirplaneMode,
      cilBurger,
      cilX,
    };
  },
};
</script>
