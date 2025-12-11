<template>
  <div class="button-group-demo">
    <div v-if="!showIcon && !vertical" class="demo-item">
      <ZButtonGroup
        :buttons="basicButtons"
        @click="handleButtonClick"
      />
    </div>

    <div v-else-if="showIcon && !vertical" class="demo-item">
      <ZButtonGroup
        :buttons="iconButtons"
        @click="handleButtonClick"
      />
    </div>

    <div v-else-if="vertical" class="demo-item">
      <ZButtonGroup
        :buttons="verticalButtons"
        direction="vertical"
        @click="handleButtonClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  showIcon: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  }
})

const basicButtons = ref([
  { text: '添加', type: 'primary', action: 'add' },
  { text: '编辑', type: 'success', action: 'edit' },
  { text: '删除', type: 'danger', action: 'delete' }
])

const iconButtons = ref([
  { text: '搜索', icon: 'Search', action: 'search' },
  { text: '刷新', icon: 'Refresh', action: 'refresh' },
  { text: '导出', icon: 'Download', action: 'export' }
])

const verticalButtons = ref([
  { text: '新增用户', type: 'primary', action: 'add-user' },
  { text: '编辑用户', type: 'warning', action: 'edit-user' },
  { text: '删除用户', type: 'danger', action: 'delete-user' },
  { text: '查看详情', type: 'info', action: 'view-user' }
])

const handleButtonClick = (action) => {
  // 在VitePress环境中，我们不能直接使用this.$message
  console.log('点击了按钮:', action)
  // 可以通过事件向上传递
  // this.$emit('button-click', action)
}
</script>

<style scoped>
.button-group-demo {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
}

.demo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
}
</style>
