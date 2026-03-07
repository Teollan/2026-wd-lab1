import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: "/2026-wd-lab1/",
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
        signIn: resolve(__dirname, "src/sign-in.html"),
        signUp: resolve(__dirname, "src/sign-up.html"),
        profile: resolve(__dirname, "src/profile.html"),
        feed: resolve(__dirname, "src/feed.html"),
        newPost: resolve(__dirname, "src/new-post.html"),
      },
    },
  },
});
