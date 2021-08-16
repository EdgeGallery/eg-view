## Theme
Based on the Element UI theme, a set of EdgeGallery-style theme colors are provided.

### Usa Introduction
Add the following code to the entry file of the project, such as the main.js file:

```shell
import './assets/style/element-variables.scss'
```

Examples of theme color components:

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
          点击效果
      </el-button>
  </el-col>
</el-row>
```
:::
