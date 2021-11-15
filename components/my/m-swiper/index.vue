<!-- 轮播图 -->
<template>
	<view class='m-swiper'>
		<swiper class="banner-swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)" indicator-active-color="#FFFFFF"
		 autoplay="true" circular="true" interval="5000" duration="1000">
			<swiper-item v-for="item in value" :key="item.id">
				<image class="banner-image" :src="item.url" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Array,
				default () {
					return [];
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-swiper{
		.banner-swiper,
		.banner-image {
			width: 750rpx;
			height: 380rpx;
		}
	}
	
</style>