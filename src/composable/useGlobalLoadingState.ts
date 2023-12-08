import { computed, readonly, ref, watch } from "vue";
import { useTimeoutFn } from "@vueuse/core";
import { createInjectionComposable } from "@seventv/util-vue/modules/composable";

export const GLOBAL_LOADING_STATE_KEY = Symbol("composable.useGlobalLoadingState");

export default createInjectionComposable(GLOBAL_LOADING_STATE_KEY, (options?: StateOptions) => {
	const loadingKeys = ref<Set<string | symbol>>(options?.initialKeys ?? new Set());
	const isLoading = computed(() => loadingKeys.value.size > 0);
	const showLoading = ref(isLoading.value);

	// Only show the loading state to the user if we've been loading for atleast some minimum time
	const showLoadingTask = useTimeoutFn(
		() => {
			showLoading.value = true;
		},
		options?.minTime ?? 150,
		{ immediate: false },
	);

	watch(isLoading, (isLoading) => {
		if (isLoading) {
			if (!showLoadingTask.isPending.value) showLoadingTask.start();
		} else {
			showLoadingTask.stop();

			showLoading.value = false;
		}
	});

	return {
		loadingKeys,
		isLoading,
		showLoading: readonly(showLoading),
	};
});

interface StateOptions {
	initialKeys?: Set<string | symbol>;
	minTime?: number;
}
