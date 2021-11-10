<template>
	<view class="page">
		<m-form-input label="手机号" required type="number" code="Phone" rule="^1[0-9]{10,10}$" placeholder="请输入手机号"
			errTip="请输入正确的手机号" />
		<m-form-input label="邮箱" code="Email" rule="^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$"
			errTip="请输入正确的邮箱地址" />
		<m-form-radio-page label="审核人(单选)" path="/pages/publicSelect/userListRadio" required code="auditor" :value="model.auditor" />
		<m-form-checkbox-page label="抄送人(多选)" path="/pages/publicSelect/userListMulti" code="copyUser" :value="model.copyUser" />
		<m-form-textarea label="备注(必填)" code="Remark0" required placeholder="请填写备注" />
		<m-form-textarea label="备注(选填)" code="Remark1" placeholder="请填写备注" :maxlength="200" />
		<m-form-radio label="水果(单选)" required code="Fruit" :value="0" :list="Fruits" />
		<m-form-checkbox label="水果(多选)" code="Fruits" :value="activeFruits" :list="Fruits" />

		<m-form-btn @submit="tapSubmit" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Fruits: [{
					id: 1,
					label: '苹果'
				}, {
					id: 2,
					label: '香蕉'
				}, {
					id: 3,
					label: '梨'
				}, {
					id: 4,
					label: '柚子'
				}, {
					id: 5,
					label: '橘子'
				}, {
					id: 6,
					label: '猕猴桃'
				}, {
					id: 7,
					label: '哈密瓜'
				}, {
					id: 8,
					label: '西瓜'
				}],
				activeFruits: [],
				model:{}
			}
		},
		onLoad() {

		},
		onShow() {
			
			//存在跳转页面时需要初始化赋值
			this.model={...this.vuex_pageData};
			
		},
		onUnload() {
			//页面卸载，清空页面填写的值
			this.$_clearPageData();
		},
		methods: {
			tapSubmit(e) {
				console.log(e.pageData)
				if (!e.isRules) {
					this.$u.toast('请按要求录入数据')
				} else {
					console.log(e.pageData)
				}
			}
		}
	}
</script>

<style scoped>

</style>
