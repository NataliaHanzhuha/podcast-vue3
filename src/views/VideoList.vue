<template>
  <div v-if="loading">Завантаження ...</div>

  <div class="video-wrapper">
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
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="video-wrapper" v-for="item in videos" :key="item?.title">
        <img
          :src="item?.thumbnails?.high?.url"
          :srcset="getSrcSet(item?.thumbnails)"
          @click="() => getTimecode(item?.timecodes[0])"
        />
        <h3 class="video-title">
          {{ item?.title }}
        </h3>

        <div>
          <details>
            <summary
              class="text-gray-800 dark:text-white mt-4 text-base font-medium tracking-tight"
            >
              Часові віхи
            </summary>
            <ul>
              <li
                v-for="timecode in item?.timecodes"
                :key="timecode?.time"
                class="cursor-pointer text-gray-500 dark:text-gray-400 mt-2 text-sm capitalize"
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
      class="uppercase text-lg m-2 lg:m-6 p-4 lg:p-6 border-gray-300 border-2 rounded-md flex-1 w-full"
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
