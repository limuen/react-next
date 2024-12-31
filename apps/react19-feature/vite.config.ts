import { resolve } from "path";
import { defineConfig, mergeConfig } from "vite";
import viteConfig from "@limuen/vite-config";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig(configEnv => {
  return mergeConfig(viteConfig(configEnv), {
    plugins: [
      codeInspectorPlugin({
        bundler: "vite"
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      })
    ]
  });
});
