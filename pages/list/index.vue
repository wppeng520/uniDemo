<!--  -->
<template>
	<view class='my-page'>
		<m-search-text placeholder="请输入姓名" @search="tapSearch"></m-search-text>
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
		<m-back-top :scrollTop="scrollTop"></m-back-top>
		<m-modal :show="showDelete" content="确定删除此数据？" @confirm="tapConfirm" @cancel="tapCancel"></m-modal>
	</view>
</template>

<script>
	
	export default {
		components: {

		},
		data() {
			return {
				scrollTop:0,
				showDelete:false
			}
		},
		onLoad() {

		},
		//监听页面滚动
		onPageScroll(res){
			this.scrollTop=res.scrollTop
		},
		/**
		* 计算属性
		*/
		computed: {
			
		},
		methods: {
			tapSearch(e){
				console.log(e);
			},
			taplongDelete(e){
				console.log(e.currentTarget.dataset.item);
				this.showDelete=true;
			},
			tapConfirm(){
				this.showDelete=false;
			},
			tapCancel(){
				this.showDelete=false;
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