---
title: 拖拽组件
---

# Dragger 拖拽组件

可拖拽的容器组件，支持鼠标和触摸拖拽，自动限制在视窗范围内。

## 基础用法

<script setup>
import { ref } from 'vue'
import Dragger from '../../src/components/Dragger.vue'

const dragStyle = ref({
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '200px',
  height: '100px',
  backgroundColor: '#409eff',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold'
})

const customStyle = ref({
  left: '100px',
  top: '100px',
  width: '150px',
  height: '150px',
  backgroundColor: '#67c23a',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '14px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
})
</script>

<div class="demo-block" style="position: relative; height: 300px; overflow: hidden;">
  <Dragger :style="dragStyle">
    拖拽我试试
  </Dragger>
</div>

::: details 查看代码
```vue
<template>
  <Dragger :style="dragStyle">
    拖拽我试试
  </Dragger>
</template>

<script setup>
import { ref } from 'vue'
import Dragger from '@/components/Dragger.vue'

const dragStyle = ref({
  left: '50%',
  top: '50%',
  width: '200px',
  height: '100px',
  backgroundColor: '#409eff',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff'
})
</script>
```
:::

## 自定义样式

可以通过 `style` 属性传入自定义样式，组件会自动处理拖拽时的 `transform` 属性。

<div class="demo-block" style="position: relative; height: 300px; overflow: hidden;">
  <Dragger :style="customStyle">
    圆形拖拽
  </Dragger>
</div>

::: details 查看代码
```vue
<template>
  <Dragger :style="customStyle">
    圆形拖拽
  </Dragger>
</template>

<script setup>
import Dragger from '@/components/Dragger.vue'

const customStyle = ref({
  left: '100px',
  top: '100px',
  width: '150px',
  height: '150px',
  backgroundColor: '#67c23a',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
})
</script>
```
:::

## 特性说明

- ✅ 支持鼠标拖拽
- ✅ 支持触摸拖拽（移动端）
- ✅ 自动限制在视窗范围内
- ✅ 窗口大小改变时自动调整边界
- ✅ 拖拽时防止点击事件触发
- ✅ 使用 `transform` 实现流畅动画

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| style | 自定义样式对象 | `Object` | `{}` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 拖拽内容 |

### 注意事项

1. 组件使用 `position: fixed` 定位，确保父容器有足够的空间
2. 组件会自动处理拖拽时的 `transform` 属性，请不要在 `style` 中设置 `transform`
3. 组件会自动限制拖拽范围在视窗内，防止元素被拖出可视区域
4. 窗口大小改变时，组件会自动重新计算边界并调整位置

## 源码

::: details 查看源码
```vue
<template>
  <div
    class="dragger"
    ref="box"
    :style="dragStyle"
    @mousedown="startTouch"
    @touchstart="startTouch"
    @touchend="endTouch"
    @touchmove="moveTouch"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
});

const box = ref(null);
const isDragging = ref(false);
const dragInfo = ref({ offsetX: 0, offsetY: 0, endX: 0, endY: 0 });
const dragStyle = ref({
  ...props.style,
  transform: "translate(0, 0)",
});

// ... 其他逻辑代码
</script>

<style lang="less" scoped>
.dragger {
  position: fixed;
  z-index: 100;
  user-select: none;
  touch-action: none;
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
}
</style>
```
:::

<style>
.demo-block {
  padding: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 16px 0;
}
</style>
