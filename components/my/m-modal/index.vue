<!-- 显示模态弹窗 -->
<template>
	<view>
		<u-popup border-radius="10" v-model="show" mode="center" :mask-close-able="false">
			<view class="m-modal">
				<view class="content">
					<text class="title">{{title}}</text>
					<text>{{content}}</text>
				</view>
				<view class="btn">
					<text class="cancel" @click="tapCancel">取消</text>
					<text class="confirm" @click="tapConfirm">确定</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			show:{
				type:Boolean,
				default:false
			},
			title:{
				type:String,
				default:'提示'
			},
			content:{
				type:String,
				default:''
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
			tapCancel(){
				this.$emit('cancel')
			},
			tapConfirm(){
				this.$emit('confirm')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-modal{
		width: 580rpx;
		.content{
			padding: 20rpx;
			font-size: 28rpx;
			color: #909399;
			display: flex;
			flex-direction: column;
			align-items: center;
			.title{
				font-size: 32rpx;
				color: #606266;
				padding-bottom: 20rpx;
			}
		}
		.btn{
			display: flex;
			justify-content: space-between;
			border-top: 1px solid #F2F6FC;
			font-size: 30rpx;
			.cancel{
				width: 290rpx;
				padding: 20rpx 0;
				display: flex;
				justify-content: center;
				color: #909399;
			}
			.confirm{
				width: 290rpx;
				padding: 20rpx 0;
				display: flex;
				justify-content: center;
				color: #409EFF;
			}
		}
	}
</style>