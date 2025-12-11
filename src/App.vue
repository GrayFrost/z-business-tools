<template>
  <div id="app">
    <el-container style="height: 100vh">
      <!-- 侧边栏导航 -->
      <el-aside width="250px" class="sidebar">
        <div class="logo">
          <h2>Z-Business Tools</h2>
          <p>Vue 3 组件库</p>
        </div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
          unique-opened
          background-color="#f5f5f5"
          text-color="#303133"
          active-text-color="#409eff"
        >
          <el-menu-item index="/">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-submenu index="components">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>业务组件</span>
            </template>
            <el-menu-item index="/components/button-group">按钮组</el-menu-item>
          </el-submenu>

          <el-submenu index="composables">
            <template #title>
              <el-icon><Share /></el-icon>
              <span>Vue Composables</span>
            </template>
            <el-menu-item index="/composables/form-composable">表单组合函数</el-menu-item>
          </el-submenu>

          <el-submenu index="utils">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>工具函数</span>
            </template>
            <el-menu-item index="/utils/date-utils">日期工具</el-menu-item>
          </el-submenu>

          <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>关于</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主内容区域 -->
      <el-container>
        <el-header class="header">
          <h1>{{ currentPageTitle }}</h1>
        </el-header>

        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { House, Box, Share, Setting, InfoFilled } from '@element-plus/icons-vue'

const route = useRoute()

const currentPageTitle = computed(() => {
  const titles = {
    '/': '首页',
    '/components/button-group': '按钮组组件',
    '/composables/form-composable': '表单组合函数',
    '/utils/date-utils': '日期工具',
    '/about': '关于'
  }
  return titles[route.path] || 'Z-Business Tools'
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#app {
  height: 100%;
}

.sidebar {
  background-color: #f5f5f5;
  border-right: 1px solid #e6e6e6;
}

.logo {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  background: white;
}

.logo h2 {
  color: #409eff;
  margin-bottom: 5px;
  font-size: 18px;
}

.logo p {
  color: #666;
  font-size: 12px;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header h1 {
  color: #303133;
  font-size: 20px;
}

.main {
  background-color: #f8f9fa;
  padding: 20px;
  overflow-y: auto;
}

/* 菜单样式优化 */
.el-menu {
  border-right: none;
}

.el-menu-item:hover {
  background-color: #ecf5ff !important;
}

.el-menu-item.is-active {
  background-color: #ecf5ff !important;
  color: #409eff !important;
}

.el-submenu__title:hover {
  background-color: #ecf5ff !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .el-aside {
    width: 200px !important;
  }

  .el-menu-vertical-demo {
    width: 200px;
  }
}
</style>