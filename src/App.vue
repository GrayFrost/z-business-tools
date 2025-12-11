<template>
  <div id="app">
    <el-container style="height: 100vh">
      <!-- 侧边栏导航 -->
      <el-aside width="200px" class="sidebar">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
          unique-opened
        >
          <el-menu-item index="/">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="components">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span>业务组件</span>
            </template>
            <el-menu-item index="/components/button-group">按钮组</el-menu-item>
          </el-submenu>

          <el-submenu index="mixins">
            <template slot="title">
              <i class="el-icon-share"></i>
              <span>Vue Mixins</span>
            </template>
            <el-menu-item index="/mixins/form-mixin">表单混入</el-menu-item>
          </el-submenu>

          <el-submenu index="utils">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>工具函数</span>
            </template>
            <el-menu-item index="/utils/date-utils">日期工具</el-menu-item>
          </el-submenu>

          <el-menu-item index="/docs">
            <i class="el-icon-document"></i>
            <span slot="title">使用文档</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主内容区域 -->
      <el-container>
        <el-header class="header">
          <h1>Z-Business Tools</h1>
          <p class="subtitle">业务组件库展示项目</p>
        </el-header>

        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.sidebar {
  background-color: #f5f5f5;
  border-right: 1px solid #e6e6e6;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.header h1 {
  margin: 0;
  color: #409eff;
  font-size: 24px;
}

.subtitle {
  margin: 0 0 0 10px;
  color: #666;
  font-size: 14px;
}

.main {
  background-color: #f8f9fa;
  padding: 20px;
}
</style>