import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.toString().split("node_modules/")[1].split("/")[0];
					}
				},
			},
		},
		// Opcional: aumenta el límite de advertencia si lo deseas
		chunkSizeWarningLimit: 2000,
	},
});
