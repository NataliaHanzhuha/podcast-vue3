<template>
  <h2
    class="uppercase text-3xl font-semibold tracking-wide mb-4 lg:mb-8 text-center"
  >
    Книги
  </h2>

  <div v-if="loading">Завантаження ...</div>

  <div
    v-for="(book, idx) in books"
    :key="idx"
    class="text-lg text-gray-700 dark:text-gray-300 p-2 lg:p-4"
  >
    <span class="uppercase">{{ book.author }} - </span>
    <a :href="book.url" class="italic cursor-pointer">{{ book.title }}</a>
  </div>
</template>

<script>
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

export default {
  name: "SearchPage",
  data() {
    return {
      books: [],
      loading: true,
    };
  },
  methods: {
    setBooks(data) {
      data.forEach((doc) => {
        this.books.push(doc.data());
      });

      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    const first = query(collection(db, "books"));
    const data = await getDocs(first);

    this.setBooks(data);
  },
};
</script>
