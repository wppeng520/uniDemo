<!--  -->
<template>
	<view class="m-input">
		<view class="label">
			<text>{{label}}</text>
			<text v-if="required" class="icondemo demo-bitian required-icon"></text>
		</view>
		<view class="data">
			<input class="data-input" :type="type" :value="dataValue" :placeholder="placeholder" :maxlength="-1"
				@input="inputValue" />
			<text v-if="!isRule" class="tip">{{errTip}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'text'
			},
			label: {
				type: String,
				default: '标题'
			},
			code: {
				type: String,
				default: 'id'
			},
			value: {
				type: [String, Number],
				default: ''
			},
			placeholder: {
				type: String,
				default: '请输入数据'
			},
			required: {
				type: Boolean,
				default: false
			},
			rule: {
				type: String,
				default: ''
			}, //规则，正则表达式
			errTip: {
				type: String,
				default: '请输入正确的数据'
			} //不满足规则的提示
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
			let that=this;
			this.dataValue = this.value;
			
			//初始化
			let val = this.dataValue;
			let key = that.code;
			
			let isRule=that.verifyData(val,that.required,that.rule);
			
			if(val!=''){
				that.isRule=isRule;
			}
			
			
			that.$u.vuex(`vuex_pageData.${key}`, val);
			that.$u.vuex(`vuex_pageDataRules.${key}`,isRule);
		},
		watch: {
			value(newVal, oldVal) {
				this.dataValue = newVal;

			},
			dataValue(newVal, oldVal){
				let that=this;
				
				this.$u.debounce(() => {
					let val = newVal;
					let key = that.code;
					
					let isRule=that.verifyData(val,that.required,that.rule);
					
					that.isRule=isRule;
					
					that.$u.vuex(`vuex_pageData.${key}`, val);
					that.$u.vuex(`vuex_pageDataRules.${key}`,isRule);
					
				}, 1000)
			}
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			inputValue(e) {
		
				let that=this;

				let val = e.target.value;
				that.dataValue = val;

			},
			//校验数据
			verifyData(val, required, rule) {
				let isRequired=this.verifyRequired(val,required);
				if(isRequired){
					
					if(val==''){
						return true;
					}else{
						return this.verifyRule(val,rule);
					}
				}else{
					return false;
				}
			},
			verifyRequired(val, required) {
				if (required) {
					//是必填
					if (val == '') {
						return false;
					} else {
						return true;
					}
				} else {
					return true;
				}

			},
			verifyRule(val, rule) {

				if (rule == '') {
					return true;
				} else {
					//正则校验
					let reg = new RegExp(rule);
					
					let isrule = reg.test(val);
					
					return isrule;
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-input {
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

			.data-input {
				width: 100%;
				font-size: 28rpx;
				padding: 10rpx 0;
			}

			.tip {
				width: 100%;
				font-size: 24rpx;
				color: #F56C6C;
			}
		}
	}
</style>
