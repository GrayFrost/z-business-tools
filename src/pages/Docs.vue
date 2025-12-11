<template>
  <div class="docs-page">
    <div class="page-header">
      <h2>使用文档</h2>
      <p>Z-Business Tools 的完整使用指南</p>
    </div>

    <div class="doc-section">
      <h3>📦 安装和使用</h3>
      <div class="code-block">
        <pre><code># 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview</code></pre>
      </div>
    </div>

    <div class="doc-section">
      <h3>🏗️ 项目结构</h3>
      <div class="structure-tree">
        <div class="tree-item">
          <span class="folder">src/</span>
          <div class="tree-children">
            <div class="tree-item">
              <span class="folder">business-components/</span>
              <div class="tree-children">
                <span class="file">ZButtonGroup.vue - 按钮组组件</span>
                <span class="file">... - 其他业务组件</span>
              </div>
            </div>
            <div class="tree-item">
              <span class="folder">mixins/</span>
              <div class="tree-children">
                <span class="file">formMixin.js - 表单混入</span>
                <span class="file">listMixin.js - 列表混入</span>
                <span class="file">... - 其他混入对象</span>
              </div>
            </div>
            <div class="tree-item">
              <span class="folder">utils/</span>
              <div class="tree-children">
                <span class="file">dateUtils.js - 日期工具</span>
                <span class="file">stringUtils.js - 字符串工具</span>
                <span class="file">... - 其他工具函数</span>
              </div>
            </div>
            <div class="tree-item">
              <span class="folder">pages/</span>
              <div class="tree-children">
                <span class="file">Home.vue - 首页</span>
                <span class="file">components/ - 组件示例页面</span>
                <span class="file">mixins/ - 混入示例页面</span>
                <span class="file">utils/ - 工具函数示例页面</span>
              </div>
            </div>
            <div class="tree-item">
              <span class="folder">router/</span>
              <div class="tree-children">
                <span class="file">index.js - 路由配置</span>
              </div>
            </div>
            <span class="file">App.vue - 根组件</span>
            <span class="file">main.js - 应用入口</span>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h3>🧩 业务组件使用指南</h3>

      <div class="component-guide">
        <h4>ZButtonGroup 按钮组</h4>
        <div class="code-block">
          <pre><code>&lt;template&gt;
  &lt;z-button-group
    :buttons="buttons"
    @click="handleClick"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import ZButtonGroup from '@/business-components/ZButtonGroup.vue'

export default {
  components: { ZButtonGroup },
  data() {
    return {
      buttons: [
        { text: '添加', type: 'primary', action: 'add' },
        { text: '编辑', type: 'success', action: 'edit' },
        { text: '删除', type: 'danger', action: 'delete' }
      ]
    }
  },
  methods: {
    handleClick(action) {
      console.log('点击了:', action)
    }
  }
}
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h3>🔄 Vue Mixins 使用指南</h3>

      <div class="mixin-guide">
        <h4>Form Mixin 表单混入</h4>
        <div class="code-block">
          <pre><code>&lt;script&gt;
import FormMixin from '@/mixins/formMixin'

export default {
  mixins: [FormMixin],
  data() {
    return {
      formData: {
        username: '',
        email: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.validateForm()
        // 提交逻辑
      } catch (error) {
        console.error('验证失败:', error)
      }
    }
  }
}
&lt;/script&gt;</code></pre>
        </div>

        <div class="methods-table">
          <h5>可用方法：</h5>
          <table>
            <thead>
              <tr>
                <th>方法名</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>validateForm()</td>
                <td>验证表单</td>
              </tr>
              <tr>
                <td>resetForm()</td>
                <td>重置表单</td>
              </tr>
              <tr>
                <td>setFormData(data)</td>
                <td>设置表单数据</td>
              </tr>
              <tr>
                <td>getFormData()</td>
                <td>获取表单数据</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h3>🛠️ 工具函数使用指南</h3>

      <div class="utils-guide">
        <h4>日期工具函数</h4>
        <div class="code-block">
          <pre><code>import {
  formatDate,
  addDays,
  isValidDate
} from '@/utils/dateUtils'

// 格式化日期
const formatted = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')

// 添加天数
const futureDate = addDays(new Date(), 7)

