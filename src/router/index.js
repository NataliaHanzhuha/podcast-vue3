import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import BookPage from "@/views/BookPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/videos",
      name: "videos",
      component: SearchPage,
    },
    {
      path: "/books",
      name: "books",
      component: BookPage,
    },
  ],
});

export default router;
