<template>
  <div class="date-calculation-demo">
    <div class="demo-item">
      <p><strong>基准时间：</strong>{{ formatDate(currentTime, 'YYYY-MM-DD') }}</p>
      <p><strong>7天后：</strong>{{ formatDate(addDays(currentTime, 7), 'YYYY-MM-DD') }}</p>
      <p><strong>30天前：</strong>{{ formatDate(subtractDays(currentTime, 30), 'YYYY-MM-DD') }}</p>
    </div>
    <div class="demo-item">
      <p><strong>2个月后：</strong>{{ formatDate(addMonths(currentTime, 2), 'YYYY-MM') }}</p>
      <p><strong>1年后：</strong>{{ formatDate(addYears(currentTime, 1), 'YYYY') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatDate, addDays, subtractDays, addMonths, addYears } from '../../../src/utils/dateUtils'

const currentTime = ref(new Date())
</script>

<style scoped>
.date-calculation-demo {
  padding: 1rem;
}

.demo-item {
  margin-bottom: 1rem;
}

.demo-item p {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
}
</style>
