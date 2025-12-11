<template>
  <div class="component-page">
    <div class="page-header">
      <h2>按钮组组件</h2>
      <p>常用的按钮组组件，支持多种布局和样式配置</p>
    </div>

    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <z-button-group
          :buttons="basicButtons"
          @click="handleButtonClick"
        />
      </div>
      <div class="code-block">
        <pre><code>&lt;z-button-group
  :buttons="basicButtons"
  @click="handleButtonClick"
/&gt;</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>图标按钮组</h3>
      <div class="demo-content">
        <z-button-group
          :buttons="iconButtons"
          @click="handleButtonClick"
        />
      </div>
      <div class="code-block">
        <pre><code>&lt;z-button-group
  :buttons="iconButtons"
  @click="handleButtonClick"
/&gt;</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>垂直布局</h3>
      <div class="demo-content">
        <z-button-group
          :buttons="verticalButtons"
          direction="vertical"
          @click="handleButtonClick"
        />
      </div>
      <div class="code-block">
        <pre><code>&lt;z-button-group
  :buttons="verticalButtons"
  direction="vertical"
  @click="handleButtonClick"
/&gt;</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>API 文档</h3>
      <div class="api-table">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>buttons</td>
              <td>按钮配置数组</td>
              <td>Array</td>
              <td>-</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>按钮组排列方向</td>
              <td>String</td>
              <td>horizontal / vertical</td>
              <td>horizontal</td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮大小</td>
              <td>String</td>
              <td>medium / small / mini</td>
              <td>medium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ZButtonGroup from '@/business-components/ZButtonGroup.vue'

export default {
  name: 'ButtonGroup',
  components: {
    ZButtonGroup
  },
  data() {
    return {
      basicButtons: [
        { text: '添加', type: 'primary', action: 'add' },
        { text: '编辑', type: 'success', action: 'edit' },
        { text: '删除', type: 'danger', action: 'delete' }
      ],
      iconButtons: [
        { text: '搜索', icon: 'el-icon-search', action: 'search' },
        { text: '刷新', icon: 'el-icon-refresh', action: 'refresh' },
        { text: '导出', icon: 'el-icon-download', action: 'export' }
      ],
      verticalButtons: [
        { text: '新增用户', type: 'primary', action: 'add-user' },
        { text: '编辑用户', type: 'warning', action: 'edit-user' },
        { text: '删除用户', type: 'danger', action: 'delete-user' },
        { text: '查看详情', type: 'info', action: 'view-user' }
      ]
    }
  },
  methods: {
    handleButtonClick(action) {
      this.$message.success(`点击了按钮: ${action}`)
    }
  }
}
</script>

<style scoped>
.component-page {
  max-width: 1000px;
}

.page-header {
  margin-bottom: 40px;
}

.page-header h2 {
  color: #303133;
  margin-bottom: 10px;
}

.page-header p {
  color: #606266;
  font-size: 16px;
}

.demo-section {
  margin-bottom: 40px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.demo-section h3 {
  color: #303133;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e7ed;
  padding-bottom: 10px;
}

.demo-content {
  margin-bottom: 20px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 6px;
}

.code-block {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 15px;
}

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
}

.code-block code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
}

.api-table {
  overflow-x: auto;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
}

.api-table th,
.api-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e4e7ed;
}

.api-table th {
  background: #f5f7fa;
  font-weight: 600;
  color: #606266;
}
</style>
