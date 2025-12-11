<template>
  <div class="home-demo">
    <div class="demo-section">
      <h3>🚀 快速体验</h3>
      <div class="demo-content">
        <div class="demo-item">
          <h4>按钮组组件</h4>
          <ZButtonGroup
            :buttons="demoButtons"
            @click="handleButtonClick"
          />
        </div>

        <div class="demo-item">
          <h4>日期工具函数</h4>
          <p>当前时间: <code>{{ currentTime }}</code></p>
          <p>格式化后: <code>{{ formatDate(currentTime, 'YYYY-MM-DD HH:mm:ss') }}</code></p>
        </div>
      </div>
    </div>

    <div class="stats">
      <div class="stat-item">
        <div class="stat-number">{{ componentCount }}</div>
        <div class="stat-label">组件</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ mixinCount }}</div>
        <div class="stat-label">Mixins</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">{{ utilsCount }}</div>
        <div class="stat-label">工具函数</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { formatDate } from '../../../src/utils/dateUtils'

const demoButtons = [
  { text: '添加', type: 'primary', action: 'add' },
  { text: '编辑', type: 'success', action: 'edit' },
  { text: '删除', type: 'danger', action: 'delete' }
]

const currentTime = ref(new Date())
const componentCount = ref(5)
const mixinCount = ref(4)
const utilsCount = ref(5)

const handleButtonClick = (action) => {
  alert(`点击了按钮: ${action}`)
}

onMounted(() => {
  // 可以在这里添加一些初始化逻辑
})
</script>

<style scoped>
.home-demo {
  margin-top: 2rem;
}

.demo-section {
  margin-bottom: 2rem;
}

.demo-section h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.demo-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
}

.demo-item {
  margin-bottom: 1.5rem;
}

.demo-item:last-child {
  margin-bottom: 0;
}

.demo-item h4 {
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.demo-item p {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
}

.demo-item code {
  background: var(--vp-c-bg);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.875em;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--vp-c-brand);
  margin-bottom: 0.25rem;
}

.stat-label {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

/* 深色模式适配 */
.dark .demo-content {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-border);
}

.dark .stat-item {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-border);
}
</style>
