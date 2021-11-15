<!--  -->
<template>
	<view class="m-card" @longpress="taplong">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		methods: {
			taplong(e) {
				let that = this;
				
				that.$emit('taplong',e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-card{
		padding: 20rpx;
		margin: 20rpx;
		background-color: #F2F6FC;
		border-radius: 20rpx;
	}
</style>