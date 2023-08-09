import { type Component, defineComponent, h } from "vue";
import { type RouteLocationNormalizedLoaded } from "vue-router";

export function getFirstParam(route: RouteLocationNormalizedLoaded, param: string): string | undefined {
	const value = route.params[param];

	return value instanceof Array ? value[0] : value;
}

export function getUniqueRouteKey(route: RouteLocationNormalizedLoaded) {
	if (route.meta.dependsOn instanceof Array) {
		const deps = route.meta.dependsOn;

		const parts = [];

		for (const [param, value] of Object.entries(route.params)) {
			if (deps.includes(param)) {
				let string = `${param}`;

				if (value instanceof Array) {
					string += `:${value.join(":")}`;
				} else {
					string += `:${value}`;
				}

				parts.push(string);
			}
		}

		return parts.join("-");
	}

	return undefined;
}

export function defineAsyncPage(moduleResolver: () => Promise<{ default: ComponentConstructor }>) {
	const name = `AsyncPage-${Math.random().toString(36).substring(2)}`;

	return defineComponent({
		displayName: name,
		async setup() {
			const module = await moduleResolver();

			const component = module.default;

			return () => h(component);
		},
	});
}

interface ComponentConstructor {
	new (): Component;
}
