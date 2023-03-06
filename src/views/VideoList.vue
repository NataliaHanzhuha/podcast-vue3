<template>
  <div v-if="loading">Завантаження ...</div>

  <div class="video-wrapper flex-col">
    <p v-if="!loading">Натисни Play для відтворення відео</p>
    <iframe
      width="100%"
      height="400"
      :src="getVideoUrl()"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div v-if="videos.length || !loading">
    <div class="grid grid-cols-1 gap-4">
      <div class="video-wrapper" v-for="item in videos" :key="item?.title">
        <img
          :src="item?.thumbnails?.high?.url"
          :srcset="getSrcSet(item?.thumbnails)"
          class="cursor-pointer"
          @click="() => getTimecode(item?.timecodes[0])"
        />

        <div class="video-description">
          <h3 class="video-title">
            {{ getTitle(item?.title) }}
          </h3>

          <details>
            <summary>
              <span>Часові віхи</span>
              <span class="arrow">&#8594;</span>
            </summary>
            <ul>
              <li
                v-for="timecode in item?.timecodes"
                :key="timecode?.time"
                class="cursor-pointer text-gray-500 dark:text-gray-400 mt-2 text-sm capitalize cursor-pointer hover:underline"
              >
                <a @click="() => getTimecode(timecode)">
                  {{ timecode?.time }} - {{ timecode?.description }}
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
    <button
      @click="() => loadMore()"
      class="uppercase text-lg my-2 lg:my-6 p-4 lg:p-6 border-gray-300 border-2 rounded-sm flex-1 w-full"
    >
      Завантажити більше
    </button>
  </div>
</template>

<script>
import { db } from "../firebase";
import {
  collection,
  getDocs,
  orderBy,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
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
    };
  },
  methods: {
    getTitle(title) {
      return title.slice(0, title.indexOf("|"));
    },
    getSrcSet(thumbnails) {
      return Object.values(thumbnails)
        .map((item) => `${item.url} w${item.width}`)
        .join(", ");
    },
    getTimecode(timecode) {
      this.selectedTimecode = timecode.embadedUrl;
      console.log(this.selectedTimecode);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getVideoUrl() {
      return this.selectedTimecode
        ? this.selectedTimecode + ";autoplay=1"
        : "https://www.youtube.com/embed/" +
            this.videos[0]?.snippet?.resourceId?.videoId +
            "?autoplay=1";
    },
    async loadMore() {
      this.loading = true;

      const next = query(
        collection(db, "videos"),
        orderBy("snippet.publishedAt", "desc"),
        startAfter(this.lastVisible),
        limit(this.limit)
      );

      const data = await getDocs(next);
      this.setVideos(data);
    },
    setVideos(data) {
      this.lastVisible = data.docs[data.docs.length - 1];

      data.forEach((doc) => {
        this.videos.push(doc.data().snippet);
      });

      this.loading = false;
    },
  },
  async mounted() {
    const first = query(
      collection(db, "videos"),
      orderBy("snippet.publishedAt", "desc"),
      limit(this.limit)
    );
    const data = await getDocs(first);

    this.setVideos(data);
  },
};
</script>
