<!-- 上传图片 -->
<template>
	<view class='m-upload'>
		<view class="label">
			<text>{{label}}</text>
		</view>
		<view class="image">
			<view class="image-list" v-for="item in imageList" :key="item.id">
				<image v-if="!item.loading" class="delete" src="/static/upload/delete.png" @click="tapDelete(item.id)">
				</image>
				<image class="image-data" :src="item.path" mode="aspectFill" @click="tapPreview(item.path)"></image>
				<view class="upload-progress" v-if="item.loading">
					<u-line-progress active-color="#409EFF" :height="20" :percent="item.progress" striped
						striped-active></u-line-progress>

				</view>
				<view class="upload-mask" v-if="item.loading">

				</view>
			</view>
			<image class="upload-btn" src="/static/upload/upload.png" @click="tapUpload"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: '上传图片'
			},
			//初始显示数据
			initlist: {
				type: Array,
				default: function() {
					return [];
				}
			}
		},
		data() {
			return {
				imageList: []
			}
		},
		created() {

		},
		//页面渲染完成
		mounted() {
			for (let item of this.initlist) {
				let obj = {
					...item,
					loading: false,
					progress: 100
				}
				this.imageList.push(obj);
			}
		},
		watch: {
			initlist(nVal, oVal) {
				for (let item of nVal) {
					let obj = {
						...item,
						loading: false,
						progress: 100
					}
					this.imageList.push(obj);
				}

			},
		},
		/**
		 * 计算属性
		 */
		computed: {

		},
		methods: {
			tapDelete(id) {
				let that = this;
				//console.log(`删除${id}`);
				//先移除显示的图片，在删除服务器端的图片
				let images = that.imageList;
				let indexImage = images.findIndex(n => n.id == id);
				if (indexImage != -1) {
					that.imageList.splice(indexImage, 1); //删除当前数组对象

					//调用接口，删除图片
					console.log('删除图片', id);
				}




			},
			tapPreview(path) {
				console.log(`当前图片${path}`);
				let images = [];
				for (let item of this.imageList) {
					images.push(item.path);
				}
				// 预览图片
				uni.previewImage({
					current: path,
					urls: images,
					indicator: 'default',
					loop: true,
				});

			},
			tapUpload() {
				let that = this;

				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {

						for (let item of res.tempFiles) {
							//console.log(item);

							let id = that.$u.guid();

							that.imageList.push({
								id: id,
								path: item.path,
								loading: true, //正在上传，上传完成，要进行关闭
								progress: 0
							})

							//调用上传方法（上传到服务器）
							//that.upload(id, item.path);

							that.uploadSimulate(id, item.path);

						}

					}
				});
			},
			//定时器模拟上传
			uploadSimulate(id, path) {
				let that = this;

				//上传文件到服务器
				let images = that.imageList;
				let indexImage = images.findIndex(n => n.id == id);

				let progress = 0;

				const intervalID = setInterval(() => {
					progress++;
					if (that.imageList[indexImage]) {
						that.imageList[indexImage].progress = progress;
						if (progress == 100) {
							that.imageList[indexImage].loading = false;
							clearInterval(intervalID)
						}
					}
				}, 100)
			},

			//真实服务器上传
			upload(id, path) {
				let that = this;

				//上传文件到服务器
				let images = that.imageList;
				let indexImage = images.findIndex(n => n.id == id);

				let progress = 0;

				const uploadTask = uni.uploadFile({
					url: 'http://xxx.xxx.xxx/api/UploadFile/UploadingFormFile?Id=' + id,
					filePath: path,
					name: 'file',
					success: (uploadFileRes) => {

						if (uploadFileRes.statusCode == 200) {
							console.log(uploadFileRes.data);
						} else {
							that.$u.toast("上传失败");
							uploadTask.abort(); //失败，取消上传

							that.imageList.splice(indexImage, 1); //删除当前数组对象

						}
					}
				});

				uploadTask.onProgressUpdate((res) => {

					if (that.imageList[indexImage]) {
						progress = res.progress;
						that.imageList[indexImage].progress = progress;
						if (progress == 100) {
							that.imageList[indexImage].loading = false;
						}
					}

				});

			}

		}
	}
</script>

<style lang="scss" scoped>
	.m-upload {

		.label {
			padding: 20rpx;
			background-color: #eeeeee;
			font-size: 28rpx;
			font-weight: bold;
			color: #303133;
		}

		.image {
			display: flex;
			flex-wrap: wrap;
			background-color: #FFFFFF;
			padding: 20rpx;

			.image-list {
				position: relative;

				.delete {
					position: absolute;
					z-index: 10;
					width: 40rpx;
					height: 40rpx;
					top: 0;
					right: 0;
				}

				.image-data {
					width: 216rpx;
					height: 216rpx;
					padding: 10rpx 10rpx 0 10rpx;
				}

				.upload-progress {
					width: 176rpx;
					padding: 0 10rpx;
					position: absolute;
					z-index: 20;
					height: 20rpx;
					left: 20rpx;
					bottom: 140rpx;
				}

				.upload-mask {
					position: absolute;
					z-index: 19;
					width: 216rpx;
					height: 216rpx;
					top: 10rpx;
					left: 10rpx;
					background-color: #000000;
					opacity: 0.6;
				}
			}

			.upload-btn {
				width: 216rpx;
				height: 216rpx;
				padding: 10rpx 10rpx 0 10rpx;
			}
		}
	}
</style>
