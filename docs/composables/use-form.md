---
title: useForm 表单
---

# useForm 表单组合函数

提供表单数据管理、验证、重置等常用功能的组合函数。

## 基本用法

<script setup>
import { ref, reactive } from 'vue'
import { useForm } from '../../src/composables/useForm'

const {
  formData,
  formRef,
  validateForm,
  resetForm,
  resetFormData
} = useForm({
  username: '',
  email: '',
  age: null
}, {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ]
})

const handleSubmit = async () => {
  try {
    await validateForm()
    alert('表单验证通过！')
  } catch (e) {
    alert('请检查表单输入')
  }
}
</script>

<div class="demo-block">
  <el-form ref="formRef" :model="formData" label-width="80px" size="default">
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
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</div>

::: details 查看代码
```vue
<script setup>
import { useForm } from '@/composables/useForm'

const {
  formData,
  formRef,
  validateForm,
  resetForm
} = useForm({
  username: '',
  email: '',
  age: null
}, {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ]
})

const handleSubmit = async () => {
  try {
    await validateForm()
    // 提交逻辑
  } catch (e) {
    console.error('验证失败')
  }
}
</script>

<template>
  <el-form ref="formRef" :model="formData" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="formData.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>
```
:::

## API

### 参数

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| initialData | 表单初始数据 | `Object` | `{}` |
| initialRules | 表单验证规则 | `Object` | `{}` |

### 返回值

| 名称 | 说明 | 类型 |
|------|------|------|
| formData | 表单数据（响应式） | `Reactive<Object>` |
| formRules | 表单验证规则 | `Reactive<Object>` |
| formRef | 表单组件引用 | `Ref<FormInstance>` |
| loading | 加载状态 | `Ref<boolean>` |
| validateForm | 验证表单 | `() => Promise<void>` |
| resetForm | 重置表单 | `() => void` |
| resetFormData | 重置表单数据 | `() => void` |
| setFormData | 设置表单数据 | `(data: Object) => void` |
| getFormData | 获取表单数据 | `() => Object` |
| setLoading | 设置加载状态 | `(value: boolean) => void` |

## 源码

::: details 查看源码
```js
import { ref, reactive } from 'vue'

export function useForm(initialData = {}, initialRules = {}) {
  const formData = reactive({ ...initialData })
  const formRules = reactive({ ...initialRules })
  const formRef = ref(null)
  const loading = ref(false)

  const validateForm = () => {
    return new Promise((resolve, reject) => {
      formRef.value?.validate((valid, invalidFields) => {
        valid ? resolve() : reject(invalidFields)
      })
    })
  }

  const resetForm = () => {
    formRef.value?.resetFields()
    resetFormData()
  }

  const resetFormData = () => {
    Object.keys(formData).forEach(key => {
      formData[key] = Array.isArray(formData[key]) ? [] : ''
    })
  }

  const setFormData = (data) => {
    Object.assign(formData, data)
  }

  const getFormData = () => JSON.parse(JSON.stringify(formData))

  return {
    formData, formRules, formRef, loading,
    validateForm, resetForm, resetFormData, setFormData, getFormData
  }
}
```
:::

<style>
.demo-block {
  padding: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 16px 0;
}
</style>