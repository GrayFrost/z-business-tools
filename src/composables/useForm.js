/**
 * 表单组合函数
 * 提供表单数据管理、验证、重置等常用功能
 */
import { ref, reactive, watch } from 'vue'

export function useForm(initialData = {}, initialRules = {}) {
  // 表单数据
  const formData = reactive({ ...initialData })

  // 表单验证规则
  const formRules = reactive({ ...initialRules })

  // 表单引用
  const formRef = ref(null)

  // 加载状态
  const loading = ref(false)

  /**
   * 验证表单
   * @returns {Promise} 验证通过时resolve，失败时reject
   */
  const validateForm = () => {
    return new Promise((resolve, reject) => {
      formRef.value?.validate((valid, invalidFields) => {
        if (valid) {
          resolve()
        } else {
          reject(invalidFields)
        }
      })
    })
  }

  /**
   * 重置表单
   * 包括清除验证状态和重置数据
   */
  const resetForm = () => {
    formRef.value?.resetFields()
    resetFormData()
  }

  /**
   * 重置表单数据
   * 将所有字段设置为空值
   */
  const resetFormData = () => {
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        formData[key] = []
      } else if (typeof formData[key] === 'object' && formData[key] !== null) {
        formData[key] = {}
      } else {
        formData[key] = ''
      }
    })
  }

  /**
   * 设置表单数据
   * @param {Object} data - 要设置的数据对象
   */
  const setFormData = (data) => {
    Object.keys(data).forEach(key => {
      formData[key] = data[key]
    })
  }

  /**
   * 获取表单数据
   * @returns {Object} 表单数据的深拷贝
   */
  const getFormData = () => {
    return JSON.parse(JSON.stringify(formData))
  }

  /**
   * 设置加载状态
   * @param {Boolean} value - 加载状态
   */
  const setLoading = (value) => {
    loading.value = value
  }

  // 监听路由变化时重置表单 (如果在Vue Router环境中)
  if (typeof window !== 'undefined' && window.VueRouter) {
    watch(
      () => window.location.pathname,
      () => {
        resetForm()
      }
    )
  }

  return {
    // 响应式数据
    formData,
    formRules,
    formRef,
    loading,

    // 方法
    validateForm,
    resetForm,
    resetFormData,
    setFormData,
    getFormData,
    setLoading
  }
}
