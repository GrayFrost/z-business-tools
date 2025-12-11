# Z-Business Tools

一个基于 Vue 3 + VitePress 的业务组件库展示项目，包含常用的业务组件、Vue Composables 和工具函数。

## ✨ 特性

- 🚀 基于 Vite 构建，快速的开发体验
- 📚 基于 VitePress 的交互式文档，支持组件实时预览
- 🧩 丰富的业务组件库
- 🔄 可复用的 Vue Composables
- 🛠️ 实用的工具函数库
- 📱 响应式设计，支持移动端
- 🎨 基于 Element Plus 的美观界面，支持深色模式
- 🔍 内置搜索功能，支持组件快速查找
- ⚡ 基于 Vue 3 Composition API，性能更佳

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/your-username/z-business-tools.git
cd z-business-tools

# 安装依赖
npm install

# 启动文档服务器（推荐）
npm run docs:dev

# 构建文档网站
npm run docs:build

# 预览构建结果
npm run docs:preview

# 或者使用传统Vue开发模式
npm run dev
```

## 📖 文档结构

项目使用 VitePress 构建专业的组件库文档网站：

- **📚 交互式文档** - 支持组件实时预览和功能展示
- **🔍 内置搜索** - 快速查找组件和API
- **🎨 主题切换** - 支持浅色/深色模式
- **📱 响应式设计** - 完美支持移动端

### 文档内容

#### 🧩 组件文档
- **按钮组组件** - 支持多种布局和样式配置，可实时预览
- **数据表格** - 功能丰富的数据展示组件
- **搜索表单** - 灵活的搜索表单组件
- **文件上传** - 支持多文件上传
- **富文本编辑器** - 强大的文本编辑功能

#### 🔄 Mixins 文档
- **表单混入** - 表单数据管理、验证、重置功能
- **列表混入** - 数据加载、分页、搜索功能
- **对话框混入** - 弹窗显示和数据传递
- **权限混入** - 用户权限控制

#### 🛠️ 工具函数文档
- **日期工具** - 日期格式化、计算、验证
- **字符串工具** - 文本处理函数
- **数组工具** - 数组操作方法
- **对象工具** - 对象操作工具
- **存储工具** - 本地存储管理

## 🏗️ 项目结构

```
z-business-tools/
├── docs/                          # VitePress 文档
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.js            # 站点配置
│   │   ├── theme/              # 自定义主题
│   │   └── components/         # 文档演示组件
│   ├── components/              # 组件文档 (Markdown)
│   ├── mixins/                 # Mixins 文档
│   ├── utils/                  # 工具函数文档
│   └── index.md                # 首页
├── src/                         # 源代码
│   ├── business-components/    # 业务组件 (Vue 3 Composition API)
│   │   ├── ZButtonGroup.vue    # 按钮组组件
│   └── ...
│   ├── composables/            # Vue Composables
│   │   ├── useForm.js          # 表单组合函数
│   └── ...
│   ├── utils/                  # 工具函数
│   │   ├── dateUtils.js        # 日期工具
│   └── ...
│   └── styles/                 # 样式文件
├── package.json                # 项目配置
└── README.md                   # 项目说明
```

## 🧩 组件列表

### 业务组件
- **ZButtonGroup** - 按钮组组件，支持多种布局和样式
- **更多组件开发中...**

### Vue Composables
- **useForm** - 表单数据管理、验证、重置功能
- **useList** - 列表数据加载、分页、搜索功能
- **useDialog** - 对话框显示、隐藏、数据传递
- **usePermission** - 用户权限控制和路由守卫

### 工具函数
- **dateUtils** - 日期格式化、计算、验证
- **stringUtils** - 字符串处理函数
- **arrayUtils** - 数组操作工具
- **objectUtils** - 对象操作工具
- **storageUtils** - 本地存储工具

## 📖 使用文档

启动文档服务器后，您可以：

1. **浏览组件** - 在左侧导航栏查看所有组件
2. **实时预览** - 每个组件页面都包含可交互的演示
3. **查看源码** - 点击"查看代码"按钮查看实现
4. **API 文档** - 详细的属性、事件和方法说明
5. **搜索功能** - 使用右上角搜索快速查找

### 快速开始

```bash
# 启动文档服务器
npm run docs:dev

# 访问 http://localhost:4173 查看文档
```

### 开发组件

```bash
# 添加新组件到 src/business-components/
# 创建对应的文档页面 docs/components/
# 添加演示组件到 docs/.vitepress/components/
```

## 🎯 Vue 3 + VitePress 优势

- **🚀 现代化技术栈** - Vue 3 Composition API + TypeScript 支持
- **⚡ 高性能** - 更快的运行时性能和更好的 Tree-shaking
- **🛠️ 开发者体验** - 更好的 TypeScript 支持和 IDE 提示
- **📚 专业文档** - VitePress 提供开箱即用的文档站点
- **🔍 搜索功能** - 内置 Algolia 搜索，无需额外配置
- **🎨 主题系统** - 支持深色模式和主题定制
- **📱 响应式** - 移动端友好的文档界面

## 🎯 VitePress vs 传统Vue应用

| 特性 | VitePress 文档 | 传统Vue应用 |
|------|---------------|-------------|
| 技术栈 | Vue 3 + Composition API | Vue 2/3 任选 |
| 目标用户 | 开发者/使用者 | 最终用户 |
| 交互性 | 组件演示 + 文档 | 完整应用功能 |
| 更新频率 | 随组件更新 | 独立部署周期 |
| 搜索功能 | 内置全文搜索 | 需要额外实现 |
| 主题定制 | 专业文档主题 | 完全自定义UI |
| 构建产物 | 静态站点 | 单页应用/SPA |
| SEO | 天然支持 | 需要额外配置 |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者

- **Your Name** - *Initial work* - [your-username](https://github.com/your-username)

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Element UI](https://element.eleme.cn/) - Vue 2 的组件库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具