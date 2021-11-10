<!--  -->
<template>
	<view class="user">
		<view class="list" v-for="(item,index) in list" :key="item.id" @click="tapSelected(item)">
			<view class="left">
				<view class="circle">
					{{item.text.substring(item.text.length-2)}}
				</view>
				<text class="text">{{item.text}}</text>
			</view>
			<text v-if="item.checked" class="icondemo demo-duoxuan  right-icon"></text>
			<text v-else class="icondemo demo-duoxuan1 right-icon"></text>
		</view>
		
		<m-loadmore status="nomore"></m-loadmore>
		<m-btn-bottom label="确定" @submit="tapSubmit"></m-btn-bottom>
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
			this.list=this.list.map(item=>{
				item.checked=false;
				return item;
			})
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
				item.checked=!item.checked;
				this.$forceUpdate(); //强制更新视图
			},
			tapSubmit(){
				
				let list=this.list.filter(item=>{
					return item.checked;
				})
				this.$u.vuex(`vuex_pageData.${this.key}`, list);
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
			justify-content: space-between;
			align-items: center;
			.left{
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
			.right-icon{
				font-size: 38rpx;
				font-weight: bold;
				color: #409EFF;
			}
			
		}
	}
</style>