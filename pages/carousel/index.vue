<!-- 轮播图 -->
<template>
	<view class='my-page'>
		<m-swiper :value="images"></m-swiper>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				images:[{
					id:1,
					url:'/static/test/1.jpg'
				},{
					id:2,
					url:'/static/test/1.jpg'
				}]
			}
		},
		onLoad() {

		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
