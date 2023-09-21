<template>
	<ErrorPage user-action="back" message="Sorry it seems the URL you requested couldn't be found." />
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import ErrorPage from "@/components/error/ErrorPage.vue";

useHead({
	title: "Page Not Found",
});
</script>
