#### 组件说明

此组件为一个顶部搜索框

#### 基本使用

```
<m-search-text placeholder="请输入姓名" @search="tapSearch"></m-search-text>

tapSearch(e){
	console.log(e);
}

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`placeholder`|`placeholder`显示值|`String`|请输入要搜索的内容|-|

#### Events

|事件名称|说明|回调参数|
|:---|:---|:---|
|search|确认搜索|e要搜索的内容|

