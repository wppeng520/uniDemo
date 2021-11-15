<!-- 悬浮按钮滚动到顶部 -->
<template>
	<view :animation="animationData" class="m-top" :style="{backgroundColor:bgColor}" @tap="tapTop">
		<text class="icondemo demo-huidingbu top-icon"></text>
	</view>
</template>

<script>
	let animation = uni.createAnimation({
		timingFunction: 'ease',
	})
	export default {
		props: {
			// 页面滚动距离
			scrollTop: {
				type: Number,
				default: 0
			},
			bgColor: {
				type: String,
				default: '#0fa3fa'
			}
		},
		data() {
			return {
				animationData: {}
			}
		},

		onLoad() {

		},
		created() {
			//默认不显示
			animation.opacity(0).step({
				duration: 0
			});

			this.animationData = animation.export()
		},
		watch: {
			scrollTop(newVal, oldVal) {
				if (newVal < 100) {
					//淡出
					animation.opacity(0).step({
						duration: 800
					})
					this.animationData = animation.export()
				} else {
					//淡入
					animation.opacity(1).step({
						duration: 800
					}) //描述动画
					this.animationData = animation.export()
				}
			}
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			//滚动到顶部
			tapTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 500
				});
			}

		}
	}
</script>

<style scoped lang="scss">
	.m-top {
		width: 80rpx;
		height: 80rpx;
		position: fixed;
		bottom: 80rpx;
		right: 40rpx;
		border-radius: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 80rpx;
		border: 2rpx solid #fafafa;

		.top-icon {
			color: #fff;
			font-size: 36rpx;
			font-weight: bold;
		}
	}
</style>
