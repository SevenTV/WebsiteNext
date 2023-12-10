<template>
	<div class="banner">
		<div class="banner-sell">
			<h1>Unlock Cum</h1>
			<sub>Subscribe to cum immediately</sub>
		</div>
		<div></div>
	</div>
</template>

<style scoped lang="scss">
.banner {
	border-radius: 0.5rem;
	height: 11.25rem;
	padding: 1.25rem 2.5rem;
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	align-items: center;

	background: radial-gradient(
			100% 73.4% at 50% 0%,
			#ddc4fd 0%,
			#9227cf 33.33%,
			#3f188b 64.58%,
			#1f113e 80.73%,
			#0e0c13 93.75%
		),
		radial-gradient(
			746.46% 569.35% at 91.65% 243.12%,
			#fafffe 12.5%,
			#7280fd 33.85%,
			#d972fd 47.4%,
			#550f8b 66.67%,
			#091024 100%
		),
		var(--seventv-color-background-lighter, #0f0f0f);

	.banner-sell > h1 {
		line-height: normal;
		margin: 0;
	}
}
</style>
