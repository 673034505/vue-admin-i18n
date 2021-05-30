
  > ## :gem: Vue自动化管理系统
</p>


## 功能
```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限

- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 锁屏
  - 疑问
  - 转到github
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地mock数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown

- Excel
  - 导出excel
  - 导出zip
  - 导入excel
  - 前端可视化excel

- 表格
  - 树形表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 返回顶部
  - 拖拽Dialog
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- Dashboard
- v-charts 图表
- Clipboard(剪贴复制)
- Markdown2html
- 首屏加载等待动画
- Fontawesome 图标库
- vuex本地持久化存储,封装h5的sessionStorage和localStorage
- 右键菜单
- github-emoji
- 第三方网站
- 动态文字说明

```


## 开发
```bash
# 安装依赖
npm install
   
# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
浏览器访问 http://localhost:9528

## 发布
```bash
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
```

## 其它
```bash
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```
