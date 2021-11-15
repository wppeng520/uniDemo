#### 组件说明

该组件一个用于长页面，滑动一定距离后，出现返回顶部按钮，方便快速返回顶部的场景。


#### 基本使用

```
<m-back-top :scrollTop="scrollTop"></m-back-top>

data() {
	return {
		scrollTop:0
	}
},
//监听页面滚动
onPageScroll(res){
	this.scrollTop=res.scrollTop
},

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`scrollTop`|页面滚动距离|`Number`|0|-|
|`bgColor`|按钮背景色|`String`|#0fa3fa|-|

说明
由于返回顶部需要实时监听滚动条的位置，从而判断返回的按钮该出现还是隐藏，由于组件无法得知页面的滚动条信息，只能在页面的onPageScroll生命周期 中获得滚动条的位置，故需要在页面监听onPageScroll生命周期，实时获得滚动条的位置，通过Props传递给组件。

