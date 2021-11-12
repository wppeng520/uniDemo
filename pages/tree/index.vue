<!--  -->
<template>
	<view class='my-page'>
		<m-tree :load="loadNode"></m-tree>
	</view>
</template>

<script>
	import {
		bus
	} from '@/libs/bus.js';
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		onLoad() {
			bus.$on('select', e => {
				console.log(e);
			})
		},
		onUnload() {
			bus.$off('select',{}); //移除事件监听
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			loadNode(node, resolve) {
				//console.log(node);

				if (node == null) {

					setTimeout(() => {
						//第一次调用
						let res = [{
							id: 1,
							text: '公司1',
							isExistChildNode: true, //是否存在子节点
							extra: {
								usercode: '00000001',
								prjid: '1234567890'
							} //额外的参数
						}, {
							id: 2,
							text: '公司2',
							isExistChildNode: true, //是否存在子节点
							extra: {
								usercode: '00000002',
								prjid: '1234567890'
							} //额外的参数
						}]
						return resolve(res);
					}, 1000)

				} else {
					if (node.isExistChildNode) {
						setTimeout(() => {
							//开始递归
							let res = [{
								id: 11,
								text: '部门1',
								isExistChildNode: false, //是否存在子节点
								extra: {
									usercode: '00000011',
									prjid: '1234567890'
								} //额外的参数
							}, {
								id: 12,
								text: '部门2',
								isExistChildNode: false, //是否存在子节点
								extra: {
									usercode: '00000012',
									prjid: '1234567890'
								} //额外的参数
							}]
							return resolve(res);
						}, 1000);
					} else {
						return resolve(null);
					}

				}


			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
