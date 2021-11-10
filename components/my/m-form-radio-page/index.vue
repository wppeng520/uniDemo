<!--  -->
<template>
	<view class="m-select-p">
		<view class="label">
			<text>{{label}}</text>
			<text v-if="required" class="icondemo demo-bitian required-icon"></text>
		</view>
		<view class="data">
			<view class="btn" @click="tapSelect">
				<text class="icondemo demo-jiahao btn-icon"></text>
				<text>选择</text>
			</view>
			<view v-if="dataValue.text!=''" class="list-item">
				<text>{{dataValue.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: '标题'
			},
			code: {
				type: String,
				default: 'id'
			},
			value: {
				type: Object,
				default: null
			},
			required: {
				type: Boolean,
				default: false
			},
			path: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				dataValue: {
					id: '',
					text: ''
				}
			}
		},
		mounted() {

			if (this.value != null) {
				this.dataValue = this.value;
				this.$u.vuex(`vuex_pageData.${this.code}`, this.value);
				this.$u.vuex(`vuex_pageDataRules.${this.code}`, true);
			} else {
				if (this.required) {
					this.$u.vuex(`vuex_pageData.${this.code}`, null);
					this.$u.vuex(`vuex_pageDataRules.${this.code}`, false);
				} else {
					this.$u.vuex(`vuex_pageData.${this.code}`, null);
					this.$u.vuex(`vuex_pageDataRules.${this.code}`, true);
				}
			}
		},
		watch: {
			value(newVal, oldVal) {

				if (newVal != null) {
					this.dataValue = newVal;
					this.$u.vuex(`vuex_pageData.${this.code}`, newVal);
					this.$u.vuex(`vuex_pageDataRules.${this.code}`, true);
				} else {
					if (this.required) {
						this.$u.vuex(`vuex_pageData.${this.code}`, null);
						this.$u.vuex(`vuex_pageDataRules.${this.code}`, false);
					} else {
						this.$u.vuex(`vuex_pageData.${this.code}`, null);
						this.$u.vuex(`vuex_pageDataRules.${this.code}`, true);
					}
				}

			}
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			tapSelect() {
				uni.navigateTo({
					url: `${this.path}?key=${this.code}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-select-p {
		background: #FFFFFF;
		padding: 20rpx 40rpx;
		border-bottom: 1px solid #EBEEF5;

		.label {
			font-size: 28rpx;
			color: #303133;
			padding-bottom: 10rpx;

			.required-icon {
				color: #F56C6C;
			}
		}

		.data {
			display: flex;
			flex-wrap: wrap;

			.btn {
				font-size: 26rpx;
				padding: 6rpx 30rpx;
				border-radius: 30rpx;
				background-color: #F2F6FC;
				color: #409EFF;
				margin: 10rpx 10rpx 10rpx 0;

				.btn-icon {
					font-size: 26rpx;
				}
			}

			.list-item {
				font-size: 26rpx;
				padding: 6rpx 30rpx;
				border-radius: 30rpx;
				background-color: #409EFF;
				color: #F2F6FC;
				margin: 10rpx;
			}
		}
	}
</style>
