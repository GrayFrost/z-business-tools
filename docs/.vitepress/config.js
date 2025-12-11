import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Z-Business Tools',
  description: '业务组件库展示项目',
  lang: 'zh-CN',

  themeConfig: {
    siteTitle: 'Z-Business Tools',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '组合函数', link: '/composables/' },
      { text: '工具函数', link: '/utils/' }
    ],

    // 侧边栏
    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '总览', link: '/components/' },
            { text: '按钮组 ZButtonGroup', link: '/components/button-group' }
          ]
        }
      ],
      '/composables/': [
        {
          text: '组合函数',
          items: [
            { text: '总览', link: '/composables/' },
            { text: 'useForm 表单', link: '/composables/use-form' }
          ]
        }
      ],
      '/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '总览', link: '/utils/' },
            { text: 'dateUtils 日期', link: '/utils/date-utils' }
          ]
        }
      ]
    },

    // 页脚
    footer: {
      message: '基于 Vue 3 + VitePress 构建',
      copyright: 'Copyright © 2024-present Z-Business Tools'
    }
  },

  // Vite 配置 - 注意：不要添加vue插件，VitePress已内置
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
        '@components': resolve(__dirname, '../../src/components'),
        '@business-components': resolve(__dirname, '../../src/business-components'),
        '@utils': resolve(__dirname, '../../src/utils'),
        '@composables': resolve(__dirname, '../../src/composables')
      }
    },
    ssr: {
      noExternal: ['element-plus']
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
