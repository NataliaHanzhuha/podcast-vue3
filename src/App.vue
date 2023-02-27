<template>
<div class="flex flex-col min-h-screen bg-white-200 dark:bg-gray-800">
  <my-header></my-header>
  <my-content></my-content>
  <my-footer></my-footer>
</div>
  <!-- <div
    class="bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <iframe
      width="100%"
      height="315"
      :src="getVideoUrl()"
      :title="item?.title"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>

  <div
    class="bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    v-for="item in videos"
    :key="item?.title"
  >
    <img :src="item?.thumbnails?.standard?.url" alt="" />
    <h3
      class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
    >
      {{ item?.title }}
    </h3>

    <div>
      <details>
        <summary
          class="text-slate-800 dark:text-white mt-4 text-base font-medium tracking-tight"
        >
          Timecodes
        </summary>
        <ul>
          <li
            v-for="timecode in item?.timecodes"
            :key="timecode?.time"
            class="text-slate-500 dark:text-slate-400 mt-2 text-sm capitalize"
          >
            <a @click="getTimecode(timecode)">
              {{ timecode?.time }} - {{ timecode?.description }}
            </a>
          </li>
        </ul>
      </details>
    </div>
  </div> -->
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";
// import { db } from "./firebase";
// import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
export default {
  name: "App",
  data() {
    return {
      videos: [],
      selectedTimecode: "",
    };
  },
  components: {
    "my-header": Header,
    "my-footer": Footer,
    "my-content": Content,
  },
  methods: {
    // getTimecode(timecode) {
    //   this.selectedTimecode = timecode.embadedUrl;
    // },
    // getVideoUrl() {
    //   return this.selectedTimecode
    //     ? this.selectedTimecode + ";controls=0;autoplay=1"
    //     : "https://www.youtube.com/embed/" +
    //         this.videos[0]?.snippet?.resourceId?.videoId +
    //         "?controls=0;autoplay=1";
    // },
  },
  async mounted() {
    // const ref = collection(db, "videos");
    // const q = query(ref, orderBy("snippet.publishedAt", "desc"), limit(4));
    // const data = await getDocs(q);

    // data.forEach((doc) => {
    //   this.videos.push(doc.data().snippet);
    // });
  },
};
</script>
