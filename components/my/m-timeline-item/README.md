#### 组件说明

时间轴组件一般用于物流信息展示，各种跟时间相关的记录等场景。

#### 基本使用

```
<m-timeline-item :activeline="true">
	<template v-slot:node>
		<view class="timeline-node">
			<text class="icondemo demo-luyin finish-icon"></text>
		</view>
	</template>
	<template v-slot:content>
		<view class="timeline-content">
			<view class="title">
				<text>李四</text>
			</view>
			<view class="content">
				<text class="state">已取件</text>
				<text class="remark">今天天气很好</text>
			</view>
			<view class="time">
				<text>2021.11.15 08:30</text>
			</view>
		</view>
	</template>
</m-timeline-item>
<m-timeline-item>
	<template v-slot:node>
		<view class="timeline-node">
			<text class="icondemo demo-icon_duihao-mian active-icon"></text>
		</view>
	</template>
	<template v-slot:content>
		<view class="timeline-content">
			<view class="title">
				<text>李四</text>
			</view>
			<view class="content">
				<text class="state">运输中</text>
				<text class="remark">今天天气很好，我跑的飞快</text>
			</view>
			<view class="time">
				<text>2021.11.16 08:30</text>
			</view>
		</view>
	</template>
</m-timeline-item>

<m-timeline-item :finishnode="true">
	<template v-slot:node>
		<view class="timeline-node">
			<text class="icondemo demo-luyin node-icon"></text>
		</view>
	</template>
	<template v-slot:content>
		<view class="timeline-content">
			<view class="title">
				<text>王五</text>
			</view>
			<view class="content">
				<text class="state">等待签收</text>
				<text class="remark">快点吧，我已经等的很久了</text>
			</view>
			<view class="time">
				<text></text>
			</view>
		</view>
	</template>

</m-timeline-item>


```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`activeline`|是否经过了此节点，用于把完成的节点连线变为绿色|`Boolean`|`false`|`false` / `true`|
|`finishnode`|节点类型，用于判断是否为最后一个节点|`Boolean`|`false`|`false` / `true`|


