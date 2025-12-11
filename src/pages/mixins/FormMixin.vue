<template>
  <div class="mixin-page">
    <div class="page-header">
      <h2>表单混入 (Form Mixin)</h2>
      <p>提供表单数据管理、验证、重置等常用功能的混入对象</p>
    </div>

    <div class="demo-section">
      <h3>使用示例</h3>
      <div class="demo-content">
        <div class="form-demo">
          <el-form
            ref="formRef"
            :model="formData"
            :rules="formRules"
            label-width="80px"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="formData.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="formData.email" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input-number v-model="formData.age" :min="1" :max="120" />
            </el-form-item>
            <el-form-item>
              <z-button-group
                :buttons="formButtons"
                @click="handleFormAction"
              />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>Mixin 代码</h3>
      <div class="code-block">
        <pre><code>import FormMixin from '@/mixins/formMixin'

export default {
  mixins: [FormMixin],
  data() {
    return {
      formData: {
        username: '',
        email: '',
        age: null
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await this.validateForm()
        // 提交逻辑
        this.$message.success('表单提交成功')
      } catch (error) {
        console.error('表单验证失败:', error)
      }
    }
  }
}</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>Mixin 源码</h3>
      <div class="code-block">
        <pre><code>export default {
  data() {
    return {
      formData: {},
      formRules: {},
      loading: false
    }
  },
  methods: {
    // 验证表单
    async validateForm() {
      return new Promise((resolve, reject) => {
        this.$refs.formRef.validate((valid, invalidFields) => {
          if (valid) {
            resolve()
          } else {
            reject(invalidFields)
          }
        })
      })
    },

    // 重置表单
    resetForm() {
      this.$refs.formRef.resetFields()
      this.resetFormData()
    },

    // 重置表单数据
    resetFormData() {
      Object.keys(this.formData).forEach(key => {
        if (Array.isArray(this.formData[key])) {
          this.$set(this.formData, key, [])
        } else if (typeof this.formData[key] === 'object') {
          this.$set(this.formData, key, {})
        } else {
          this.$set(this.formData, key, '')
        }
      })
    },

    // 设置表单数据
    setFormData(data) {
      Object.keys(data).forEach(key => {
        this.$set(this.formData, key, data[key])
      })
    },

    // 获取表单数据
    getFormData() {
      return { ...this.formData }
    }
  }
}</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>可用方法</h3>
      <div class="methods-list">
        <div class="method-item">
          <h4>validateForm()</h4>
          <p>验证表单，返回 Promise，验证通过时 resolve，失败时 reject</p>
        </div>
        <div class="method-item">
          <h4>resetForm()</h4>
          <p>重置表单，包括清除验证状态和重置数据</p>
        </div>
        <div class="method-item">
          <h4>resetFormData()</h4>
          <p>重置表单数据，将所有字段设置为空值</p>
        </div>
        <div class="method-item">
          <h4>setFormData(data)</h4>
          <p>设置表单数据，支持对象合并</p>
        </div>
        <div class="method-item">
          <h4>getFormData()</h4>
          <p>获取表单数据的深拷贝</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZButtonGroup from '@/business-components/ZButtonGroup.vue'
import FormMixin from '@/mixins/formMixin'

export default {
  name: 'FormMixin',
  mixins: [FormMixin],
  components: {
    ZButtonGroup
  },
  data() {
    return {
      formData: {
        username: '',
        email: '',
        age: null
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      },
      formButtons: [
        { text: '提交', type: 'primary', action: 'submit' },
        { text: '重置', type: 'warning', action: 'reset' },
        { text: '重置数据', type: 'info', action: 'reset-data' }
      ]
    }
  },
  methods: {
    async handleFormAction(action) {
      switch (action) {
        case 'submit':
          await this.handleSubmit()
          break
        case 'reset':
          this.resetForm()
          break
        case 'reset-data':
          this.resetFormData()
          break
      }
    },

    async handleSubmit() {
      try {
        await this.validateForm()
        this.$message.success('表单验证通过！')
      } catch (error) {
        this.$message.error('表单验证失败')
      }
    }
  }
}
</script>

<style scoped>
.mixin-page {
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

.form-demo {
  max-width: 500px;
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

.methods-list {
  display: grid;
  gap: 20px;
}

.method-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #409eff;
}

.method-item h4 {
  margin: 0 0 10px 0;
  color: #303133;
}

.method-item p {
  margin: 0;
  color: #606266;
  line-height: 1.5;
}
</style>
