<!--  -->
<template>
	<view class="user">
		<view class="list" v-for="(item,index) in list" :key="item.id" @click="tapSelected(item)">
			<view class="circle">
				{{item.text.substring(item.text.length-2)}}
			</view>
			<text class="text">{{item.text}}</text>
		</view>
		
		<m-loadmore status="nomore"></m-loadmore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				key:'',
				list:[{
					id:'00000001',
					text:'李四'
				},{
					id:'00000002',
					text:'张三'
				},{
					id:'00000003',
					text:'王五'
				},{
					id:'00000004',
					text:'李晋锦'
				}]
			}
		},
		onLoad(option) {
			this.key=option.key;
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
			tapSelected(item){
				this.$u.vuex(`vuex_pageData.${this.key}`, item);
				this.$u.vuex(`vuex_pageDataRules.${this.key}`, true);
				
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		.list{
			padding: 30rpx 40rpx;
			margin-bottom: 10rpx;
			background-color: #F2F6FC;
			display: flex;
			align-items: center;
			.circle{
				width: 100rpx;
				height: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #409EFF;
				color: #FFFFFF;
				font-size: 28rpx;
				font-weight: bold;
				border-radius: 50rpx;
			}
			.text{
				padding-left: 40rpx;
				font-size: 30rpx;
			}
		}
	}
</style>