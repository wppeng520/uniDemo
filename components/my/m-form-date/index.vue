<!--  -->
<template>
	<view class="m-date">
		<view class="label">
			<text>{{label}}</text>
			<text v-if="required" class="icondemo demo-bitian required-icon"></text>
		</view>
		<view class="data">
			<view class="data-text" @click="tapSelect">
				<text v-if="timeShow==''" class="placeholder">{{placeholder}}</text>
				<text v-else>{{timeShow}}</text>
				<text class="icondemo demo-you right-icon"></text>
			</view>
			<text v-if="!isRule" class="tip">{{placeholder}}</text>
		</view>

		<u-popup v-model="show" mode="bottom" :mask-close-able="false">
			<view class="picker">
				<view class="tabbar">
					<text class="btn" style="color: #909399;" @click="tapCancel">取消</text>
					<text class="btn" style="color: #409EFF;" @click="tapConfirm">确定</text>
				</view>
				<picker-view class="picker-view" indicator-style="height:50px" :value="activeValue"
					@change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					</picker-view-column>
				</picker-view>
			</view>
		</u-popup>
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
			required: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				show: false,
				isRule: true,
				activeValue: [0, 0, 0],
				years: [],
				months: [],
				days: [],
				timeShow: ''

			}
		},
		mounted() {
			let timeobj = this.$u.timeformatting();
			console.log(timeobj);

			let years = [];
			let months = [];

			for (let i = 2020; i <= timeobj.year + 10; i++) {
				years.push(`${i}`);
			}
			for (let i = 1; i <= 12; i++) {
				months.push(`${i}`.padStart(2, '0'));
			}
			this.years = years;
			this.months = months;
			this.activeValue = [timeobj.year - 2020, timeobj.month - 1, timeobj.day - 1];
			this.changeDay(timeobj.year, timeobj.month);

			let key = this.code;
			this.timeShow = this.value;
			if (this.required) {
				if (this.timeShow == '') {

					this.$u.vuex(`vuex_pageData.${key}`, '');
					this.$u.vuex(`vuex_pageDataRules.${key}`, false);
				} else {
					
					this.$u.vuex(`vuex_pageData.${key}`, this.value);
					this.$u.vuex(`vuex_pageDataRules.${key}`, true);
				}
			} else {
				
				this.$u.vuex(`vuex_pageData.${key}`, this.value);
				this.$u.vuex(`vuex_pageDataRules.${key}`, true);
			}
		},
		watch: {
			value(newVal, oldVal) {
				let key = this.code;
				this.timeShow = newVal;
				if (this.required) {
					if (this.timeShow == '') {

						this.$u.vuex(`vuex_pageData.${key}`, '');
						this.$u.vuex(`vuex_pageDataRules.${key}`, false);
					} else {
						
						this.$u.vuex(`vuex_pageData.${key}`, newVal);
						this.$u.vuex(`vuex_pageDataRules.${key}`, true);
					}
				} else {
					
					this.$u.vuex(`vuex_pageData.${key}`, newVal);
					this.$u.vuex(`vuex_pageDataRules.${key}`, true);
				}
			},
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {

			tapSelect() {
				this.show = true;
			},
			tapCancel() {
				this.show = false;
				let key = this.code;
				if (this.required) {
					if (this.timeShow == '') {
						this.isRule = false;
						this.$u.vuex(`vuex_pageData.${key}`, '');
						this.$u.vuex(`vuex_pageDataRules.${key}`, false);
					}
				} else {
					this.isRule = true;
					this.$u.vuex(`vuex_pageDataRules.${key}`, true);
				}
			},
			tapConfirm() {

				let timeShow =
					`${this.years[this.activeValue[0]]}年${this.months[this.activeValue[1]]}月${this.days[this.activeValue[2]]}日`

				console.log(timeShow);

				this.timeShow = timeShow;

				let key = this.code;


				this.isRule = true;

				this.$u.vuex(`vuex_pageData.${key}`, timeShow);
				this.$u.vuex(`vuex_pageDataRules.${key}`, true);

				this.show = false;
			},

			bindChange(e) {
				const val = e.detail.value;
				this.activeValue = val;
				this.changeDay(this.years[val[0]], this.months[val[1]]);

			},
			changeDay(year, month) {

				let defaultDays = [];
				//4年一闰，百年不闰，四百年再闰。
				if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
					//是闰年
					if (month == 2) {
						for (let i = 1; i <= 29; i++) {
							defaultDays.push((i + '').padStart(2, '0'))
						}
					} else {
						if (month == 4 || month == 6 || month == 9 || month == 11) {
							for (let i = 1; i <= 30; i++) {
								defaultDays.push((i + '').padStart(2, '0'))
							}
						} else {
							for (let i = 1; i <= 31; i++) {
								defaultDays.push((i + '').padStart(2, '0'))
							}
						}
					}
				} else {

					if (month == 2) {
						for (let i = 1; i <= 28; i++) {
							defaultDays.push((i + '').padStart(2, '0'))
						}
					} else {
						if (month == 4 || month == 6 || month == 9 || month == 11) {
							for (let i = 1; i <= 30; i++) {
								defaultDays.push((i + '').padStart(2, '0'))
							}
						} else {
							for (let i = 1; i <= 31; i++) {
								defaultDays.push((i + '').padStart(2, '0'))
							}
						}
					}
				}

				this.days = defaultDays;

			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-date {
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

			.data-text {
				width: 100%;
				font-size: 28rpx;
				padding: 10rpx 0;
				display: flex;
				justify-content: space-between;

				.placeholder {
					color: #909399;
					font-size: 26rpx;
				}

				.right-icon {
					font-size: 32rpx;
					color: #909399;
				}
			}

			.tip {
				width: 100%;
				font-size: 24rpx;
				color: #F56C6C;
			}
		}

		.picker {
			height: 750rpx;

			.tabbar {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				padding: 0 40rpx;
				font-size: 32rpx;

			}

			.picker-view {
				height: 650rpx;
				width: 750rpx;

				.item {
					height: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
				}
			}


		}
	}
</style>
