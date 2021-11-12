<!--  -->
<template>
	<view class="m-tree">
		<view class="node" v-for="(item,index) in treeList" :key="index">
			<view class="item">
				<view class="left" @click="tapShowNode(item)">
					<text v-if="item.isExistChildNode&&item.showChildren" class="icondemo demo-jianqu left-icon"></text>
					<text v-else-if="item.isExistChildNode" class="icondemo demo-jia left-icon"></text>
				</view>
				<view class="right" @click="tapSelect(item)">
					<text>{{item.text}}</text>
				</view>
			</view>
			
			<m-tree v-if="item.showChildren" :nodeItem="item" :leavl="(leavl+1)" :load="load"></m-tree>
		</view>

	</view>
</template>

<script>
	import {bus} from '@/libs/bus.js';
	export default {
		name:"m-tree", //递归组件必须有name属性，要不找不到注册组件
		props: {
			load: {
				type: Function,
				required: true
			},
			nodeItem: {
				type: Object,
				// 对象或数组默认值必须从一个工厂函数获取
				default: function() {
					return null
				}
			},
			leavl: {
				type: Number,
				default: 1 //层级
			}
		},
		data() {
			return {
				treeList: []
			}
		},
		created() {
			let that = this;
			this.load(this.nodeItem, (data) => {
				
				if (data != null) {
					data.forEach((item) => {
						item.showChildren = false;
						item.leavl = that.leavl;
					});
					this.treeList = data;
					//console.log(data);
				} else {
					this.treeList = [];
				}
			});
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
			tapSelect(item){
				//console.log(item);
				bus.$emit('select',item);
			},
			tapShowNode(item){
				item.showChildren = !item.showChildren;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-tree {
		padding-left: 20rpx;

		.node {
			.item {
				padding: 30rpx 20rpx 30rpx 0;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #F2F6FC;

				.left {
					width: 100rpx;
					display: flex;
					justify-content: center;

					.left-icon {
						color: #409EFF;
						font-size: 48rpx;
					}
				}

				.right {
					width: 400rpx;
					font-size: 32rpx;
				}
			}
		}
	}
</style>
