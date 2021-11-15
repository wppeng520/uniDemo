<!-- 小红点 -->
<template>
	<view class="m-badge" >
		<text v-if="value!=0" class="m-badge-text" :style="{backgroundColor:bgColor}">{{value}}</text>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			bgColor: {
				type: String,
				default: '#F56C6C'
			},
			value: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-badge {
		position: relative;
		.m-badge-text{
			position: absolute;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 24rpx;
			height: 30rpx;
			padding: 4rpx 8rpx;
			border-radius: 100rpx;
			z-index: 9;
			font-size: 24rpx;
			right: -10rpx;
			top: -10rpx;
		}
		
	}
</style>
