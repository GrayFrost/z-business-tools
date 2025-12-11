<template>
  <div class="home">
    <div class="hero">
      <h2>欢迎使用 Z-Business Tools</h2>
      <p class="description">
        这是一个基于 Vue 2 的业务组件库展示项目，包含常用的业务组件、Vue Mixins 和工具函数。
      </p>
    </div>

    <div class="features">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="feature-card">
            <div class="icon">🧩</div>
            <h3>业务组件</h3>
            <p>常用业务场景的组件，包括按钮组、数据表格、搜索表单、文件上传等</p>
            <router-link to="/components/button-group" class="feature-link">查看组件 →</router-link>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="feature-card">
            <div class="icon">🔄</div>
            <h3>Vue Mixins</h3>
            <p>可复用的 Vue 混入对象，简化组件开发，提高代码复用性</p>
            <router-link to="/mixins/form-mixin" class="feature-link">查看 Mixins →</router-link>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="feature-card">
            <div class="icon">🛠️</div>
            <h3>工具函数</h3>
            <p>实用的工具函数库，包括日期处理、字符串操作、数组对象操作等</p>
            <router-link to="/utils/date-utils" class="feature-link">查看工具 →</router-link>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="quick-start">
      <h3>快速开始</h3>
      <div class="code-example">
        <pre><code>// 安装依赖
npm install

// 启动开发服务器
npm run dev

// 构建生产版本
npm run build</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 0;
}

.hero h2 {
  color: #409eff;
  font-size: 36px;
  margin-bottom: 20px;
}

.description {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
}

.features {
  margin-bottom: 60px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #303133;
  margin-bottom: 15px;
}

.feature-card p {
  color: #606266;
  line-height: 1.5;
  flex-grow: 1;
}

.feature-link {
  color: #409eff;
  text-decoration: none;
  font-weight: 500;
}

.feature-link:hover {
  text-decoration: underline;
}

.quick-start {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.quick-start h3 {
  color: #303133;
  margin-bottom: 20px;
}

.code-example {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 20px;
}

.code-example pre {
  margin: 0;
  white-space: pre-wrap;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
}
</style>
