<template>
	<div class="store-sidebar">
		<div class="store-sidebar-heading">
			<h3 class="collapsible">Store</h3>
		</div>

		<UiButton type="primary">gaben</UiButton>
	</div>
</template>

<script setup lang="ts">
import UiButton from "@seventv/ui/src/components/UiButton.vue";
</script>

<style scoped lang="scss">
.store-sidebar {
	overflow: hidden;
	display: grid;
	grid-auto-rows: 1rem;
	grid-template-rows: 4rem;
	grid-template-columns: 1fr;
}

.store-sidebar-heading {
	display: flex;
	place-items: center;
	justify-content: space-between;
	margin: 0 1rem;
}
</style>
