#### 组件说明

该组件一般用于列表卡片


#### 基本使用

```
<m-card v-for="(item,index) in 10" :key="index" :data-item="item" @taplong="taplongDelete">
	<view class="user">
		<m-badge :value="10">
			<image src="/static/test/1.jpg" mode="aspectFill"></image>
		</m-badge>
		<text>李美美</text>
	</view>
	<view class="speak">
		<text>今天天气很好</text>
		<view class="image">
			<image src="/static/test/1.jpg" mode="heightFix"></image>
			<image src="/static/test/1.jpg" mode="heightFix"></image>
		</view>
	</view>
</m-card>

taplongDelete(e){
	console.log(e.currentTarget.dataset.item);
	this.showDelete=true;
},
```

#### Events

|事件名称|说明|回调参数|
|:---|:---|:---|
|`taplong`|长按事件|{e.currentTarget.dataset: 列表`data-`的值}|
