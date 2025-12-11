<template>
  <div class="date-format-demo">
    <div class="demo-item">
      <p><strong>当前时间：</strong>{{ currentTime }}</p>
      <p><strong>格式化后：</strong>{{ formatDate(currentTime, 'YYYY-MM-DD HH:mm:ss') }}</p>
    </div>
    <div class="demo-item">
      <p><strong>自定义格式：</strong></p>
      <div class="format-examples">
        <span>YYYY-MM-DD: {{ formatDate(currentTime, 'YYYY-MM-DD') }}</span>
        <span>MM/DD/YYYY: {{ formatDate(currentTime, 'MM/DD/YYYY') }}</span>
        <span>HH:mm:ss: {{ formatDate(currentTime, 'HH:mm:ss') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { formatDate } from '../../../src/utils/dateUtils'

const currentTime = ref(new Date())

onMounted(() => {
  // 每秒更新时间
  const timer = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)

  // 组件卸载时清理定时器
  return () => clearInterval(timer)
})
</script>

<style scoped>
.date-format-demo {
  padding: 1rem;
}

.demo-item {
  margin-bottom: 1rem;
}

.demo-item p {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
}

.format-examples {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.5rem;
}

.format-examples span {
  color: var(--vp-c-brand);
  font-family: var(--vp-font-family-mono);
  font-size: 0.875em;
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
</style>
