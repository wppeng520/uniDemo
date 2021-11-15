#### 组件说明

该组件一般用于图标右上角显示未读的消息数量


#### 基本使用

```
<m-badge :value="10">
	<image src="/static/test/1.jpg" mode="aspectFill"></image>
</m-badge>

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`value`|徽章内部数据，0不显示徽章|`Number`|0|-|
|`bgColor`|徽章背景色|`String`|#F56C6C|-|

说明
组件包裹的是要显示徽章的元素
