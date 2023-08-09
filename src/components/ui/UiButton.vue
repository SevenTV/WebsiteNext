<template>
	<RouterLink v-if="to && !disabled" :to="to" :replace="replace" class="button" :data-style="type">
		<span v-if="label" class="button-span">{{ label }}</span>
		<slot></slot>
	</RouterLink>
	<button v-else class="button" :is-disabled="disabled" :data-style="type">
		<span v-if="label" class="button-span">{{ label }}</span>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { type RouteLocationRaw, RouterLink } from "vue-router";

defineProps<{
	type?: "base" | "icon" | "cutout" | "primary";
	label?: string;
	disabled?: boolean;
	to?: RouteLocationRaw;
	replace?: boolean;
}>();
</script>

<style scoped>
.button {
	display: inline-flex;
	cursor: pointer;
	align-items: center;
	font-size: 13px;
	text-decoration: none;
	background: var(--theme-background-button);
	color: var(--theme-text-button);
	border: none;
	padding: 0.4rem;
	border-radius: var(--theme-chip-radius);
}

.button:not([data-style="cutout"], [data-style="icon"]) {
	padding: 0.4rem 1.25rem;
}

.button[data-style="primary"] {
	background: var(--theme-primary-gradient);
}

.button[data-style="primary"]:hover {
	background: var(--theme-primary-hover);
}

.button[data-style="cutout"] {
	background: transparent;
}

.button:hover {
	background: var(--theme-background-button-hover);
}

.button:active {
	background: var(--theme-background-button-pressed);
	filter: var(--theme-selected-glow);
}

.button-icon {
	height: 1.15rem;
}

.button-icon:not(:last-child) {
	margin-right: 0.5rem;
}

.button-span {
	text-align: center;
	width: 100%;
}

.button[is-disabled="true"] {
	pointer-events: none;
	opacity: 0.25;
}
</style>
