<!-- 时间线 -->
<template>
	<view class="m-timeline">
		<view class="left">
			<view class="view-icon">
				<slot name="node">
					
				</slot>
			</view>
			<view class="line" :style="{backgroundColor:activeline?'#67C23A':'#C0C4CC'}" v-if="!finishnode">
				
			</view>
		</view>
		<view class="right">
			<slot name="content">
				
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			activeline: {
				type: Boolean,
				default: false
			},
			finishnode:{
				type: Boolean,
				default: false
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

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.m-timeline{
		display: flex;
		.left{
			padding-left: 60rpx;
			.view-icon{
				position: relative;
				z-index: 99;
			}
			.line{
				position: relative;
				left:12rpx;
				top: -10rpx;
				width: 1px;
				height: calc(100% - 26rpx);
				z-index: 90;
			}
		}
		.right{
			padding: 0 40rpx 20rpx 20rpx;
			
		}
	}
</style>