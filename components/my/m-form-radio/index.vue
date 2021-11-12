<!--  -->
<template>
	<view class="m-select-p">
		<view class="label">
			<text>{{label}}</text>
			<text v-if="required" class="icondemo demo-bitian required-icon"></text>
		</view>
		<view class="data">
			<view class="list-item" :style="active==index?'color:#fff;background:#409EFF;':''"
				v-for="(item,index) in list" :key="index" @click="tapSelect(index)">
				<text>{{item.label}}</text>
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
				type: Number,
				default: -1
			}, //选择内容的索引
			list: {
				type: Array,
				default: function() {
					return [];
				}
			},
			required: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				active: -1
			}
		},
		onLoad() {
			//console.log(this.vuex_systemInfo);
		},
		mounted() {
			if (this.required) {

				if (this.value == -1) {
					this.active = 0;
				} else {
					this.active = this.value;
				}
			} else {
				if(this.value==-1){
					this.active = -1;
					let obj = null;
					let key = this.code;
					this.$u.vuex(`vuex_pageData.${key}`, obj);
					this.$u.vuex(`vuex_pageDataRules.${key}`, true);
				}else{
					this.active = this.value;
					
					let key = this.code;
					let obj = this.list[this.active];
					this.$u.vuex(`vuex_pageData.${key}`, obj);
					this.$u.vuex(`vuex_pageDataRules.${key}`, true);
				}
				
			}

		},
		watch: {
			value(newVal, oldVal) {
				this.active = newVal;
			},
			active(newVal, oldVal) {
				let key = this.code;
				let obj = null;
				if (newVal != -1) {
					obj = this.list[newVal];

				}
				this.$u.vuex(`vuex_pageData.${key}`, obj);
				this.$u.vuex(`vuex_pageDataRules.${key}`, true);
			}
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			tapSelect(index) {
				this.active = index;

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
