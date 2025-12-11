<template>
  <div class="utils-page">
    <div class="page-header">
      <h2>日期工具函数</h2>
      <p>常用的日期处理工具函数，包括格式化、计算、验证等</p>
    </div>

    <div class="demo-section">
      <h3>日期格式化</h3>
      <div class="demo-content">
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
    </div>

    <div class="demo-section">
      <h3>日期计算</h3>
      <div class="demo-content">
        <div class="demo-item">
          <p><strong>7天后：</strong>{{ formatDate(addDays(currentTime, 7), 'YYYY-MM-DD') }}</p>
          <p><strong>30天前：</strong>{{ formatDate(subtractDays(currentTime, 30), 'YYYY-MM-DD') }}</p>
        </div>
        <div class="demo-item">
          <p><strong>2个月后：</strong>{{ formatDate(addMonths(currentTime, 2), 'YYYY-MM') }}</p>
          <p><strong>1年后：</strong>{{ formatDate(addYears(currentTime, 1), 'YYYY') }}</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>日期验证</h3>
      <div class="demo-content">
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
    </div>

    <div class="demo-section">
      <h3>工具函数源码</h3>
      <div class="code-block">
        <pre><code>// 日期格式化
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
}

// 添加天数
export function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

// 减去天数
export function subtractDays(date, days) {
  return addDays(date, -days)
}

// 添加月数
export function addMonths(date, months) {
  const result = new Date(date)
  result.setMonth(result.getMonth() + months)
  return result
}

// 添加年数
export function addYears(date, years) {
  const result = new Date(date)
  result.setFullYear(result.getFullYear() + years)
  return result
}

// 验证日期是否有效
export function isValidDate(dateString) {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

// 判断是否为周末
export function isWeekend(date) {
  const d = new Date(date)
  const day = d.getDay()
  return day === 0 || day === 6
}</code></pre>
      </div>
    </div>

    <div class="demo-section">
      <h3>可用函数</h3>
      <div class="functions-list">
        <div class="function-item">
          <h4>formatDate(date, format)</h4>
          <p>格式化日期，支持多种格式模板</p>
          <p><em>参数：</em> date: 日期对象或字符串, format: 格式模板(默认: 'YYYY-MM-DD')</p>
        </div>
        <div class="function-item">
          <h4>addDays(date, days)</h4>
          <p>添加指定的天数</p>
          <p><em>参数：</em> date: 日期对象, days: 要添加的天数</p>
        </div>
        <div class="function-item">
          <h4>addMonths(date, months)</h4>
          <p>添加指定的月数</p>
          <p><em>参数：</em> date: 日期对象, months: 要添加的月数</p>
        </div>
        <div class="function-item">
          <h4>isValidDate(dateString)</h4>
          <p>验证日期字符串是否有效</p>
          <p><em>参数：</em> dateString: 日期字符串</p>
        </div>
        <div class="function-item">
          <h4>isWeekend(date)</h4>
          <p>判断指定日期是否为周末</p>
          <p><em>参数：</em> date: 日期对象</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  formatDate,
  addDays,
  subtractDays,
  addMonths,
  addYears,
  isValidDate,
  isWeekend
} from '@/utils/dateUtils'

export default {
  name: 'DateUtils',
  data() {
    return {
      currentTime: new Date()
    }
  },
  methods: {
    formatDate,
    addDays,
    subtractDays,
    addMonths,
    addYears,
    isValidDate,
    isWeekend
  }
}
</script>

<style scoped>
.utils-page {
  max-width: 1000px;
}

.page-header {
  margin-bottom: 40px;
}

.page-header h2 {
  color: #303133;
  margin-bottom: 10px;
}

.page-header p {
  color: #606266;
  font-size: 16px;
}

.demo-section {
  margin-bottom: 40px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.demo-section h3 {
  color: #303133;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e7ed;
  padding-bottom: 10px;
}

.demo-content {
  margin-bottom: 20px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 6px;
}

.demo-item {
  margin-bottom: 15px;
}

.demo-item p {
  margin: 5px 0;
  color: #606266;
}

.format-examples {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}

.format-examples span {
  color: #409eff;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.validation-tests {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.test-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.test-item span:first-child {
  min-width: 200px;
  color: #606266;
}

.code-block {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 15px;
}

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
}

.code-block code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
}

.functions-list {
  display: grid;
  gap: 20px;
}

.function-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #67c23a;
}

.function-item h4 {
  margin: 0 0 10px 0;
  color: #303133;
}

.function-item p {
  margin: 5px 0;
  color: #606266;
  line-height: 1.5;
}

.function-item em {
  font-style: normal;
  color: #909399;
}
</style>
