<!--  -->
<template>
	<view class="m-loadmore">
		<m-loading v-if="status=='loading'"></m-loading>
		<text v-else>{{showText}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			//loading,loadmore,nomore
			status: {
				type: String,
				default: 'loadmore'
			}
		},
		data() {
			return {

			}
		},
		created() {

		},
		//页面渲染完成
		mounted() {

		},
		watch: {

		},
		/**
		 * 计算属性
		 */
		computed: {
			// 显示的提示文字
			showText() {
				let text = '';
				if (this.status == 'loadmore') text = "加载更多";
				else if (this.status == 'loading') text = "加载中...";
				else text = "没有更多数据了";
				return text;
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.m-loadmore{
		display: flex;
		justify-content: center;
		padding: 20rpx 0;
		font-size: 28rpx;
		color: #909399;
	}
</style>
