<!--  -->
<template>
	<view class="m-search">
		<view class="search">
			<view class="left">
				<text class="icondemo demo-search search-icon"></text>
				<input class="search-input" type="text" value="" confirm-type="search" :placeholder="placeholder" @input="inputValue" @confirm="tapSearch" />
			</view>
			<view class="right" @click="tapSearch">
				<text class="icondemo demo-shaixuan screen-icon"></text>
				<text>搜索</text>
			</view>
		</view>
		<view class="placeholder">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: '请输入要搜索的内容'
			}
		},
		data() {
			return {
				searchtext:''
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
			inputValue(e) {

				let val = e.target.value;
				this.searchtext=val;
				
				let that=this;
				this.$u.debounce(()=>{
					that.$emit('search',this.searchtext);
				},1500)
				
				
			},
			tapSearch(){
				let that=this;
				this.$u.throttle(()=>{
					that.$emit('search',this.searchtext);
				},1000)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-search {
		.search {
			position: fixed;
			top: 0;
			z-index: 99;
			height: 60px;
			width: 750rpx;
			background-color: #F2F6FC;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.left{
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #FFFFFF;
				width: 560rpx;
				height: 40px;
				border-radius: 20px;
				
				.search-icon{
					width: 60rpx;
					display: flex;
					justify-content: center;
					font-size: 32rpx;
					color: #909399;
				}
				.search-input{
					width: 500rpx;
					font-size: 28rpx;
				}
				
			}
			.right{
				display: flex;
				align-items: center;
				width: 100rpx;
				margin-left: 40rpx;
				font-size: 28rpx;
				color: #409EFF;
			}
		}

		.placeholder {
			width: 750rpx;
			height: 60px;
		}
	}
</style>
