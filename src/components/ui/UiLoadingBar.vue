<template>
	<div class="loading-bar">
		<div
			class="loading-range"
			:indeterminate="!progress"
			:style="progress ? { left: 0, right: `${100 - progress * 100}%` } : undefined"
		></div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	progress?: number;
}>();
</script>

<style scoped lang="scss">
@keyframes indeterminate-left {
	from {
		left: 0%;
	}

	to {
		left: 100%;
	}
}

@keyframes indeterminate-right {
	0% {
		right: 100%;
	}

	70% {
		right: 0%;
	}

	100% {
		right: 0%;
	}
}

.loading-bar {
	height: 0.75rem;

	border-radius: var(--theme-chip-radius);
	overflow: clip;

	background: var(--theme-background-card);
}

.loading-range {
	position: absolute;
	height: 100%;
	left: 0;

	border-radius: var(--theme-chip-radius);

	background: var(--theme-primary-gradient);

	&[indeterminate="true"] {
		animation:
			1s cubic-bezier(0.8, 0, 0.8, 1) indeterminate-left infinite,
			1s cubic-bezier(0.8, 0, 0.8, 1) indeterminate-right infinite;
	}
}
</style>
