<template>
  <input
    type="text"
    v-model.trim="search"
    placeholder="Введи імя часової віхи"
    class="text-xl text-gray-800 dark:text-gray-200 bg-gray-700 dark:bg-gray-600 p-4 my-6 rounded-lg w-full"
  />

  <div v-if="sugestedTimecodes.length" class="my-4">
    <div
      v-for="timecode in sugestedTimecodes"
      :key="timecode.url"
      @click="() => getTimecode(timecode)"
      class="text-lg leading-4 hover:underline my-2 py-2 cursor-pointer"
      v-html="highlightText(timecode.description)"
    ></div>
  </div>

  <div v-if="loading">Завантаження ...</div>

  <div class="video-wrapper flex-col">
    <div class="flex justify-between items-center">
      <h3 v-if="!!selectedTimecode?.description">
        {{ selectedTimecode.description }}
      </h3>
      <p v-if="!loading" class="dark:text-gray-500">
        Натисни Play для відтворення відео
      </p>
    </div>

    <iframe
      width="100%"
      height="400"
      :src="getVideoUrl()"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";
export default {
  name: "SearchPage",
  data() {
    return {
      videos: [],
      selectedTimecode: "",
      loading: true,
      limit: 4,
      lastVisible: null,
      timecodes: [],
      search: "",
      sugestedTimecodes: [],
    };
  },
  methods: {
    highlightText(text) {
      return text.replace(
        new RegExp(this.search, "gi"),
        `<span class="highlight">${this.search}</span>`
      );
    },
    getTimecode(timecode) {
      this.selectedTimecode = timecode;
      this.search = "";
    },
    getVideoUrl() {
      return this.selectedTimecode.embadedUrl
        ? this.selectedTimecode.embadedUrl + ";autoplay=1"
        : "https://www.youtube.com/embed/" +
            this.videos[0]?.snippet?.resourceId?.videoId +
            "?autoplay=1";
    },
    async getTimecodes() {
      const getTimecode = query(collection(db, "videos"));

      const timecodesData = await getDocs(getTimecode);

      timecodesData.forEach((doc) => {
        this.timecodes.push(...doc.data().snippet.timecodes);
      });

      this.loading = false;
    },
  },
  async mounted() {
    await this.getTimecodes();
  },
  watch: {
    search(newSearch) {
      if (!newSearch.trim().length) {
        this.sugestedTimecodes = [];
      } else {
        this.sugestedTimecodes = this.timecodes
          .filter((item) =>
            item.description.toLowerCase().includes(newSearch.toLowerCase())
          )
          .slice(0, 10);
      }
    },
  },
};
</script>
