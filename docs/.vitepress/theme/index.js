import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入业务组件
import ZButtonGroup from '../../../src/components/ZButtonGroup.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册Element Plus
    app.use(ElementPlus)

    // 注册Element Plus图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    // 注册业务组件
    app.component('ZButtonGroup', ZButtonGroup)
  }
}
