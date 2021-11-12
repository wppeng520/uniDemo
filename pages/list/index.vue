<!--  -->
<template>
	<view class='my-page'>
		<m-search-text placeholder="请输入姓名" @search="tapSearch"></m-search-text>
		<m-card>
			<view class="user">
				<image src="/static/test/1.jpg" mode="aspectFill"></image>
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
		<m-card>
			<view class="user">
				<image src="/static/test/1.jpg" mode="aspectFill"></image>
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
	</view>
</template>

<script>
	
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		/**
		* 计算属性
		*/
		computed: {
			
		},
		methods: {
			tapSearch(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		display: flex;
		image{
			height: 100rpx;
			width: 100rpx;
			border-radius: 50rpx;
		}
		text{
			font-size: 28rpx;
			font-weight: bold;
			padding-left: 10rpx;
			padding-top: 20rpx;
		}
	}
	.speak{
		padding-left: 50rpx;
		padding-top: 10rpx;
		text{
			font-size: 28rpx;
		}
		.image{
			display: flex;
			flex-wrap: wrap;
			image{
				height: 160rpx;
				margin: 10rpx;
				border-radius: 10rpx;
			}
		}
	}
</style>