// 验证日期
const isValid = isValidDate('2024-02-29')</code></pre>
        </div>

        <div class="functions-table">
          <h5>常用函数：</h5>
          <table>
            <thead>
              <tr>
                <th>函数名</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>formatDate(date, format)</td>
                <td>格式化日期</td>
              </tr>
              <tr>
                <td>addDays(date, days)</td>
                <td>添加天数</td>
              </tr>
              <tr>
                <td>isValidDate(dateString)</td>
                <td>验证日期有效性</td>
              </tr>
              <tr>
                <td>isWeekend(date)</td>
                <td>判断是否为周末</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h3>📝 开发规范</h3>
      <div class="guidelines">
        <div class="guideline-item">
          <h5>组件命名</h5>
          <ul>
            <li>业务组件使用 Z 前缀，如 ZButtonGroup</li>
            <li>组件文件使用 PascalCase 命名</li>
            <li>组件内部使用 kebab-case 命名</li>
          </ul>
        </div>

        <div class="guideline-item">
          <h5>文件组织</h5>
          <ul>
            <li>组件放在 business-components 目录</li>
            <li>Mixins 放在 mixins 目录</li>
            <li>工具函数放在 utils 目录</li>
            <li>页面组件放在 pages 目录</li>
          </ul>
        </div>

        <div class="guideline-item">
          <h5>代码风格</h5>
          <ul>
            <li>使用 ESLint 进行代码检查</li>
            <li>函数和变量使用 camelCase 命名</li>
            <li>常量使用 UPPER_CASE 命名</li>
            <li>添加必要的 JSDoc 注释</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <h3>🤝 贡献指南</h3>
      <div class="contribution">
        <ol>
          <li>Fork 本仓库</li>
          <li>创建功能分支 (git checkout -b feature/AmazingFeature)</li>
          <li>提交更改 (git commit -m 'Add some AmazingFeature')</li>
          <li>推送到分支 (git push origin feature/AmazingFeature)</li>
          <li>创建 Pull Request</li>
        </ol>

        <div class="contribution-note">
          <p><strong>注意：</strong>提交代码前请确保通过了所有测试，并且代码风格符合项目规范。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docs'
}
</script>

<style scoped>
.docs-page {
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

.doc-section {
  margin-bottom: 40px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.doc-section h3 {
  color: #303133;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e7ed;
  padding-bottom: 10px;
}

.code-block {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
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

.structure-tree {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: #f8f9fa;
  border-radius: 6px;
  padding: 20px;
}

.tree-item {
  margin: 5px 0;
}

.tree-children {
  margin-left: 20px;
  border-left: 1px solid #dee2e6;
  padding-left: 15px;
}

.folder {
  color: #e67e22;
  font-weight: bold;
}

.file {
  color: #27ae60;
  display: block;
  margin: 2px 0;
}

.component-guide,
.mixin-guide,
.utils-guide {
  margin-bottom: 30px;
}

.component-guide h4,
.mixin-guide h4,
.utils-guide h4 {
  color: #303133;
  margin-bottom: 15px;
  font-size: 18px;
}

.methods-table,
.functions-table {
  margin-top: 20px;
}

.methods-table h5,
.functions-table h5 {
  color: #606266;
  margin-bottom: 10px;
  font-size: 16px;
}

.methods-table table,
.functions-table table {
  width: 100%;
  border-collapse: collapse;
  background: #f8f9fa;
  border-radius: 6px;
  overflow: hidden;
}

.methods-table th,
.methods-table td,
.functions-table th,
.functions-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e4e7ed;
}

.methods-table th,
.functions-table th {
  background: #f1f3f4;
  font-weight: 600;
  color: #303133;
}

.guidelines {
  display: grid;
  gap: 25px;
}

.guideline-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #409eff;
}

.guideline-item h5 {
  color: #303133;
  margin-bottom: 15px;
}

.guideline-item ul {
  margin: 0;
  padding-left: 20px;
}

.guideline-item li {
  margin-bottom: 8px;
  color: #606266;
  line-height: 1.5;
}

.contribution {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 6px;
}

.contribution ol {
  margin: 0 0 20px 0;
  padding-left: 20px;
}

.contribution li {
  margin-bottom: 8px;
  color: #606266;
  line-height: 1.5;
}

.contribution-note {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  padding: 15px;
}

.contribution-note p {
  margin: 0;
  color: #856404;
  font-weight: 500;
}
</style>
