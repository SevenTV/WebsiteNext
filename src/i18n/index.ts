import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
	locale: "en_US",
	fallbackLocale: "en_US",
	legacy: false,
	globalInjection: true,
	messages,
});

export default i18n;
