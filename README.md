# 简介

eg-view服务于EdgeGallery，主要用于规范化EdgeGallery界面风格。eg-view基于Element UI提供了一套适用于EdgeGallery平台的组件。

# 安装说明

进入你的项目，安装依赖：

`> npm install postcss-import@^11.0.0`

`> npm install postcss-loader@^2.0.8`

`> npm install postcss-url@^7.2.1`

安装eg-view：

`> npm install eg-view`

# eg-view组件列表

eg-view提供了如下组件，供EdgeGallery前端开发引用：

- [界面主题样式](#界面主题样式)

- [横幅广告](#横幅广告)

- [面包屑](#面包屑)


## 界面主题样式
基于Element UI主题，提供了一套EdgeGallery风格的主题样式

### 样例
![样例-界面主题样式](/src/assets/images/界面主题色.png)
### 使用说明
在项目的main.js文件中添加如下代码：

`import './assets/style/element-variables.scss'`

## 横幅广告
横幅广告适用于页面的顶端。eg-view提供了如下类型的横幅广告：

- [静态横幅广告](#静态横幅广告)

- [动态横幅广告](动态横幅广告)

### 静态横幅广告
静态横幅广告组件可以呈现单张横幅图片。组件名称为：BannerImage
#### 样例
![样例-静态横幅图片](/src/assets/images/静态横幅图片.png)
#### 参数列表
|中文|英文|说明|
|:-|:-|:-|
|亲和属性|Affinity|App在运行过程中更加依赖的能力。|
|镜像|Image|Docker镜像，一般包含了操作系统和应用软件。|
|部署|Deployment|App开发完成后需要部署到环境上，供消费者使用。|
### 动态横幅广告

## 面包屑

