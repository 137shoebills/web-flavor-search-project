# web-flavor-search-project

# 课设技术栈+环境配置

## 技术栈简介

项目来源: https://github.com/lmxdawn/vue-admin-html-java

前端使用 Vue，后端使用 spring boot

vue 和 nodejs 的关系：
https://www.cnblogs.com/hmit/p/12036587.html

## git 配置

frontend 和 backend 文件夹中都有.gitignore 文件对无需上传仓库的目录进行忽略，不需要额外处理。

## 后端环境配置

1. 安装 Jdk 工具包 (最好安装 **java8**，后面的版本不一定兼容之前的，为了和模板代码一致所以选择 **java8** )
   https://www.itcast.cn/news/20191113/11025871604.shtml

   https://www.oracle.com/cn/java/technologies/downloads/#java8-windows

2. 安装 mvn
   参考：https://www.cnblogs.com/dingguofeng/p/8671661.html

3. 安装 VScode

4. 安装 VScode 插件
   在 vscode 插件库(快捷键：Ctrl+Shift+X)中安装 Java Extension Pack  和 Spring Boot Extension，

   下载之后会看到关联插件也会自动下载

   1. Java Extension Pack 相关联的

      Language Support for Java(TM) by Red Hat，Debugger for Java，Java Test Runner，Maven for Java，Java Dependency Viewer，Visual Studio IntelliCode

   2. Spring Boot Extension 相关联的

      Spring Boot Tools，Concourse CI Pipeline Editor，Cloudfoundry Manifest YML Support，Spring Initializr Java Support，Spring Boot Dashboard

   参考https://www.cnblogs.com/chywx/p/12910298.html

5. 打开项目文件夹或者新建项目
   点击左侧的 Spring Boot Dashboard 右侧的运行按钮

## 前端环境配置

前端环境安装：安装 nvm、安装 **16.14.0** 版本的 node.js 并配置环境变量: https://blog.csdn.net/Trista_1999/article/details/96998638#t1

```
// 终端进入frontend目录
// npm install
// npm run serve

//更详细的信息参见 https://github.com/lmxdawn/vue-admin-html-java
```

VSCode 代码格式配置：https://blog.zuiyu1818.cn/posts/VScode_Vue.html
