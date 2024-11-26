// vite.config.js
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///C:/Users/wang/Desktop/%E7%A7%91%E6%8A%80%E9%83%A8/cloudcode-website/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/wang/Desktop/%E7%A7%91%E6%8A%80%E9%83%A8/cloudcode-website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import inject from "file:///C:/Users/wang/Desktop/%E7%A7%91%E6%8A%80%E9%83%A8/cloudcode-website/node_modules/@rollup/plugin-inject/dist/es/index.js";
import { createHtmlPlugin } from "file:///C:/Users/wang/Desktop/%E7%A7%91%E6%8A%80%E9%83%A8/cloudcode-website/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\wang\\Desktop\\\u79D1\u6280\u90E8\\cloudcode-website";
var vite_config_default = defineConfig({
  base: "/official-website/",
  plugins: [
    vue(),
    inject({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery",
      BMap: "BMap"
    }),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_VERSION: new Date().toLocaleString()
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YW5nXFxcXERlc2t0b3BcXFxcXHU3OUQxXHU2MjgwXHU5MEU4XFxcXGNsb3VkY29kZS13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YW5nXFxcXERlc2t0b3BcXFxcXHU3OUQxXHU2MjgwXHU5MEU4XFxcXGNsb3VkY29kZS13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy93YW5nL0Rlc2t0b3AvJUU3JUE3JTkxJUU2JThBJTgwJUU5JTgzJUE4L2Nsb3VkY29kZS13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgaW5qZWN0IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWluamVjdCdcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvb2ZmaWNpYWwtd2Vic2l0ZS8nLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgaW5qZWN0KHtcclxuICAgICAgJDogJ2pxdWVyeScsIC8vIFx1OEZEOVx1OTFDQ1x1NEYxQVx1ODFFQVx1NTJBOFx1OEY3RFx1NTE2NSBub2RlX21vZHVsZXMgXHU0RTJEXHU3Njg0IGpxdWVyeVxyXG4gICAgICBqUXVlcnk6ICdqcXVlcnknLFxyXG4gICAgICAnd2luZG93cy5qUXVlcnknOiAnanF1ZXJ5JyxcclxuICAgICAgQk1hcDogJ0JNYXAnXHJcbiAgICB9KSxcclxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAvKipcclxuICAgICAgICogXHU5NzAwXHU4OTgxXHU2Q0U4XHU1MTY1IGluZGV4Lmh0bWwgZWpzIFx1NkEyMVx1NzI0OFx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgKiBodHRwczovL2Jsb2cuY3Nkbi5uZXQvU2lsZW5jZUp1ZGUvYXJ0aWNsZS9kZXRhaWxzLzEyODI5NzM3MVxyXG4gICAgICAgKi9cclxuICAgICAgaW5qZWN0OiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgVklURV9BUFBfVkVSU0lPTjogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVWLFNBQVMsZUFBZTtBQUMvVyxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsd0JBQXdCO0FBSmpDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILFFBQVE7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELGlCQUFpQjtBQUFBLE1BS2YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osa0JBQWtCLElBQUksS0FBSyxFQUFFLGVBQWU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
