<template>
	<div v-theme-root class="layout-root">
		<NavHeader v-if="showNav" :is-loading="isLoading" />
		<div class="page-container">
			<RouterView v-slot="{ Component, route }">
				<Suspense
					@pending="loadingKeys.add(SUSPENSE_LOADING_KEY)"
					@resolve="loadingKeys.delete(SUSPENSE_LOADING_KEY)"
				>
					<component :is="Component" v-if="Component" :key="getUniqueRouteKey(route)" />
				</Suspense>
			</RouterView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import useGlobalLoadingState from "@/composable/useGlobalLoadingState";
import useLocaleStore from "@/composable/useLocaleStore";
import NavHeader from "@/components/NavHeader.vue";
import { useThemeManager } from "@seventv/theming";
import { getUniqueRouteKey } from "@seventv/util-vue/modules/router";

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
const { loadingKeys, isLoading } = useGlobalLoadingState();
const SUSPENSE_LOADING_KEY = Symbol("app.router-suspense");

const headOverride = useHead({}, { tagPriority: "high" });
if (headOverride) {
	watch(isLoading, (isLoading) => {
		if (isLoading) {
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
	display: flex;
	flex-direction: column;
}

.page-container {
	flex: 1 1 auto;
	overflow: auto;
}
</style>
