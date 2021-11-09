<!--  -->
<template>
	<view class="m-textarea">
		<view class="label">
			<text>{{label}}</text>
			<text v-if="required" class="icondemo demo-bitian required-icon"></text>
		</view>
		<view class="data">
			<textarea class="data-textarea" :value="dataValue" :placeholder="placeholder" :maxlength="maxlength"
				@input="inputValue" auto-height />
			<text class="data-text">{{nowValueLength}}/{{maxlength}}</text>
			<text v-if="!isRule" class="tip">{{placeholder}}</text>
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
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '请输入数据'
			},
			maxlength: {
				type: Number,
				default: 100
			},
			required: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				isRule: true,
				dataValue: ''
			}
		},
		onLoad() {
			//console.log(this.vuex_systemInfo);
		},
		mounted() {
			let that = this;
			this.dataValue = this.value;

			//初始化
			let val = this.dataValue;
			let key = that.code;

			let isRule = that.verifyData(val, that.required);

			if (val != '') {
				that.isRule = isRule;
			}


			that.$u.vuex(`vuex_pageData.${key}`, val);
			that.$u.vuex(`vuex_pageDataRules.${key}`, isRule);
		},
		watch: {
			value(newVal, oldVal) {
				this.dataValue = newVal;

			},
			dataValue(newVal, oldVal) {
				let that = this;

				this.$u.debounce(() => {
					let val = newVal;
					let key = that.code;

					let isRule = that.verifyData(val, that.required);

					that.isRule = isRule;

					that.$u.vuex(`vuex_pageData.${key}`, val);
					that.$u.vuex(`vuex_pageDataRules.${key}`, isRule);

				}, 1000)
			}
		},
		/**
		 * 计算属性
		 */
		computed: {
			//当前数据长度
			nowValueLength() {
				let num = this.dataValue.length;
				return num;
			},
		},
		methods: {
			inputValue(e) {

				let that = this;

				let val = e.target.value;
				that.dataValue = val;

			},
			verifyData(val, required) {
				if (required) {
					if (val == '') {
						return false;
					} else {
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-textarea {
		background: #FFFFFF;
		padding: 20rpx 40rpx;
		border-bottom: 1px solid #EBEEF5;

		.label {
			font-size: 26rpx;
			color: #303133;

			.required-icon {
				color: #F56C6C;
			}
		}

		.data {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			.data-textarea {
				width: 100%;
				font-size: 28rpx;
				padding: 10rpx 0;
			}

			.data-text {
				font-size: 26rpx;
				color: #303133;
			}

			.tip {
				width: 100%;
				font-size: 24rpx;
				color: #F56C6C;
			}
		}
	}
</style>
