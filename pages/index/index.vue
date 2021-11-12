<template>
	<view class="page">
		<view class="model" @click="tapForm">
			<text class="label">表单组件</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
		<view class="model" @click="tapUplad">
			<text class="label">附件上传</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
		<view class="model" @click="tapList">
			<text class="label">列表</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
		<view class="model" @click="tapTree">
			<text class="label">树结构</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
		<view class="model" @click="tapLoading">
			<text class="label">加载中</text>
			<text class="icondemo demo-you right-icon"></text>
		</view>
		<view class="model" @click="tapEmpty">
			<text class="label">内容为空</text>
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
			tapForm() {
				uni.navigateTo({
					url:'../form/index'
				})
			},
			tapUplad(){
				uni.navigateTo({
					url:'../file/index'
				})
			},
			tapLoading(){
				uni.navigateTo({
					url:'../loading/index'
				})
			},
			tapEmpty(){
				uni.navigateTo({
					url:'../empty/index'
				})
			},
			tapList(){
				uni.navigateTo({
					url:'../list/index'
				})
			},
			tapTree(){
				uni.navigateTo({
					url:'../tree/index'
				})
			}
		}
	}
</script>

<style scoped>
	.model {
		padding: 30rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #EBEEF5;
	}

	.label {
		font-size: 28rpx;
	}

	.right-icon {
		font-size: 32rpx;
		color: #909399;
	}
</style>
