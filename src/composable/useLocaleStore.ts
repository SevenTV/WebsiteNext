import { watch } from "vue";
import { type Composer as I18nComposer } from "vue-i18n";
import { useLocalStorage, usePreferredLanguages } from "@vueuse/core";
import globalI18n from "@/i18n";
import { createMappedComposable } from "@seventv/util-vue/modules/composable";

export const LOCALE_PREFERENCE_KEY = "seventv-locale";

export default createMappedComposable(
	(i18n: I18nComposer<Record<string, Record<string, unknown>>>, storageKey?: string) => {
		const preference = useLocalStorage<string | null>(storageKey ?? LOCALE_PREFERENCE_KEY, null);
		const userAgentPreferences = usePreferredLanguages();

		function localeFromBCP47(bcp47: string): string {
			const [lang, script] = bcp47.split(/[-_]/g);

			return `${lang.toLowerCase()}${script ? `_${script.toUpperCase()}` : ""}`;
		}

		function getBestMatch(locales: readonly string[]) {
			for (let locale of locales) {
				locale = localeFromBCP47(locale);
				if (i18n.availableLocales.includes(locale)) {
					return locale;
				}
			}
		}

		function getAvailableLocales(includeNonPresentable = false) {
			const map = new Map<string, string>();

			for (const [locale, messages] of Object.entries(i18n.messages.value)) {
				const name = messages["locale"] ? i18n.t("locale", [], { locale, default: "" }) : "";

				if (name.length > 0) {
					map.set(locale, name);
				} else if (includeNonPresentable) {
					map.set(locale, locale);
				}
			}

			return map;
		}

		watch(
			[preference, userAgentPreferences],
			([preference, userAgentPreferences]) => {
				const best = getBestMatch(preference ? [preference] : userAgentPreferences);

				i18n.locale.value = best ?? "en_US";
			},
			{ immediate: true },
		);

		return {
			preference,
			userAgentPreferences,
			getAvailableLocales,
			getBestMatch,
			localeFromBCP47,
		};
	},
	undefined,
	(i18n?: I18nComposer) => i18n ?? globalI18n.global,
);
