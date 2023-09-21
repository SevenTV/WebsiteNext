import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { defineAsyncPage } from "@seventv/util-vue/modules/router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: defineAsyncPage(() => import("@/views/Home.vue")),
	},
	{
		path: "/legal/terms",
		component: defineAsyncPage(() => import("@/views/legal/LegalTerms.vue")),
	},
	{
		path: "/legal/privacy",
		component: defineAsyncPage(() => import("@/views/legal/LegalPrivacy.vue")),
	},
	{
		path: "/:pathMatch(.*)",
		name: "404",
		component: defineAsyncPage(() => import("@/views/404.vue")),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
