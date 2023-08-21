// vite.config.ts
import { defineConfig } from "file:///D:/nzh/node/vue3-ts-app/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/nzh/node/vue3-ts-app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { createSvgIconsPlugin } from "file:///D:/nzh/node/vue3-ts-app/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\nzh\\node\\vue3-ts-app";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    },
    extensions: [".js", ".json", ".ts", ".vue"]
  },
  server: {
    port: 3e3,
    open: true,
    proxy: {
      "/user": {
        target: "http://127.0.0.1:9999",
        changeOrigin: true,
        rewrite: (path) => path.replace("//user$/", "")
      },
      "/dict": {
        target: "http://127.0.0.1:9999",
        changeOrigin: true,
        rewrite: (path) => path.replace("//dict$/", "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxuemhcXFxcbm9kZVxcXFx2dWUzLXRzLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbnpoXFxcXG5vZGVcXFxcdnVlMy10cy1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L256aC9ub2RlL3Z1ZTMtdHMtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG4vLyBpbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcclxuLy8gaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbi8vIGltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG4vLyBcdTVGMTVcdTUxNjVzdmdcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgLy8gQXV0b0ltcG9ydCh7XHJcbiAgICAvLyAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgIC8vIH0pLFxyXG4gICAgLy8gQ29tcG9uZW50cyh7XHJcbiAgICAvLyAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgIC8vIH0pLFxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAvLyBcdTYzMDdcdTVCOUFcdTk3MDBcdTg5ODFcdTdGMTNcdTVCNThcdTc2ODRcdTU2RkVcdTY4MDdcdTY1ODdcdTRFRjZcdTU5MzlcclxuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL3N2ZycpXSxcclxuICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcclxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcclxuICAgIH0pXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgLy8gXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLmpzb24nLCAnLnRzJywgJy52dWUnXSAvLyBcdTRGN0ZcdTc1MjhcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTY1RjZcdTYwRjNcdTg5ODFcdTc3MDFcdTc1NjVcdTc2ODRcdTU0MEVcdTdGMDBcdTU0MERcdUZGMENcdTUzRUZcdTRFRTVcdTgxRUFcdTVERjFcdTU4OUVcdTUxQ0ZcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIG9wZW46IHRydWUsXHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL3VzZXInOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo5OTk5JyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgnLy91c2VyJC8nLCAnJylcclxuICAgICAgfSxcclxuICAgICAgJy9kaWN0Jzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6OTk5OScsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoJy8vZGljdCQvJywgJycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStQLFNBQVMsb0JBQW9CO0FBQzVSLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFLeEIsU0FBUyw0QkFBNEI7QUFQckMsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBT0oscUJBQXFCO0FBQUEsTUFFbkIsVUFBVSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFBQSxNQUVuRCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUMvQjtBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sU0FBUyxPQUFPLE1BQU07QUFBQSxFQUM1QztBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFlBQVksRUFBRTtBQUFBLE1BQ2hEO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsWUFBWSxFQUFFO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
