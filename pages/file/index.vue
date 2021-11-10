<template>
	<view class="page">
		<m-file-upload label="上传图片" :initlist="list" ></m-file-upload>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					id:1,
					path:'/static/test/1.jpg'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>
