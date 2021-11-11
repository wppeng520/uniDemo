<!--  -->
<template>
	<view class='my-page'>
		<m-search-text placeholder="请输入姓名" @search="tapSearch"></m-search-text>
		<text>今天天气很好</text>
	</view>
</template>

<script>
	
	export default {
		components: {

		},
		data() {
			return {

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
			tapSearch(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>