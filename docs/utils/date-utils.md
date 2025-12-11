---
title: 日期工具
---

# 日期工具函数

常用的日期处理工具函数，包括格式化、计算、验证等。

## 日期格式化

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { formatDate, addDays, subtractDays, addMonths, isValidDate, isWeekend } from '../../src/utils/dateUtils'

const now = ref(new Date())
let timer

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<div class="demo-block">
  <p><strong>当前时间：</strong><code>{{ now }}</code></p>
  <p><strong>YYYY-MM-DD HH:mm:ss：</strong><code>{{ formatDate(now, 'YYYY-MM-DD HH:mm:ss') }}</code></p>
  <p><strong>YYYY-MM-DD：</strong><code>{{ formatDate(now, 'YYYY-MM-DD') }}</code></p>
  <p><strong>HH:mm:ss：</strong><code>{{ formatDate(now, 'HH:mm:ss') }}</code></p>
</div>

::: details 查看代码
```js
import { formatDate } from '@/utils/dateUtils'

const now = new Date()
formatDate(now, 'YYYY-MM-DD HH:mm:ss')  // 2024-01-15 14:30:00
formatDate(now, 'YYYY-MM-DD')            // 2024-01-15
formatDate(now, 'HH:mm:ss')              // 14:30:00
```
:::

## 日期计算

<div class="demo-block">
  <p><strong>今天：</strong><code>{{ formatDate(now, 'YYYY-MM-DD') }}</code></p>
  <p><strong>7天后：</strong><code>{{ formatDate(addDays(now, 7), 'YYYY-MM-DD') }}</code></p>
  <p><strong>30天前：</strong><code>{{ formatDate(subtractDays(now, 30), 'YYYY-MM-DD') }}</code></p>
  <p><strong>3个月后：</strong><code>{{ formatDate(addMonths(now, 3), 'YYYY-MM-DD') }}</code></p>
</div>

::: details 查看代码
```js
import { addDays, subtractDays, addMonths } from '@/utils/dateUtils'

const now = new Date()
addDays(now, 7)       // 7天后
subtractDays(now, 30) // 30天前
addMonths(now, 3)     // 3个月后
```
:::

## 日期验证

<div class="demo-block">
  <p>
    <strong>2024-02-29（闰年）：</strong>
    <el-tag :type="isValidDate('2024-02-29') ? 'success' : 'danger'">
      {{ isValidDate('2024-02-29') ? '有效' : '无效' }}
    </el-tag>
  </p>
  <p>
    <strong>2023-02-29（平年）：</strong>
    <el-tag :type="isValidDate('2023-02-29') ? 'success' : 'danger'">
      {{ isValidDate('2023-02-29') ? '有效' : '无效' }}
    </el-tag>
  </p>
  <p>
    <strong>今天是周末：</strong>
    <el-tag :type="isWeekend(now) ? 'warning' : 'info'">
      {{ isWeekend(now) ? '是' : '否' }}
    </el-tag>
  </p>
</div>

## API

### formatDate

格式化日期

```ts
function formatDate(date: Date | string, format?: string): string
```

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| date | 日期对象或字符串 | `Date \| string` | - |
| format | 格式模板 | `string` | `'YYYY-MM-DD'` |

**支持的格式：**
- `YYYY` - 4位年份
- `MM` - 2位月份
- `DD` - 2位日期
- `HH` - 2位小时（24小时制）
- `mm` - 2位分钟
- `ss` - 2位秒数

### addDays / subtractDays

添加或减少天数

```ts
function addDays(date: Date, days: number): Date
function subtractDays(date: Date, days: number): Date
```

### addMonths / addYears

添加月数或年数

```ts
function addMonths(date: Date, months: number): Date
function addYears(date: Date, years: number): Date
```

### isValidDate

验证日期是否有效

```ts
function isValidDate(dateString: string): boolean
```

### isWeekend

判断是否为周末

```ts
function isWeekend(date: Date): boolean
```

## 源码

::: details 查看源码
```js
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

export function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function subtractDays(date, days) {
  return addDays(date, -days)
}

export function isValidDate(dateString) {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

export function isWeekend(date) {
  const d = new Date(date)
  return d.getDay() === 0 || d.getDay() === 6
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
.demo-block p {
  margin: 8px 0;
}
.demo-block code {
  background: var(--vp-c-bg-soft);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>