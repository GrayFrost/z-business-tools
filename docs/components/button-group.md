---
title: 按钮组
---

# ZButtonGroup 按钮组

常用的按钮组组件，支持多种布局和样式配置。

## 基础用法

<script setup>
import { ref } from 'vue'
import ZButtonGroup from '../../src/business-components/ZButtonGroup.vue'

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
  { text: '新增', type: 'primary', action: 'add' },
  { text: '编辑', type: 'warning', action: 'edit' },
  { text: '删除', type: 'danger', action: 'delete' }
])

const handleClick = (action) => {
  alert(`点击了: ${action}`)
}
</script>

<div class="demo-block">
  <ZButtonGroup :buttons="basicButtons" @click="handleClick" />
</div>

::: details 查看代码
```vue
<template>
  <ZButtonGroup :buttons="buttons" @click="handleClick" />
</template>

<script setup>
import { ref } from 'vue'

const buttons = ref([
  { text: '添加', type: 'primary', action: 'add' },
  { text: '编辑', type: 'success', action: 'edit' },
  { text: '删除', type: 'danger', action: 'delete' }
])

const handleClick = (action) => {
  console.log('点击了:', action)
}
</script>
```
:::

## 带图标

<div class="demo-block">
  <ZButtonGroup :buttons="iconButtons" @click="handleClick" />
</div>

::: details 查看代码
```vue
<template>
  <ZButtonGroup :buttons="buttons" @click="handleClick" />
</template>

<script setup>
const buttons = [
  { text: '搜索', icon: 'Search', action: 'search' },
  { text: '刷新', icon: 'Refresh', action: 'refresh' },
  { text: '导出', icon: 'Download', action: 'export' }
]
</script>
```
:::

## 垂直布局

<div class="demo-block">
  <ZButtonGroup :buttons="verticalButtons" direction="vertical" @click="handleClick" />
</div>

::: details 查看代码
```vue
<template>
  <ZButtonGroup :buttons="buttons" direction="vertical" @click="handleClick" />
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| buttons | 按钮配置数组 | `ButtonConfig[]` | - | `[]` |
| direction | 排列方向 | `string` | `horizontal` / `vertical` | `horizontal` |
| size | 按钮大小 | `string` | `large` / `default` / `small` | `default` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | `(action: string)` |

### ButtonConfig

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| text | 按钮文本 | `string` | - | - |
| type | 按钮类型 | `string` | `primary` / `success` / `warning` / `danger` / `info` | `default` |
| action | 点击标识 | `string` | - | - |
| icon | 图标名称 | `string` | Element Plus 图标名 | - |
| disabled | 是否禁用 | `boolean` | - | `false` |
| loading | 加载状态 | `boolean` | - | `false` |

## 源码

::: details 查看源码
```vue
<template>
  <div class="z-button-group" :class="{ 'z-button-group--vertical': direction === 'vertical' }">
    <el-button
      v-for="(button, index) in buttons"
      :key="index"
      :type="button.type || 'default'"
      :size="size"
      :disabled="button.disabled"
      :loading="button.loading"
      @click="$emit('click', button.action || index)"
    >
      <component :is="button.icon" v-if="button.icon" />
      {{ button.text }}
    </el-button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  buttons: { type: Array, default: () => [] },
  direction: { type: String, default: 'horizontal' },
  size: { type: String, default: 'default' }
})

defineEmits(['click'])
</script>
```
:::

<style>
.demo-block {
  padding: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 16px 0;
  display: flex;
  justify-content: center;
}
</style>