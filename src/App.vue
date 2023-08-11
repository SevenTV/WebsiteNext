<template>
	<div class="layout-root">
		<NavHeader v-if="showNav" />
		<div class="loading-container" :show="loading">
			<UiLoadingBar class="loading-bar" />
		</div>
		<div class="page-container">
			<RouterView v-slot="{ Component, route }">
				<Suspense @pending="loading = true" @resolve="loading = false">
					<component :is="Component" v-if="Component" :key="getUniqueRouteKey(route)" />
				</Suspense>
			</RouterView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { getUniqueRouteKey } from "./util/router";
import NavHeader from "@/components/NavHeader.vue";
import { UiLoadingBar } from "@seventv/ui";

const router = useRouter();

const showNav = computed(() => {
	const route = router.currentRoute.value;

	if (route.meta.showNavBar === false) {
		return false;
	}

	return true;
});

// Loading state
const loading = ref(false);
</script>

<style lang="scss">
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

.loading-container {
	position: relative;
	height: 0;
	z-index: 1;
	opacity: 0;
	transition: 0.5s opacity;

	&[show="true"] {
		opacity: 1;
	}

	.loading-bar {
		position: absolute;
		width: 100%;
		box-shadow: 0 0 70px 1px rgb(0, 0, 0);
	}
}
</style>
