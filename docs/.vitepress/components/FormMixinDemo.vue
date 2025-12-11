<template>
  <div class="form-mixin-demo">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="80px"
      size="small"
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
        <ZButtonGroup
          :buttons="formButtons"
          @click="handleFormAction"
        />
      </el-form-item>
    </el-form>

    <div class="form-data-display">
      <h4>当前表单数据:</h4>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '../../../src/composables/useForm'

const {
  formData,
  formRules,
  formRef,
  validateForm,
  resetForm,
  resetFormData
} = useForm(
  {
    username: '',
    email: '',
    age: null
  },
  {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
    ]
  }
)

const formButtons = ref([
  { text: '提交', type: 'primary', action: 'submit' },
  { text: '重置', type: 'warning', action: 'reset' },
  { text: '重置数据', type: 'info', action: 'reset-data' }
])

const handleFormAction = async (action) => {
  switch (action) {
    case 'submit':
      await handleSubmit()
      break
    case 'reset':
      resetForm()
      break
    case 'reset-data':
      resetFormData()
      break
  }
}

const handleSubmit = async () => {
  try {
    await validateForm()
    console.log('表单验证通过！')
    alert('表单验证通过！')
  } catch (error) {
    console.error('表单验证失败:', error)
    alert('表单验证失败，请检查输入')
  }
}
</script>

<style scoped>
.form-mixin-demo {
  max-width: 500px;
}

.form-data-display {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
}

.form-data-display h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
}

.form-data-display pre {
  margin: 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
