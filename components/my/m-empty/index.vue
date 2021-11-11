<!-- 内容为空 -->
<template>
	<view class="m-empty">
		<text class="icondemo demo-wushuju1 empty-icon"></text>
		<text class="empty-text">暂无数据</text>
	</view>
</template>

<style lang="scss" scoped>
	.m-empty{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #909399;
		padding: 20rpx 0;
		.empty-icon{
			font-size: 100rpx;
			color: #909399;
		}
		.empty-text{
			padding-top: 10rpx;
			font-size: 28rpx;
		}
	}
</style>