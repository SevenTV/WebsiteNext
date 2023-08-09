import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router/router";
import "@/index.scss";

const app = createApp(App);

app.use(router);

app.use(createHead());

app.mount("#app");
