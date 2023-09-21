import { type InjectionKey, type Ref, computed, ref } from "vue";
import { createInjectionComposable } from "@seventv/util-vue/modules/composable";

export interface GlobalLoadingState {
	loadingKeys: Ref<Set<string | symbol>>;
	isLoading: Ref<boolean>;
}

export const GLOBAL_LOADING_STATE_KEY: InjectionKey<GlobalLoadingState> = Symbol("composable.useGlobalLoadingState");

export default createInjectionComposable(GLOBAL_LOADING_STATE_KEY, () => {
	const loadingKeys = ref<Set<string | symbol>>(new Set());
	const isLoading = computed(() => loadingKeys.value.size > 0);

	return {
		loadingKeys,
		isLoading,
	};
});
