<!--  -->
<template>
	<view class="m-select-p">
		<view class="label">
			<text>{{label}}</text>
			<text v-if="required" class="icondemo demo-bitian required-icon"></text>
		</view>
		<view class="data">
			<view class="btn">
				<text class="icondemo demo-jiahao btn-icon"></text>
				<text>选择</text>
			</view>
			<view v-if="dataValue.name!=''" class="list-item">
				<text>{{dataValue.name}}</text>
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
		},
		data() {
			return {
				dataValue: {
					id: '',
					name: ''
				}
			}
		},
		onLoad() {
			//console.log(this.vuex_systemInfo);
		},
		mounted() {
			if (this.value != null) {
				this.dataValue = this.value;
			}

		},
		watch: {
			value(newVal, oldVal) {
				if (newVal != null) {
					this.dataValue = newVal;
				}

			}
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
				background-color: #F2F6FC;
				color: #409EFF;
				margin: 10rpx;
			}
		}
	}
</style>
