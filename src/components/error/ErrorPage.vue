<template>
	<div class="error-page">
		<span class="error-symbol">!</span>
		<span>{{ message ?? $t("error.unknown") }}</span>
		<UiButton
			v-if="userAction === 'home' || (userAction === 'back' && !canGoBack())"
			:label="$t('error.action.return_home')"
			@click="onHomeClick"
		/>
		<UiButton v-else-if="userAction === 'back'" :label="$t('error.action.go_back')" @click="onBackClick" />
		<UiButton v-else-if="userAction === 'reload'" :label="$t('error.action.reload_page')" @click="onReloadClick" />
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { UiButton } from "@seventv/ui";

withDefaults(
	defineProps<{
		message?: string;
		userAction?: "reload" | "back" | "home" | "none";
	}>(),
	{
		userAction: "none",
	},
);

const router = useRouter();

function canGoBack() {
	return window.history.length > 1;
}

function onBackClick() {
	router.back();
}

function onHomeClick() {
	router.push("/");
}

function onReloadClick() {
	router.go(0);
}
</script>

<style scoped lang="scss">
.error-page {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.error-page > * {
	margin-bottom: 1rem;
}

.error-symbol {
	font-size: 80px;
	font-weight: 700;
}
</style>
