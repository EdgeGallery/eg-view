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

- [模态框](#模态框)

- [表格](#表格)

- [底部组件](#底部组件)


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
静态横幅广告组件可以呈现单张横幅图片。组件名称为：EgBanner
#### 样例

![样例-静态横幅图片](/src/assets/images/静态横幅.png)
样例代码见[pages/Home.vue](/src/pages/Home.vue)
#### 参数列表
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
|imageUrl|静态横幅图片url（assets目录下的文件）|String| -|logo.png |
|height|静态横幅高度|Number| -| 300|
### 动态横幅广告
动态横幅广告火力开发中，敬请期待。。。
## 面包屑
基于Element UI的面包屑，对面包屑进行了封装，方便开发和统一样式。组件名称为：EgBreadCrumb

### 样例
![样例-面包屑图片](/src/assets/images/面包屑.png)
样例代码见[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### 参数列表
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
|data|面包屑数据|Array，如 [{name: '首页',path: '/'}, {name: '内部页',path: '/innerPage'}]| -|[] |
## 模态框
基于Element UI的模态框，对模态框组件进行了样式修改，包括title、body、footer，button-group等，方便开发和统一样式。

### 样例
![样例-模态框图片-对话框](/src/assets/images/模态框1.png)
![样例-模态框图片-表单](/src/assets/images/模态框2.png)

样式代码见[style/normal.css](/src/assets/style/normal.css)  
样例代码见[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### 参数列表
NA

## 表格
基于Element UI的表格组件，对表格组件进行了样式修改，包括宽高,背景色，内容过多溢出悬浮显示等，方便开发和统一样式。

### 样例
![样例-表格暂无数据图片](/src/assets/images/表格无数据.png)
![样例-表格数据](/src/assets/images/有数据表格.png)

样例代码见[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### 参数列表
NA

## 分页组件
基于Element UI的分页组件，对分页组件进行了封装，方便开发和统一样式。组件名称为：EgPagination

### 样例
![样例-分页组件](/src/assets/images/分页组件.png)

样例代码见[pages/InnerPage.vue](/src/pages/InnerPage.vue)

### 参数列表
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
|pageNum|当前页码|number| -|1 |
|pageSizes|每页条数的可选值|Array| -| [10, 20, 30]|
|pageSize|当前选择的每页条数|number| -| 10|
|total|共total条|number| -| 0|

### 事件
|事件|说明|回调参数|
|:-|:-|:-|
|sizeChange|选择每页条数时会触发|选中的每页条数|
|currentChange|选择当前页时会触发|选中的页码|

## 底部组件
底部组件分为上下两部分，上部分展示的是“关于Edgegallery、资源、开发者、社区介绍、关注我们”等友情链接，下半部分展示的是版权信息及法律声明、政策隐私的链接。组件名称为：EgFooter

### 样例
![样例-底部组件](/src/assets/images/底部组件.png)

样例代码见[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### 参数列表
|参数|说明|类型|可选值|默认值|
|:-|:-|:-|:-|:-|
|platformData|关于Edgegallery栏目下除了“Edgegallery官网”，其他要跳转的平台的名称和链接|Array| -|[] |
|showFullFooterPage|根据路由判断，是否是要显示底部上下两部分的页面|Boolean| -| true|
|specificBg|根据路由判断，是否是跟底部衔接，需要指定特定背景色的页面|Boolean| -| true|
|specificBgColor|需要指定的特定的背景色|String| -| #ffffff|
