<template>
	<view class="page">
		<view class="model">
			<text class="label">表单组件</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
		<view class="model">
			<text class="label">附件上传</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style scoped>
	.model{
		padding: 30rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #EBEEF5;
	}
	.label{
		font-size: 28rpx;
	}
	.right-icon{
		font-size: 32rpx;
		color: #909399;
	}
</style>
