<!-- 时间线 -->
<template>
	<view class='my-page'>
		<view class="page-title">
			<text>自定义时间线</text>
		</view>
		<m-timeline-item :activeline="true">
			<template v-slot:node>
				<view class="timeline-node">
					<text class="icondemo demo-luyin finish-icon"></text>
				</view>
			</template>
			<template v-slot:content>
				<view class="timeline-content">
					<view class="title">
						<text>李四</text>
					</view>
					<view class="content">
						<text class="state">已取件</text>
						<text class="remark">今天天气很好</text>
					</view>
					<view class="time">
						<text>2021.11.15 08:30</text>
					</view>
				</view>
			</template>
		</m-timeline-item>
		<m-timeline-item>
			<template v-slot:node>
				<view class="timeline-node">
					<text class="icondemo demo-icon_duihao-mian active-icon"></text>
				</view>
			</template>
			<template v-slot:content>
				<view class="timeline-content">
					<view class="title">
						<text>李四</text>
					</view>
					<view class="content">
						<text class="state">运输中</text>
						<text class="remark">今天天气很好，我跑的飞快</text>
					</view>
					<view class="time">
						<text>2021.11.16 08:30</text>
					</view>
				</view>
			</template>
		</m-timeline-item>

		<m-timeline-item :finishnode="true">
			<template v-slot:node>
				<view class="timeline-node">
					<text class="icondemo demo-luyin node-icon"></text>
				</view>
			</template>
			<template v-slot:content>
				<view class="timeline-content">
					<view class="title">
						<text>王五</text>
					</view>
					<view class="content">
						<text class="state">等待签收</text>
						<text class="remark">快点吧，我已经等的很久了</text>
					</view>
					<view class="time">
						<text></text>
					</view>
				</view>
			</template>

		</m-timeline-item>


		<view class="page-title">
			<text>uView时间线</text>
		</view>
		<u-time-line>
			<u-time-line-item>
				<template v-slot:node>
					<view class="timeline-node">
						<text class="icondemo demo-luyin finish-icon"></text>
					</view>
				</template>
				<template v-slot:content>
					<view class="timeline-content">
						<view class="title">
							<text>李四</text>
						</view>
						<view class="content">
							<text class="state">已取件</text>
							<text class="remark">今天天气很好</text>
						</view>
						<view class="time">
							<text>2021.11.15 08:30</text>
						</view>
					</view>
				</template>
			</u-time-line-item>

			<u-time-line-item>
				<template v-slot:node>
					<view class="timeline-node">
						<text class="icondemo demo-icon_duihao-mian active-icon"></text>
					</view>
				</template>
				<template v-slot:content>
					<view class="timeline-content">
						<view class="title">
							<text>李四</text>
						</view>
						<view class="content">
							<text class="state">运输中</text>
							<text class="remark">今天天气很好，我跑的飞快</text>
						</view>
						<view class="time">
							<text>2021.11.16 08:30</text>
						</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item>
				<template v-slot:node>
					<view class="timeline-node">
						<text class="icondemo demo-luyin node-icon"></text>
					</view>
				</template>
				<template v-slot:content>
					<view class="timeline-content">
						<view class="title">
							<text>王五</text>
						</view>
						<view class="content">
							<text class="state">等待签收</text>
							<text class="remark">快点吧，我已经等的很久了</text>
						</view>
						<view class="time">
							<text></text>
						</view>
					</view>
				</template>
			</u-time-line-item>
		</u-time-line>
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

		}
	}
</script>

<style lang="scss" scoped>
	.page-title {
		padding: 40rpx;
	}

	.timeline-node {
		.finish-icon {
			font-size: 28rpx;
			color: #67C23A;
		}

		.node-icon {
			font-size: 28rpx;
			color: #C0C4CC;
		}

		.active-icon {
			font-size: 28rpx;
			color: #67C23A;
		}
	}

	.timeline-content {
		.title {
			font-size: 30rpx;

		}

		.content {
			font-size: 28rpx;
			display: flex;
			flex-direction: column;

			.state {
				font-size: 24rpx;
				font-weight: bold;
				color: #E6A23C;
			}

			.remark {
				color: #909399;
			}
		}

		.time {
			color: #909399;
			font-size: 28rpx;
		}
	}
</style>
