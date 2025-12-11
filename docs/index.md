---
layout: home

hero:
  name: Z-Business Tools
  text: Vue 3 业务组件库
  tagline: 基于 Vue 3 + Element Plus 的业务组件、Composables 和工具函数
  actions:
    - theme: brand
      text: 开始使用
      link: /components/button-group
    - theme: alt
      text: 查看源码
      link: https://github.com/your-username/z-business-tools

features:
  - icon: 🧩
    title: 业务组件
    details: 常用业务场景的组件，开箱即用
  - icon: 🔄
    title: 组合函数
    details: 基于 Composition API 的可复用逻辑
  - icon: 🛠️
    title: 工具函数
    details: 日期、字符串、数组等常用工具函数
  - icon: ⚡
    title: Vue 3 + TypeScript
    details: 现代化技术栈，完整类型支持
---

<script setup>
import { ref } from 'vue'
</script>

## 快速开始

```bash
# 安装依赖
npm install

# 启动文档
npm run dev
```

## 项目结构

```
src/
├── components/     # 业务组件
├── composables/    # 组合函数
└── utils/          # 工具函数
```