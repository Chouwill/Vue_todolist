import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/DreamPlan_CDN/", // 需要與gitHub專案名稱一樣/
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        // 代理配置
        target: "http://localhost:2500/api/", //  localhost本地確保這裡是正確的 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/RenderApi": {
        // 代理配置
        target: "https://backend-zg7i.onrender.com", //  localhost本地確保這裡是正確的 URL
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 將塊大小警告限制調整為 1000 kB
  },
});
