import vueI18n from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	process.env = {
		...process.env,
		...loadEnv(mode, process.cwd()),
	};

	return {
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ["vue", "vue-router"],
					},
				},
			},
		},

		plugins: [
			vue(),
			vueI18n({
				include: [resolve(__dirname, "locale/**")],
			}),
		],
		server: {
			port: 4500,
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "src"),
			},
		},
	};
});
