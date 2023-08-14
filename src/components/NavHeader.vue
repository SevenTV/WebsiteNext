<template>
	<div class="navbar">
		<router-link to="/">Home</router-link>
		<div class="navbar-spacer"></div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
	background-color: var(--theme-background-base);
	border-bottom: var(--theme-background-card) 1px solid;
	display: flex;
	align-items: center;
	padding: 0.7rem 1rem;
}

.navbar-spacer {
	flex: 1 1 auto;
}
</style>
