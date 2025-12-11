<template>
  <div class="date-validation-demo">
    <div class="validation-tests">
      <div class="test-item">
        <span>2024-02-29 (闰年2月29日): </span>
        <el-tag :type="isValidDate('2024-02-29') ? 'success' : 'danger'">
          {{ isValidDate('2024-02-29') ? '有效' : '无效' }}
        </el-tag>
      </div>
      <div class="test-item">
        <span>2023-02-29 (平年2月29日): </span>
        <el-tag :type="isValidDate('2023-02-29') ? 'success' : 'danger'">
          {{ isValidDate('2023-02-29') ? '有效' : '无效' }}
        </el-tag>
      </div>
      <div class="test-item">
        <span>今天是否为周末: </span>
        <el-tag :type="isWeekend(currentTime) ? 'warning' : 'info'">
          {{ isWeekend(currentTime) ? '是' : '否' }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isValidDate, isWeekend } from '../../../src/utils/dateUtils'

const currentTime = ref(new Date())
</script>

<style scoped>
.date-validation-demo {
  padding: 1rem;
}

.validation-tests {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.test-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.test-item span:first-child {
  min-width: 200px;
  color: var(--vp-c-text-2);
  font-size: 0.875em;
}
</style>
