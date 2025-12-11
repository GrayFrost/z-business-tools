<template>
  <div class="demo-container">
    <div class="demo-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
// DemoContainer 组件用于包装组件演示内容
</script>

<style scoped>
.demo-container {
  margin: 1rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
}

.demo-content {
  padding: 1.5rem;
  background: var(--vp-c-bg);
}

/* 深色模式适配 */
.dark .demo-container {
  border-color: var(--vp-c-border);
}

.dark .demo-content {
  background: var(--vp-c-bg);
}
</style>
