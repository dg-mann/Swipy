import { createApp } from "vue";
import App from "./App.vue";

import viewportFix from "./global-js/viewportFix";
import "./assets/scss/main.scss";

viewportFix();

createApp(App).mount("#app");
