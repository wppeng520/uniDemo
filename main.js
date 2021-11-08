import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import {
	mixin,
	$u
} from '@/libs/index.js'
import store from '@/store'

//混入，全局方法
Vue.mixin(mixin)

Vue.prototype.$u = $u

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif