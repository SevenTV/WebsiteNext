<template>
	<div class="home-page">
		hello world
		<p>
			<router-link to="/legal/terms">TOS</router-link>
		</p>
		<p>
			<router-link to="/legal/privacy">Privacy</router-link>
		</p>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";

const i18n = useI18n();

useHead({
	title: i18n.t("view.home.title"),
});
</script>
