<!-- 底部确认按钮 -->
<template>
	<view class="m-bottom">
		<view class="placeholder">

		</view>
		<view class="btn" @click="tapBtn">
			<text>{{label}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: '提交'
			},
		},
		methods: {
			tapBtn() {
				let that = this;
				
				//节流，防止连点
				this.$u.throttle(() => {
					let pageData = this.vuex_pageData;
					let rules = this.vuex_pageDataRules;

					let isRules = true;

					for (let item in rules) {
						if (!rules[item]) {
							isRules = false;
							break;
						}
					}

					that.$emit('submit', {
						isRules,
						pageData
					});
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-bottom {
		.placeholder {
			width: 750rpx;
			height: 55px;
		}

		.btn {
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 55px;
			width: 750rpx;
			background-color: #F2F6FC;
			color: #409EFF;
			font-size: 32rpx;
			font-weight: bold;

			text {
				letter-spacing: 10rpx
			}
		}
	}
</style>
