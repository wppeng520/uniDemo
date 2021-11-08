#### 项目说明

	整理自己封装使用过的一些组件

#### 项目搭建

1. 配置组件自动注册
在```pages.json```文件下添加下面代码
```
"easycom": {
	"autoscan": true,
	"custom": {
		"m-(.*)": "@/components/my/m-$1/index.vue" ,// 匹配components目录内的vue文件
		"p-(.*)": "@/components/plug/p-$1/index.vue" 
	}
},
```

2. 项目目录说明

```components```: 公用组件目录
  ```my```: 自己封装的目录
  ```plug```: 使用别人封装的目录（插件）
```css```: 公用css目录
```pages```: 项目目录
```static```: 静态资源目录（图片，图标等）

3. 使用阿里图标库图标

在阿里图标库中新建项目，如图所示
![新建项目](README_files/1.png)

复制生成的```Font class``` 样式到```css-icon.css```文件

在项目```App.vue```中引用```icon.css```文件全局使用
```
@import url("./css/icon.css");

```


