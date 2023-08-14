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
import { useHead } from "@vueuse/head";

useHead({
	title: "7TV - Home",
});
</script>
