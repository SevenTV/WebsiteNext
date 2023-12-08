<template>
	<ErrorPage user-action="back" :message="$t('view.error404.message')" />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";
import ErrorPage from "@/components/error/ErrorPage.vue";

const i18n = useI18n();

useHead({
	title: i18n.t("view.error404.title"),
});
</script>
