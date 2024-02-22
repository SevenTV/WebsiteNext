<template>
	<nav>
		<router-link to="/" class="nav-logo">
			<UiLogo :style="{ fontSize: '2.5em' }" />
		</router-link>
		<div class="nav-links">
			<RouterLink
				v-for="link of links"
				:key="link.label"
				class="nav-link"
				:to="link.to"
				:style="{
					'--nav-link-color': link.color,
					'--nav-outline-color': link.color || 'var(--seventv-color-primary)',
				}"
			>
				<span>{{ $t(link.label) }}</span>
			</RouterLink>
		</div>
		<UiLoadingBar v-if="isLoading" class="loading-bar" />
	</nav>
</template>

<script setup lang="ts">
import { UiLoadingBar } from "@seventv/ui";
import UiLogo from "@seventv/ui/src/components/UiLogo.vue";

defineProps<{
	isLoading: boolean;
}>();

const links: NavLink[] = [
	{ label: "view.emotes.title", to: "/emotes" },
	{ label: "view.discover.title", to: "/discover" },
	{ label: "view.store.title", to: "/store", color: "var(--seventv-color-brand-subscription)" },
];

interface NavLink {
	label: string;
	to: string;
	color?: string;
	if?: () => boolean;
}
</script>

<style scoped lang="scss">
nav {
	background-color: var(--seventv-color-nav-background);
	border-bottom: var(--seventv-color-outline) 1px solid;
	place-items: center;
	display: grid;

	--s-links: 1fr;
	--s-search: 1fr;

	// Tablet/Phone Layout
	@include media(md, max) {
		--s-links: 0fr;
		--s-search: 0fr;

		.nav-links {
			visibility: hidden;
		}
	}

	grid-template-columns: 3em var(--s-links) var(--s-search) 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "logo buttons search user";
	column-gap: 1.5rem;
	padding: 0 1.5rem;
}

a {
	display: grid;
	text-decoration: none;
	color: initial;
	cursor: pointer;
}

.nav-logo {
	transition: color 250ms;

	&.router-link-active,
	&:hover {
		color: var(--seventv-color-primary);
	}
}

.nav-links {
	grid-area: buttons;
	height: 100%;
	display: grid;
	grid-auto-flow: column;
	place-self: start;
	align-items: center;

	.nav-link {
		display: grid;
		place-content: center;
		height: 100%;
		color: var(--nav-link-color, -seventv-color-text);
		border-bottom: 0.1rem solid transparent;
		padding: 0 1rem;
		transition: border-bottom 150ms;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.nav-link:hover {
		cursor: pointer;
		border-color: var(--seventv-color-text);
	}

	.nav-link.router-link-active {
		border-color: var(--nav-outline-color) !important;
	}
}

.nav-spacer {
	flex: 1 1 auto;
}
</style>
