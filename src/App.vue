<template>
	<div v-theme-root class="layout-root">
		<NavHeader v-if="showNav" :is-loading="showLoading" />
		<AsyncRouterView
			class="page"
			@pending="loadingKeys.add(PAGE_LOADING_KEY)"
			@resolve="loadingKeys.delete(PAGE_LOADING_KEY)"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import useGlobalLoadingState from "@/composable/useGlobalLoadingState";
import useLocaleStore from "@/composable/useLocaleStore";
import NavHeader from "@/components/NavHeader.vue";
import { useThemeManager } from "@seventv/theming";
import { AsyncRouterView } from "@seventv/util-vue/modules/router";

// Routing
const router = useRouter();

const showNav = computed(() => {
	const route = router.currentRoute.value;

	if (route.meta.showNavBar === false) {
		return false;
	}

	return true;
});

// Locale
const i18n = useI18n();
useLocaleStore();

// Theming
const themeManager = useThemeManager(true, {
	storage: { type: "localstorage" },
});
const { vThemeRoot } = themeManager.css;

// Loading state
const { loadingKeys, showLoading } = useGlobalLoadingState();
const PAGE_LOADING_KEY = Symbol("app.router-page");

const headOverride = useHead({}, { tagPriority: "high" });
if (headOverride) {
	watchEffect(() => {
		if (showLoading.value) {
			headOverride.patch({
				title: i18n.t("app.loading"),
			});
		} else {
			headOverride.patch({
				title: undefined,
			});
		}
	});
}
</script>

<style scoped lang="scss">
.layout-root {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 4em 2.3fr;
}
</style>
