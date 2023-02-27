import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";
import { VueFire, VueFireAuth } from "vuefire";

import { CIcon } from "@coreui/icons-vue";
import * as icons from "@coreui/icons";
import "./assets/tailwind.css";
// import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.provide("icons", icons);
app.component("CIcon", CIcon);

app.mount("#app");
