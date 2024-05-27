<template>
	<view>
		<my-navbar :title="title"></my-navbar>
		<view class="px-3 pt-5 pb-5">
			<view class="introduce">
				<view class="">(一) 基本公共卫生服务:</view>
				<view class="">1.为乙方开展健康体检，建立统一、规范的居民个人健康档案，并及时、准确地将相关信息录入相关信息系统。</view>
				<view class="">2.开展有针对性的健康知识和健康技能教育，每两个月至少举办 1 次健康知识讲座。3.及时通知适龄儿童及其家长到指定地点接受常规预防接种，并为目标儿童建立预防接种卡和证。</view>
				<view class="">4.为 0-6 岁儿童提供健康管理服务，提供包括生长发育监测及评价、辅食添加指导、口腔保健、心理评估等服务以及中医健康指导。对 28 天新生儿进行家庭访视2次，指导母喂养;1岁以内婴儿每年健康检查4次:1-3 岁儿童每年健康检查2次;4~6岁每年1次5.通知孕产妇按时接受健康管理。指导怀孕妇女于孕13周前到医疗卫生保健机构建立孕产妇保健手册、定期接受产前检查、住院分娩及产后42天健康检查;开展孕产妇访视和上门健康服务及中医健康指导;为产妇进行至少2次产后访视</view>
				<view class="">6.为老年人进行年度健康体检和中医保健，不定期进行健康指导。</view>
				<view class="">
					7.对高血压及糖尿病患者进行年度健康体检。根据评估结果，对血糖(血压)已控制满意的每年面对面随访4次;对首次随访出现血糖(血压) 控制不满意或有药物反应者，必要时增加现用药剂量或调整药物，2周后随访;连续随访 2 次出现血糖(血压) 控制不满意或药物不良反应难以控制以及出现新的并发症或原有并发症加重的患者，建议转诊到上级医疗机构就诊，2周后随访:随访时做好随访服务记录、行为于预中医指导和治疗指导
				</view>
				<view class="">
					8.为严重精神障碍患者建立健康档案。对稳定和基本稳定病人每年至少面对面随访4次;对治疗无效或不稳定病人建议转诊，2 周后随访，若处理后病情趋于稳定者，可维持目前治疗方案。3个月时随访:未达到稳定者，应请上级专科医师进行技术指导，1个月时随
				</view>
				<view class="">
					访。指导患者亲属对严重精神障碍患者的护理和康复。9.为肺结核患者建立健康档案。提供健康教育、随访、分类干预、结案评估等服务10.为残疾人建立健康档案。为符合条件的残疾人提供对应人群的基本公共卫生服务11.为脱贫人口或监测对象建立健康档案，为符合条件的脱贫人口或检测对象对应人群的基本公共卫生服务。
				</view>
				<view class="">
					12.为计划生育特殊家庭人员建立健康档案。为符合条件的计划生育特殊家庭人员提供
				</view>
				<view class="">
					对应人群的基本公共卫生服务。
				</view>
				<view class="">
					(二)基本医疗服务。采用适宜技术、基本药物等，帮助乙方解决常见健康问题。在甲方向乙方告知在家诊疗有医疗风险的前提下，经甲乙双方同意，开展家庭式治疗，其收费按照国家有关文件标准执行。如涉及特殊收费项目，由双方协商确定。对病情较稳定、依从性较好的慢性病签约居民(主要针对高血压、糖尿病、冠心病、脑血管病等慢性病患者)，实施一次可开具治疗性药物 1-2 个月长处方政策
				</view>
				<view class="">
					(三)家庭健康管理。每年对签约家庭进行 1次家庭健康状况评估，为其家庭成员提供健康指导、健康咨询、营养咨询、心理咨询、用药咨询等服务。及时将健教材料发放到签约居民;及时将健康咨询活动和健康教育讲座等健康活动信息和季节性、突发性公共卫生事件信息告知签约居民。
				</view>
				<view class="">
					(四)联系预约、转诊服务。对符合上转指征需转至上级医院进一步诊治的非急诊患者，可通过预约转诊方式，为其按照预约门诊形式负责转诊事项。预约确定后，由甲方开具转诊单并通知乙方相关预约信息。对于急诊签约居民需转上级医院的患者，可直接通过 120转诊，一周内乙方告知甲方，并补齐相关手续。(预约内容有:专家门诊号、预约床位、大型仪器设备检查 )
					以上(一)、(三)、(四)服务为签约家庭免费享受的服务项目，不收取服务费用第(二)项基本医疗服务中的内容，根据具体情况进行合理收费
				</view>
			</view>
			<view class="sign-name">
				<img  v-if="signPath" @click="$U.gotoPage('/pages/sub-packages-user/my/signature/index')" :src="signPath" alt="" srcset="" style="height: 180rpx; width: 450rpx;" />
				<img v-else @click="$U.gotoPage('/pages/sub-packages-user/my/signature/index')" style="height: 180rpx; width: 450rpx;" src="@/pages/sub-packages-user/static/sign-name.png" alt="" srcset="" />
			</view>
			<view @click="submit" class="submit">
				提交申请
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '在线签约',
				type: '', // user | doctor
				signId: '' ,// 签约id
				doctorId: '', // 用户列表-医生id
			}
		},
		computed: {
			signPath() {
				return this.$store.getters.signPath
			}
		},
		onLoad(options) {
			this.title = options.title;
			this.type = options.type;
			this.signId = options.signId;
			this.doctorId = options.doctorId;
		},
		methods: {
			submit() {
				const signPath = this.$store.getters.signPath;
				if(this.type === 'doctor') {
					// 医生-同意签约
					this.$H.post('/api/APP/WXUser/ConsentSign', { DoctorSignImg: signPath, SignId: this.signId })
						.then(res => {
							// 清除signPath
							this.$store.dispatch('sign/setSignPath', '')
						})
					// 跳转到首页
					this.$U.gotoPageTab('/pages/sub-packages-doctor/my/online-signing-list/index')
				} else {
					// 用户-发起签约
					const UserId = this.$store.getters.userInfo.UserId;
					this.$H.post('/api/APP/WXUser/CreateSignInfo', { DoctorId: this.doctorId, UserId, UserSignImg: signPath }, {}, {show: true, text: '申请成功，请等待医生审核！'})
						.then(res => {
							// 清除signPath
							this.$store.dispatch('sign/setSignPath', '')
							// 返回上一页
							this.$U.backPage(-1)
						})
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.introduce {
		color: #6D6A6A;
		font-size: 24rpx;
	}
	.sign-name {
		margin-top: 40rpx;
		margin-bottom: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.submit {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		background-color: #2878ff;
		border-radius: 80rpx;
		height: 86rpx;
	}
</style>