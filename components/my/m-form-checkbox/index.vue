<!--  -->
<template>
	<view class="m-select-p">
		<view class="label">
			<text>{{label}}</text>
		</view>
		<view class="data">
			<view :class="item.checked?'list-item active':'list-item'" v-for="(item,index) in activeList" :key="index"
				@click="tapSelect(item)">
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
				type: Array,
				default: []
			}, //选择内容的id
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				activeList: []
			}
		},
		onLoad() {

		},
		mounted() {
			let that = this;
			let count = this.value.length;
			let list = this.list;
			if (count > 0) {
				list.map((item) => {

					item.checked = false;

					for (let vItem of that.value) {

						if (vItem == item.id) {
							item.checked = true;
							break;
						}
					}

					return item;
				})
			} else {
				list.map(item => {
					item.checked = false;
					return item;
				})
			}

			this.activeList = list;

			let pagelist = list.filter(item => {
				return item.checked == true;
			})

			let key = this.code;
			this.$u.vuex(`vuex_pageData.${key}`, pagelist);
			this.$u.vuex(`vuex_pageDataRules.${key}`, true);

		},
		watch: {
			value(newVal, oldVal) {
				let that = this;
				let count = newVal.length;
				let list = this.list;
				if (count > 0) {
					list.map((item) => {

						item.checked = false;

						for (let vItem of newVal) {

							if (vItem == item.id) {
								item.checked = true;
								break;
							}
						}

						return item;
					})
				} else {
					list.map(item => {
						item.checked = false;
						return item;
					})
				}

				this.activeList = list;

				let pagelist = list.filter(item => {
					return item.checked == true;
				})

				let key = this.code;
				this.$u.vuex(`vuex_pageData.${key}`, pagelist);
				this.$u.vuex(`vuex_pageDataRules.${key}`, true);
			}
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			tapSelect(item) {

				item.checked = !item.checked;
				this.$forceUpdate(); //强制更新视图
				
				let list=this.activeList;
				let pagelist = list.filter(item => {
					return item.checked == true;
				})

				let key = this.code;
				this.$u.vuex(`vuex_pageData.${key}`, pagelist);
				this.$u.vuex(`vuex_pageDataRules.${key}`, true);
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

			.active {
				color: #fff !important;
				background: #409EFF !important;
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
