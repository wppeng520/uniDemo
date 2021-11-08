<template>
	<view class="page">
		<m-form-input label="手机号" required type="number" code="Phone" rule="^1[0-9]{10,10}$" placeholder="请输入手机号" errTip="请输入正确的手机号"/>
		<m-form-input label="邮箱" code="Email" rule="^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$" errTip="请输入正确的邮箱地址" />
		<m-form-btn @submit="tapSubmit" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			tapSubmit(e){
				if(!e.isRules){
					this.$u.toast('请按要求录入数据')
				}else{
					console.log(e.pageData)
				}
			}
		}
	}
</script>

<style scoped>
	
</style>
