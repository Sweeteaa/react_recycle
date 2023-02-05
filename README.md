#旧物回收利用平台

```mermaid
gantt
title 开发计划
dateFormat YYYY-MM-DD

section 初期
项目启动 :des1,2022-12-20,01d
需求分析 :des2,2022-12-23,04d
section 中期
软件设计 :des3,2023-01-03,2023-01-05
软件编码 :des4,2023-01-07,2023-02-20
section 后期
软件测试 :des5,2023-02-22,04d
项目交付 :des6,2023-02-27,04d
```

组件库：[Ant Design Mobile](https://mobile.ant.design/zh "Ant Design Mobile")


***

###- 页面
    - 登录/注册
    - 首页
    - 利用
    - 我的

***

###- 模块：
    - 登录/注册
    - 物流信息（登录后可查看）
    - 利用
    - 用户信息（登录后显示信息）
    - 路由管理

***

### 登录注册——Author

请求后端数据方式：axios
状态管理：redux，浏览器安装redux插件Redux DevTools

数据持久化：将数据同时存储到本地存储



