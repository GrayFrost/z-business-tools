/**
 * 表单混入对象
 * 提供表单数据管理、验证、重置等常用功能
 */
export default {
  data() {
    return {
      formData: {},
      formRules: {},
      loading: false
    }
  },
  methods: {
    /**
     * 验证表单
     * @returns {Promise} 验证通过时resolve，失败时reject
     */
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

    /**
     * 重置表单
     * 包括清除验证状态和重置数据
     */
    resetForm() {
      this.$refs.formRef.resetFields()
      this.resetFormData()
    },

    /**
     * 重置表单数据
     * 将所有字段设置为空值
     */
    resetFormData() {
      Object.keys(this.formData).forEach(key => {
        if (Array.isArray(this.formData[key])) {
          this.$set(this.formData, key, [])
        } else if (typeof this.formData[key] === 'object' && this.formData[key] !== null) {
          this.$set(this.formData, key, {})
        } else {
          this.$set(this.formData, key, '')
        }
      })
    },

    /**
     * 设置表单数据
     * @param {Object} data - 要设置的数据对象
     */
    setFormData(data) {
      Object.keys(data).forEach(key => {
        this.$set(this.formData, key, data[key])
      })
    },

    /**
     * 获取表单数据
     * @returns {Object} 表单数据的深拷贝
     */
    getFormData() {
      return JSON.parse(JSON.stringify(this.formData))
    },

    /**
     * 设置加载状态
     * @param {Boolean} loading - 加载状态
     */
    setLoading(loading) {
      this.loading = loading
    }
  },

  watch: {
    // 监听路由变化时重置表单
    '$route'(to, from) {
      if (to.path !== from.path) {
        this.resetForm()
      }
    }
  }
}
