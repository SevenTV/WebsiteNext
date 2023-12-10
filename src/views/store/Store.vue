<template>
	<main class="store">
		<StoreSidebar class="sidebar" />
		<div class="content">
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import StoreSidebar from "./StoreSidebar.vue";
</script>

<style scoped lang="scss">
main {
	display: grid;
	grid-template-columns: 15em 1.8fr;
	grid-template-rows: 1fr;
	grid-template-areas: "sidebar content";
	transition: grid-template-columns 150ms;

	@include media(md, max) {
		grid-template-columns: 0 1.8fr;
	}
}

.sidebar {
	grid-area: sidebar;
	background-color: var(--seventv-color-background-lighter);
}

.content {
	grid-area: content;
	grid-auto-flow: row;
	display: grid;
	padding: 1rem 2rem 2rem;
}
</style>
