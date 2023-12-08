import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import i18n from "@/i18n";
import router from "@/router";

const app = createApp(App);

app.use(i18n);
app.use(router);

app.use(
	createHead({
		titleTemplate: (title) => (title ? `${title} - 7TV` : "7TV"),
	}),
);

app.mount("#app");
