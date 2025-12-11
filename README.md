# Z-Business Tools

一个基于 Vue 2 的业务组件库展示项目，包含常用的业务组件、Vue Mixins 和工具函数。

## ✨ 特性

- 🚀 基于 Vite 构建，快速的开发体验
- 🧩 丰富的业务组件库
- 🔄 可复用的 Vue Mixins
- 🛠️ 实用的工具函数库
- 📱 响应式设计，支持移动端
- 🎨 基于 Element UI，美观的界面设计

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/your-username/z-business-tools.git
cd z-business-tools

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🏗️ 项目结构

```
src/
├── business-components/     # 业务组件
│   ├── ZButtonGroup.vue    # 按钮组组件
│   └── ...
├── mixins/                 # Vue Mixins
│   ├── formMixin.js        # 表单混入
│   └── ...
├── utils/                  # 工具函数
│   ├── dateUtils.js        # 日期工具
│   └── ...
├── pages/                  # 页面组件
│   ├── Home.vue           # 首页
│   ├── components/        # 组件示例页面
│   ├── mixins/           # 混入示例页面
│   └── utils/            # 工具函数示例页面
├── router/                # 路由配置
├── styles/               # 样式文件
└── ...
```

## 🧩 组件列表

### 业务组件
- **ZButtonGroup** - 按钮组组件，支持多种布局和样式
- **更多组件开发中...**

### Vue Mixins
- **FormMixin** - 表单数据管理、验证、重置功能
- **ListMixin** - 列表数据加载、分页、搜索功能
- **DialogMixin** - 对话框显示、隐藏、数据传递
- **PermissionMixin** - 权限控制和路由守卫

### 工具函数
- **dateUtils** - 日期格式化、计算、验证
- **stringUtils** - 字符串处理函数
- **arrayUtils** - 数组操作工具
- **objectUtils** - 对象操作工具
- **storageUtils** - 本地存储工具

## 📖 使用文档

详细的使用文档请查看 [使用文档](./docs/README.md)

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