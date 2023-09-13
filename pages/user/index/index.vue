<template>
	<view class="">
		<view class="navbar px-3">
			<view class="title flex align-center">
				<img src="@/static/index/map.png" class="bg-transparent mr-1 map" alt="" srcset="">
				<text class="text-white font-sm mr-2">签约单位地址</text>
				<text class="text-white font-small">景德镇第三人民医院</text>
			</view>
		</view>
		<view class="rotation px-3">
			<uni-swiper-dot class="uni-swiper-dot-box" :current="current" mode="round" :dots-styles="dotsStyles"
				field="content">
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in 1" :key="index">
						<view class="swiper-item">
							<img src="@/static/index/horse.png" class="bg-transparent" alt="" srcset="">
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="grid px-3 mt-5">
			<view class="flex mb-3">
				<view class="grid-shadow flex align-center bg-white flex-1 mr-3 bg-white px-1">
					<img src="@/static/index/uploadInfo.png" alt="" srcset=""
						style="width: 108rpx; height: 103rpx;margin-right: 4rpx;">
					<text class="font-30 text-333">上传健康档案</text>
				</view>
				<view class="grid-shadow flex align-center bg-white flex-1 bg-white px-3">
					<img src="@/static/index/sign.png" alt="" srcset=""
						style="width: 95rpx; height: 101rpx;margin-right: 19rpx;">
					<text class="font-30 text-333">在线签约</text>
				</view>
			</view>
			<view class="flex">
				<view class="grid-shadow flex align-center bg-white flex-1 mr-3 bg-white px-2">
					<img src="@/static/index/container.png" alt="" srcset=""
						style="width: 93rpx; height: 101rpx;margin-right: 9rpx;">
					<text class="font-30 text-333">在线续约</text>
				</view>
				<view class="grid-shadow flex align-center bg-white flex-1 bg-white px-3">
					<img src="@/static/index/signdot.png" alt="" srcset=""
						style="width: 114rpx; height: 83rpx;margin-right: 12rpx;">
					<text class="font-30 text-333">签约医生</text>
				</view>
			</view>
		</view>
		<view>
			<view class="px-3 bg-white icon-list flex my-3">
				<view class="flex flex-column justify-center align-center">
					<img src="@/static/index/consultation.png" alt="" srcset="" style="width: 105rpx; height: 90rpx;">
					<text class="font-small text-333">在线咨询</text>
				</view>
				<view class="flex flex-column justify-center align-center">
					<img src="@/static/index/reservation.png" alt="" srcset="" style="width: 85rpx; height: 90rpx;">
					<text class="font-small text-333">在线预约</text>
				</view>
				<view class="flex flex-column justify-center align-center">
					<img src="@/static/index/review.png" alt="" srcset="" style="width: 82rpx; height: 85rpx;">
					<text class="font-small text-333">查阅健康档案</text>
				</view>
			</view>
		</view>
		<view class="news">
			<view class="news-title"></view>
			<view class="news-item">
				<view class="uni-list">
					<block v-for="(value, index) in listData" :key="index">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover">
							<view class="uni-media-list">
								<image class="uni-media-list-logo" :src="value.cover"></image>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top">{{ value.title }}</view>
									<view class="uni-media-list-text-bottom">
										<text>{{ value.author_name }}</text>
										<text>{{ value.published_at }}</text>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
			</view>
			<view class="news-footer"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'userIndex',
		data() {
			return {
				listData: [{
						"id": 121375,
						"post_id": "5310910",
						"title": "\u4e3a\u4ec0\u4e48\u81ea\u52a8\u9a7e\u9a76\u8bc9\u8bbc\u4e0d\u65ad\uff1f",
						"author_name": "\u672a\u6765\u6c7d\u8f66\u65e5\u62a5",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_9c3331af67e64994aa97a27fffb1a380_img_png?x-oss-process=image\/resize,m_mfit,w_520,h_300\/crop,w_520,h_300,g_center",
						"published_at": "2020-04-11 17:07:48",
						"content": ""
					},
					{
						"id": 121374,
						"post_id": "5310906",
						"title": "2020\u6570\u5b57\u4e2d\u56fd\u521b\u65b0\u5927\u8d5b-\u6570\u5b57\u653f\u5e9c\u8d5b\u905321\u5f3a\u51fa\u7089\uff0c\u56db\u5927\u8d5b\u9898\u7d27\u8d34\u653f\u5e9c\u6570\u5b57\u5316\u53d1\u5c55\u9700\u6c42",
						"author_name": "36\u6c2a\u6df1\u5ea6\u670d\u52a1",
						"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_16417a06088947debe0450950f8fc813_img_png",
						"published_at": "2020-04-11 16:59:15",
						"content": ""
					},
					{
						"id": 121373,
						"post_id": "5310903",
						"title": "\u5730\u65b9\u653f\u5e9c\u6551\u5e02\u54ea\u5bb6\u5f3a\uff1f\u5e7f\u5dde\u8865\u8d34\u4e0a\u4e07\u5143\uff0c\u5e7f\u6df1\u676d\u65b0\u589e\u6307\u6807\u8d855\u4e07",
						"author_name": "\u672a\u6765\u6c7d\u8f66\u65e5\u62a5",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_6905947498bc4ec0af228afed409f771_img_png?x-oss-process=image\/resize,m_mfit,w_520,h_300\/crop,w_520,h_300,g_center",
						"published_at": "2020-04-11 16:09:09",
						"content": ""
					},
					{
						"id": 121372,
						"post_id": "5310813",
						"title": "\u6551\u547d\u547c\u5438\u673a\u7f3a\u53e3\u96be\u8865\uff01\u4e00\u6587\u6252\u5f00\u4f9b\u5e94\u94fe\u771f\u76f8",
						"author_name": "\u667a\u4e1c\u897f",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_86bbf8245f754be79f3386a82b385093_img_000",
						"published_at": "2020-04-11 15:40:02",
						"content": ""
					},
					{
						"id": 121371,
						"post_id": "5309573",
						"title": "\u6bcf\u6708\u8282\u770132%\u7684\u5f00\u652f\uff0c\u6211\u662f\u600e\u4e48\u505a\u5230\u7684\uff1f",
						"author_name": "\u795e\u8bd1\u5c40",
						"cover": "https:\/\/img.36krcdn.com\/20200408\/v2_c67c3edfe4b5446992b32fad93a44a75_img_png",
						"published_at": "2020-04-11 14:48:02",
						"content": ""
					},
					{
						"id": 121369,
						"post_id": "5310859",
						"title": "\u74dc\u5b50\u575a\u679c\u53cc\u589e\u957f\uff0c\u4f46\u6d3d\u6d3d\u5e76\u4e0d\u80fd\u9ad8\u6795\u65e0\u5fe7",
						"author_name": "\u8d44\u672c\u4fa6\u63a2",
						"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_2204c6132432403184e43df22485545e_img_000?x-oss-process=image\/resize,m_mfit,w_432,h_288\/crop,w_432,h_288,g_center",
						"published_at": "2020-04-11 14:23:00",
						"content": ""
					},
					{
						"id": 121367,
						"post_id": "5309137",
						"title": "\u514b\u670d\u5371\u673a\u548c\u538b\u529b\uff0c\u7cbe\u795e\u529b\u91cf\u5f3a\u5927\u7684\u4eba\u90fd\u6709\u8fd95\u4e2a\u4e60\u60ef",
						"author_name": "\u795e\u8bd1\u5c40",
						"cover": "https:\/\/img.36krcdn.com\/20200406\/v2_d2c6a686b4074a1eb43603e67d6ba204_img_png",
						"published_at": "2020-04-11 13:47:01",
						"content": ""
					},
					{
						"id": 121365,
						"post_id": "5310864",
						"title": "\u795e\u5dde\u79df\u8f66\u627e\u7239\u8bb0",
						"author_name": "PingWest\u54c1\u73a9",
						"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_f497b1c414d5489791569b3ea99df33d_img_000",
						"published_at": "2020-04-11 13:39:00",
						"content": ""
					},
					{
						"id": 121366,
						"post_id": "5310884",
						"title": "\u200b\u6296\u97f3\u5feb\u624b\u660e\u661f\u56fe\u9274\uff1a\u54ea\u4e2a\u5e73\u53f0\u66f4\u9002\u5408\u660e\u661f\u201c\u518d\u5c31\u4e1a\u201d\uff1f",
						"author_name": "\u660e\u661f\u516b\u722a\u5a31",
						"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_da4c26244cbc494c8e0e5918518e866c_img_png",
						"published_at": "2020-04-11 13:38:00",
						"content": ""
					},
					{
						"id": 121364,
						"post_id": "5309105",
						"title": "\u52a8\u8361\u7684\u5e02\u573a\u4e2d\uff0c\u4f60\u9700\u8981\u7262\u8bb0\u5df4\u83f2\u7279\u7684\u8fd93\u4e2a\u539f\u5219",
						"author_name": "\u795e\u8bd1\u5c40",
						"cover": "https:\/\/img.36krcdn.com\/20200406\/v2_232e9248d5c74ff989db57a0b6713abe_img_png",
						"published_at": "2020-04-11 12:45:02",
						"content": ""
					},
					{
						"id": 121362,
						"post_id": "5310858",
						"title": "\u8fde\u4e8f\u516d\u5e74\u3001\u80a1\u4ef7\u8dcc\u78341\u7f8e\u5143\uff0c\u66fe\u7ecf\u7684\u660e\u661f\u516c\u53f8\u9014\u725b\u600e\u4e48\u4e86\uff1f",
						"author_name": "\u8d44\u672c\u4fa6\u63a2",
						"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_61c1766736df49a0b2d0213624c0ebd2_img_000?x-oss-process=image\/resize,m_mfit,w_432,h_288\/crop,w_432,h_288,g_center",
						"published_at": "2020-04-11 12:37:11",
						"content": ""
					},
					{
						"id": 121363,
						"post_id": "5310857",
						"title": "\u72ec\u5bb6 | \u5feb\u624b\u7248\u300c\u591a\u95ea\u300d\u4e0a\u7ebf:\u300c\u4e00\u751c\u9762\u804a\u300d\u5e03\u5c40\u89c6\u9891\u793e\u4ea4",
						"author_name": "Tech\u661f\u7403",
						"cover": "https:\/\/img.36krcdn.com\/20200411\/v2_b92317dfc59948cea0f3c69a0357e519_img_000?x-oss-process=image\/resize,m_mfit,w_432,h_288\/crop,w_432,h_288,g_center",
						"published_at": "2020-04-11 12:36:58",
						"content": ""
					},
					{
						"id": 121361,
						"post_id": "5308879",
						"title": "2020\u5e74\u5df2\u7ecf\u8fc7\u53bb\u4e86\u56db\u5206\u4e4b\u4e00\uff0c\u4f46\u6539\u53d8\u81ea\u5df1\u4e3a\u65f6\u4e0d\u665a",
						"author_name": "\u795e\u8bd1\u5c40",
						"cover": "https:\/\/img.36krcdn.com\/20200404\/v2_d6613223fb15414897a0ba3449d00afd_img_png",
						"published_at": "2020-04-11 11:44:00",
						"content": ""
					},
					{
						"id": 121360,
						"post_id": "5310797",
						"title": "2020\uff0c\u5e02\u573a\u90e8\u6c42\u751f\u6307\u5357",
						"author_name": "\u6c88\u5e05\u6ce2",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_c5997a3640f54c2c880cff0906f6896c_img_000",
						"published_at": "2020-04-11 11:31:00",
						"content": ""
					},
					{
						"id": 121359,
						"post_id": "5308279",
						"title": "\u5b9a\u4f4d\u65b0\u5a92\u4f53\u6574\u5408\u8425\u9500\u670d\u52a1\u5546\uff0c\u300c\u901a\u660e\u4f20\u5a92\u300d\u7528\u201c\u5c0fV\u77e9\u9635\u201d\u6253\u51fa\u5dee\u5f02\u5316",
						"author_name": "\u9648\u6dd1\u96c5",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_224a699a06504292804e4bdf70ca87bb_img_png",
						"published_at": "2020-04-11 11:09:58",
						"content": ""
					},
					{
						"id": 121358,
						"post_id": "5310804",
						"title": "BAT\u7684\u76f4\u64ad\u7535\u5546\u65b0\u6218\u4e8b",
						"author_name": "\u6765\u5496\u667a\u5e93",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_747fc8a18fde4da4b1ba1080d8e6aa04_img_000",
						"published_at": "2020-04-11 11:06:00",
						"content": ""
					},
					{
						"id": 121357,
						"post_id": "5310786",
						"title": "\u4f30\u503c50\u4ebf\u7f8e\u5143\uff0c\u201c\u79cd\u8349\u201d\u793e\u533a\u5934\u724c\uff0c\u5c0f\u7ea2\u4e66\u5982\u4f55\u8d70\u51fa\u5546\u4e1a\u5316\u8ff7\u9014\uff1f",
						"author_name": "\u521b\u4e1a\u6700\u524d\u7ebf",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_18c3a78cf8be42ccb45e4daba0c87c13_img_png",
						"published_at": "2020-04-11 10:41:00",
						"content": ""
					},
					{
						"id": 121356,
						"post_id": "5307961",
						"title": "\u5728\u6df7\u4e71\u548c\u4e0d\u786e\u5b9a\u7684\u65f6\u671f\uff0c\u4f60\u6700\u9700\u8981\u7684\u662f\u8fd95\u4e2a\u6280\u80fd",
						"author_name": "\u795e\u8bd1\u5c40",
						"cover": "https:\/\/img.36krcdn.com\/20200401\/v2_4afb7581cb5a4c36aac96a51829c13e0_img_png",
						"published_at": "2020-04-11 10:40:01",
						"content": ""
					},
					{
						"id": 121355,
						"post_id": "5310815",
						"title": "\u590d\u5de5\u6309\u4e0b\u6682\u505c\u952e\uff0c\u6f14\u51fa\u62a5\u6279\u9065\u9065\u65e0\u671f\uff0c\u7ebf\u4e0b\u97f3\u4e50\u8def\u5728\u4f55\u65b9\uff1f",
						"author_name": "\u97f3\u4e50\u5148\u58f0",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_41365a0f26a244fdab8e3f5be081ed2b_img_000",
						"published_at": "2020-04-11 10:06:00",
						"content": ""
					},
					{
						"id": 121354,
						"post_id": "5310719",
						"title": "\u51fa\u6d77\u521b\u6295\u5468\u62a5\uff5c\u963f\u91cc\u9886\u6295\u5370\u5ea6BigBasket6000\u4e07\u7f8e\u5143\u878d\u8d44\uff1bReliance\u5411AI\u6559\u80b2\u5e73\u53f0Embibe\u8ffd\u52a06600\u4e07\u7f8e\u5143\u6295\u8d44",
						"author_name": "36\u6c2a\u51fa\u6d77",
						"cover": "https:\/\/img.36krcdn.com\/20200410\/v2_fb948f4c18de4b22927f0361d53f6caf_img_png",
						"published_at": "2020-04-11 10:00:01",
						"content": ""
					}
				],
				last_id: '',
				reload: false,
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				dotsStyles: {
					backgroundColor: 'rgba(127, 180, 249, .3)',
					border: '1px rgba(255, 255, 255, .3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 255, 255, .9)',
					selectedBorder: '1px rgba(255, 255, 255, .9) solid'
				},
				swiperDotIndex: 0
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			onBanner(index) {
				console.log(22222, index);
			}
		},
	}
</script>

<style scoped lang="scss">
	.title {
		margin-top: 70rpx;
		margin-bottom: 35rpx;
	}

	.map {
		width: 26rpx;
		height: 30rpx;
	}

	.grid {
		background-color: #fdfdfd;
		border-radius: 32rpx;

		&-shadow {
			height: 150rpx;
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.04);
		}
	}

	.icon-list {
		border-radius: 16rpx;
		height: 200rpx;
		justify-content: space-around;
	}

	.rotation {
		margin-top: -238rpx;
	}

	.swiper-box {
		height: 260rpx;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 260rpx;
		color: #fff;
	}

	.image {
		width: 750rpx;
	}
	
	.uni-media-list-logo {
		width: 180rpx;
		height: 140rpx;
	}
	
	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}
	
	.uni-media-list-text-top {
		height: 74rpx;
		font-size: 28rpx;
		overflow: hidden;
	}
	
	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
</style>