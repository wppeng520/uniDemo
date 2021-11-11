<!-- 加载中 -->
<template>
	<view class='m-loading'>
		<view class="loading" :style="{backgroundColor:color}"></view>
		<view class="loading" :style="{backgroundColor:color}"></view>
		<view class="loading" :style="{backgroundColor:color}"></view>
		<view class="loading" :style="{backgroundColor:color}"></view>
		<view class="loading" :style="{backgroundColor:color}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: '#909399'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-loading {
		display: flex;
		justify-content: center;
		padding-top: 20rpx;

		.loading {
			width: 4px;
			height: 4px;
			border-radius: 2px;
			float: left;
			margin: 0 3px;
			animation: loading linear 1s infinite;
		}

		.loading:nth-child(1) {
			animation-delay: 0s;
		}

		.loading:nth-child(2) {
			animation-delay: 0.15s;
		}

		.loading:nth-child(3) {
			animation-delay: 0.3s;
		}

		.loading:nth-child(4) {
			animation-delay: 0.45s;
		}

		.loading:nth-child(5) {
			animation-delay: 0.6s;
		}
	}



	@keyframes loading {

		0%,
		60%,
		100% {
			transform: scale(1);
		}

		30% {
			transform: scale(2.5);
		}
	}
</style>
