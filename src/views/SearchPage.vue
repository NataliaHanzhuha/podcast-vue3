<template>
  <div v-if="loading">Loading ...</div>

  <div class="video-wrapper">
    <iframe
      width="100%"
      height="315"
      :src="getVideoUrl()"
      :title="item?.title"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div v-if="!loading">
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <div class="video-wrapper" v-for="item in videos" :key="item?.title">
        {{ getSrcSet(item?.thumbnails) }}
        <img
          :src="item?.thumbnails?.high?.url"
          :srcset="getSrcSet(item?.thumbnails)"
          @click="() => getTimecode(item.timecodes[0])"
        />
        <h3 class="video-title">
          {{ item?.title }}
        </h3>

        <div>
          <details>
            <summary
              class="text-gray-800 dark:text-white mt-4 text-base font-medium tracking-tight"
            >
              Timecodes
            </summary>
            <ul>
              <li
                v-for="timecode in item?.timecodes"
                :key="timecode?.time"
                class="text-gray-500 dark:text-gray-400 mt-2 text-sm capitalize"
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
  </div>
</template>

<script>
import { db } from "../firebase";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
export default {
  name: "SearchPage",
  data() {
    return {
      videos: [],
      selectedTimecode: "",
      loading: true,
    };
  },
  methods: {
    getSrcSet(thumbnails) {
      console.log(thumbnails, 
      Object.values(thumbnails).map((item) => `${item.url} w${item.width}`).join(', '))
    },
    getTimecode(timecode) {
      this.selectedTimecode = timecode.embadedUrl;
    },
    getVideoUrl() {
      return this.selectedTimecode
        ? this.selectedTimecode + ";autoplay=1;controls=0"
        : "https://www.youtube.com/embed/" +
            this.videos[0]?.snippet?.resourceId?.videoId +
            "?autoplay=1;controls=0";
    },
  },
  async mounted() {
    const ref = collection(db, "videos");
    const q = query(ref, orderBy("snippet.publishedAt", "desc"), limit(4));
    const data = await getDocs(q);

    data.forEach((doc) => {
      this.videos.push(doc.data().snippet);
    });

    console.log(this.videos);
    this.loading = false;
  },
};
</script>
