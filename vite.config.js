import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      helpers: {
        equals: (a, b) => a === b,
      },
    }),
  ],
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        login: resolve(__dirname, "src/login.html"),
        register: resolve(__dirname, "src/register.html"),
        profile: resolve(__dirname, "src/profile.html"),
        feed: resolve(__dirname, "src/feed.html"),
        newPost: resolve(__dirname, "src/new-post.html"),
      },
    },
  },
});
