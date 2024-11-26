import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 项目基础路径
  plugins: [
    vue(),
    inject({
      $: 'jquery', // 全局加载 jQuery
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
      BMap: 'BMap'
    }),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_VERSION: new Date().toLocaleString() // 注入版本信息
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 设置路径别名
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        inject({
          // 限制插件只作用于 JS 文件
          include: ['src/**/*.js'], 
          // 排除 CSS 文件和不需要的文件
          exclude: ['src/assets/css/bootstrap.min.css'],
        })
      ]
    }
  }
})
