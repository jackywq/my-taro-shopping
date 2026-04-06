# 电商购物 App (My Taro Shopping)

## 概述
本项目是一个基于 [Taro](https://taro.zone/) 框架开发的跨端电商购物应用。采用 React + TypeScript + Less 技术栈构建，支持编译到微信小程序、H5、支付宝小程序等多个平台。项目内置了首页、分类、购物车和个人中心等核心电商业务模块的 UI 骨架。

## 目录结构
```text
├── config/             # Taro 编译配置
├── design-images/      # UI 设计稿及参考图
├── src/                # 源码目录
│   ├── assets/         # 静态资源 (如 TabBar 图标)
│   ├── pages/          # 页面组件
│   │   ├── cart/       # 购物车
│   │   ├── category/   # 商品分类
│   │   ├── home/       # 首页
│   │   ├── index/      # 启动/默认页面
│   │   └── profile/    # 个人中心
│   ├── app.config.ts   # 全局配置 (如 TabBar、路由)
│   ├── app.less        # 全局样式
│   └── app.ts          # 项目入口
├── types/              # TypeScript 类型定义
└── package.json
```

## 前置条件
- **Node.js**: 建议版本 >= 18.x
- **包管理器**: npm (推荐) 或 yarn
- **Taro CLI**: `@tarojs/cli@4.1.11` (建议全局安装与项目匹配的版本 `npm install -g @tarojs/cli@4.1.11`)
- **微信开发者工具**（如需开发和预览微信小程序端）

## 快速开始

### 1. 安装依赖

```bash
# 确保在项目根目录
cd my-taro-shopping

# 安装项目依赖
npm install
```

### 2. 启动开发环境 (Development)

Taro 支持多端编译，可根据需要运行对应命令进行开发预览：

```bash
# 启动微信小程序开发模式 (支持热更新)
npm run dev:weapp

# 启动 H5 端开发模式
npm run dev:h5

# 启动支付宝小程序开发模式
npm run dev:alipay
```
*注：编译微信小程序后，请打开微信开发者工具，导入本项目的根目录即可预览效果。*

### 3. 项目构建 (Production)

当需要打包上线时，运行 build 命令：

```bash
# 构建微信小程序生产包
npm run build:weapp

# 构建 H5 生产包
npm run build:h5
```

## 使用指南

### 1. 代码规范与提交流程
本项目集成了完整的代码检查工作流：
- **代码规范**：配置了 `ESLint` 与 `Stylelint`，用于校验 TypeScript 与 Less 代码风格。
- **Git Hook**：引入了 `Husky` 和 `lint-staged`，在执行 `git commit` 时会自动校验修改的代码文件。
- **提交规范**：集成了 `Commitlint`。提交代码时，Commit Message 必须遵循 [Angular 规范](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)，例如：
  - `feat: 增加商品列表接口对接`
  - `fix: 修复购物车金额计算错误`
  - `style: 优化个人中心 UI 细节`

### 2. 环境变量
项目根目录提供了多套环境变量文件，可用于区分不同环境的 API 接口等信息：
- `.env.development`: 本地开发环境
- `.env.production`: 生产环境
- `.env.test`: 测试环境

## 常见问题

### Q: 微信开发者工具中报错 "找不到 app.json"？
A: 这是因为还没有生成编译产物。请先在终端执行 `npm run dev:weapp`，Taro 会将源代码编译并生成相关文件。保持该命令处于运行（watch）状态，然后再到开发者工具中进行预览。

### Q: `git commit` 提交失败，被 Husky 拦截？
A: 请仔细阅读终端输出的错误信息。可能的原因有两个：
1. **代码格式不规范**：修改的文件未通过 ESLint 或 Stylelint 检查。请按照报错信息修复代码错误。
2. **提交信息格式不正确**：请确保 Commit Message 以规定的前缀（如 `feat: `, `fix: `, `docs: ` 等）开头，注意冒号后面需要有一个空格。
