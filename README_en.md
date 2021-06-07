# Introduction

eg-viewServices forEdgeGallery，Mainly used for normalizationEdgeGalleryinterface style。eg-viewbased onElement UIProvides a set suitable forEdgeGalleryComponents of the platform。

# Installation Notes

Enter your project，Installation dependencies：

`> npm install postcss-import@^11.0.0`

`> npm install postcss-loader@^2.0.8`

`> npm install postcss-url@^7.2.1`

installationeg-view：

`> npm install eg-view`

# eg-viewComponent list

eg-viewThe following components are provided，forEdgeGalleryFront-end development reference：

- [Interface theme style](#Interface theme style)

- [Banner ad](#Banner ad)

- [Bread crumbs](#Bread crumbs)

- [Modal box](#Modal box)

- [form](#form)


## Interface theme style
based onElement UItheme，Provided a setEdgeGallery风格的theme样式

### Sample
![Sample-Interface theme style](/src/assets/images/Interface theme color.png)
### Instructions for use
In the projectmain.jsAdd the following code to the file：

`import './assets/style/element-variables.scss'`

## Banner ad
Banner ads are applied to the top of the page。eg-viewProvides the following types of banner ads：

- [Static banner](#Static banner)

- [Dynamic banner ads](Dynamic banner ads)

### Static banner
The static banner ad component can render a single banner image。The component name is：EgBanner
#### Sample

![Sample-Static banner image](/src/assets/images/Static banner.png)
See sample code[pages/Home.vue](/src/pages/Home.vue)
#### parameter list
|parameter|Description|Types of|Optional value|Defaults|
|:-|:-|:-|:-|:-|
|imageUrl|Static banner imageurl（assetsFiles in the directory）|String| -|logo.png |
|height|Static banner height|Number| -| 300|
### Dynamic banner ads
Dynamic banner ad firepower is under development，Stay tuned。。。
## Bread crumbs
based onElement UIBreadcrumbs，Encapsulated the breadcrumbs，Convenient development and unified style。The component name is：EgBreadCrumb

### Sample
![Sample-Breadcrumb pictures](/src/assets/images/Bread crumbs.png)
See sample code[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### parameter list
|parameter|Description|Types of|Optional value|Defaults|
|:-|:-|:-|:-|:-|
|data|Breadcrumb data|Array，Such as [{name: 'Home',path: '/'}, {name: 'Internal page',path: '/innerPage'}]| -|[] |
## Modal box
based onElement UIModal box，Modified the style of the modal component，includetitle、body、footer，button-groupWait，Convenient development and unified style。

### Sample
![Sample-Modal picture-Dialog box](/src/assets/images/Modal box1.png)
![Sample-Modal picture-Form](/src/assets/images/Modal box2.png)

See the style code[style/normal.css](/src/assets/style/normal.css)  
See sample code[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### parameter list
NA

## form
based onElement UITable component，Modified the style of the table component，Including width and height,Background color，Excessive content overflows floating display, etc.，Convenient development and unified style。

### Sample
![Sample-No data in the table](/src/assets/images/No data in the table.png)
![Sample-Tabular data](/src/assets/images/Data table.png)

See sample code[pages/InnerPage.vue](/src/pages/InnerPage.vue)
### parameter list
NA

## Paging component
based onElement UIPaging component，The paging component is encapsulated，Convenient development and unified style。The component name is：EgPagination

### Sample
![Sample-Paging component](/src/assets/images/Paging component.png)

See sample code[pages/InnerPage.vue](/src/pages/InnerPage.vue)

### parameter list
|parameter|Description|Types of|Optional value|Defaults|
|:-|:-|:-|:-|:-|
|pageNum|Current page number|number| -|1 |
|pageSizes|Optional value of the number of items per page|Array| -| [10, 20, 30]|
|pageSize|The number of items per page currently selected|number| -| 10|
|total|TotaltotalArticle|number| -| 0|

### event
|event|Description|Callback parameter|
|:-|:-|:-|
|sizeChange|Triggers when the number of items per page is selected|Number of items per page selected|
|currentChange|Triggered when the current page is selected|Selected page number|

