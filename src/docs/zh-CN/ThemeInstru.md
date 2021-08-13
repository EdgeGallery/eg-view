## 主题色
基于Element UI主题，提供了一套EdgeGallery风格的主题色。

### 基础用法
在项目的入口文件如main.js文件中添加如下代码：

```shell
import './assets/style/element-variables.scss'
```

主题色组件示例：

:::demo 

```html
<el-row>
  <el-col :span="5" class="normalbutton">
      <el-button
        class="newproject_btn linearGradient"
        >
          默认按钮
      </el-button>
  </el-col>
  <el-col :offset="2" :span="5" class="activebutton">
      <el-button
        class="newproject_btn linearGradientActive"
        >
          主要按钮
      </el-button>
  </el-col>
</el-row>
```
:::
