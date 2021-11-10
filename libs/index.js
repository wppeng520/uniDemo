//时间戳
import timestamp from '@/libs/function/timestamp.js';

//防抖函数
import debounce from '@/libs/function/debounce.js';

//函数节流
import throttle from '@/libs/function/throttle.js';

import toast from '@/libs/function/toast.js';

import trim from '@/libs/function/trim.js';

import guid from '@/libs/function/guid.js'

const $u = {
	timestamp,
	debounce,
	throttle,
	toast,
	trim,
	guid
}

import { mapState } from 'vuex'
import store from "@/store"

// 尝试将用户在根目录中的store/index.js的vuex的state变量，全部加载到全局变量中
let $uStoreKey = [];
try{
	$uStoreKey = store.state ? Object.keys(store.state) : [];
}catch(e){
	
}

const mixin = {
	created() {
		// 将vuex方法挂在到$u中
		// 使用方法为：如果要修改vuex的state中的user.name变量为"史诗" => this.$u.vuex('user.name', '史诗')
		// 如果要修改vuex的state的version变量为1.0.1 => this.$u.vuex('version', '1.0.1')
		this.$u.vuex = (name, value) => {
			this.$store.commit('$uStore', {
				name,value
			})
		}
	},
	computed: {
		// 将vuex的state中的所有变量，解构到全局混入的mixin中
		...mapState($uStoreKey)
	},
	methods: {
		//清空页面数据
		$_clearPageData(){
			//页面卸载时,需清空当前页面填写值，否则可能出现几个页面的值搅在一起
			this.$u.vuex('vuex_pageData',{});
			this.$u.vuex('vuex_pageDataRules',{});
		},
		$_test(){
			console.log('测试混入')
		}
	},
}

module.exports = {
	$u,
	mixin
}
