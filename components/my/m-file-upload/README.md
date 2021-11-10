#### 组件说明

此组件为一个上传图片的组件封装

#### 调用第三方组件说明

1. 图片上传进度使用了`uview`的进度条组件 `u-line-progress`

#### 基本使用

```
<m-file-upload label="上传图片" :initlist="list" ></m-file-upload>

data() {
	return {
		list:[{
			id:1,
			path:'/static/test/1.jpg'
		}]
	}
},

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`initlist`|初始化显示的附件，一般用于编辑页面,数据结构[{id:'',path:''}]|`Array`|[]|-|


