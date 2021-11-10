#### 组件说明

此组件为一个跨页面多选，例如选择抄送人等

#### 基本使用

说明：需要在页面定义`model`对象，用于接收页面值，用于显示，而且`onShow`方法中需要对`model`赋值，页面才能够显示出来。
补充：只要跨页面的都需要这些设置

```
<m-form-checkbox-page label="抄送人(多选)" path="/pages/publicSelect/userListMulti" code="copyUser" :value="model.copyUser" />

data() {
	return {
		model:{}
	}
},
onShow() {
	
	//存在跳转页面时需要初始化赋值
	this.model={...this.vuex_pageData};
	
},

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`code`|表单字段 `id `，用于配合 `m-form-btn` 提交数据使用|`String`|`id`|-|
|`value`|选中的数据列[{id:'',text:''}],初始值，用于编辑页面绑定值| `Array`|[]|-|
|`path`|跨页面，需要跳转的选择页面|`String`|-|-|
