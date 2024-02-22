<template>
	<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill="currentColor">
		<!--! Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
		<path
			d="M384 96V64h64V96 416v32H384V416 96zM25.4 278.6L2.7 256l22.6-22.6 128-128L176 82.7 221.3 128l-22.6 22.6L125.3 224 288 224h32v64H288l-162.7 0 73.4 73.4L221.3 384 176 429.3l-22.6-22.6-128-128z"
		/>
	</svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
	defineProps<{
		direction: "left" | "right" | "top" | "bottom";
	}>(),
	{
		direction: "right",
	},
);

const deg = computed(
	() =>
		(({
			left: 180,
			right: 0,
			top: 90,
			bottom: 270,
		})[props.direction] ?? 0) + "deg",
);
</script>

<style scoped lang="scss">
svg {
	transform: rotate(v-bind(deg));
}
</style>
