#### 组件说明

此组件为一个递归组件，实现页面树结构，app上建议树结构最多为3层，否则难以展示数据

#### 基本使用

```
<m-tree :load="loadNode"></m-tree>

loadNode(node, resolve) {
	//console.log(node);

	if (node == null) {

		setTimeout(() => {
			//第一次调用
			let res = [{
				id: 1,
				text: '公司1',
				isExistChildNode: true, //是否存在子节点
				extra: {
					usercode: '00000001',
					prjid: '1234567890'
				} //额外的参数
			}, {
				id: 2,
				text: '公司2',
				isExistChildNode: false, //是否存在子节点
				extra: {
					usercode: '00000002',
					prjid: '1234567890'
				} //额外的参数
			}]
			return resolve(res);
		}, 1000)

	} else {
		if (node.isExistChildNode) {
			setTimeout(() => {
				//开始递归
				let res = [{
					id: 11,
					text: '部门1',
					isExistChildNode: false, //是否存在子节点
					extra: {
						usercode: '00000011',
						prjid: '1234567890'
					} //额外的参数
				}, {
					id: 12,
					text: '部门2',
					isExistChildNode: false, //是否存在子节点
					extra: {
						usercode: '00000012',
						prjid: '1234567890'
					} //额外的参数
				}]
				return resolve(res);
			}, 1000);
		} else {
			return resolve(null);
		}

	}


}

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|load|回调函数|Function|必填|-|
|nodeItem|节点数据|Object|null|-|
|leavl|树的层级|Number|1，从1开始算层级|-|


#### Events

|事件名称|说明|回调参数|
|:---|:---|:---|
|select|选择数据项|e{};nodeItem节点数据|

#### 补充说明

1. 递归组件不能使用this.$emit('select',item);来给父组件传值了，因为子组件中即存在子组件又存在父组件，可以通过EventBus来监听

2. 使用方法

```
//引用
import {
	bus
} from '@/libs/bus.js';

//父组件中监听
onLoad() {
	bus.$on('select', e => {
		console.log(e);
	})
},
```

```
//引用
import {
	bus
} from '@/libs/bus.js';

//子组件传值
tapSelect(item){
	//console.log(item);
	bus.$emit('select',item);
},

```

```
//bus.js文件

import Vue from "vue"

export const bus=new Vue();
```

3. 递归组件必须有name属性，要不找不到注册组件