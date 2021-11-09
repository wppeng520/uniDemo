#### 组件说明

此组件为一个多选框，数据在当前页面

#### 基本使用

```
<m-form-checkbox label="水果(多选)" code="Fruits" :value="activeFruits" :list="Fruits" />
data() {
	return {
		Fruits:[{
			id:1,
			label:'苹果'
		},{
			id:2,
			label:'香蕉'
		}],
		activeFruits:[]
	}
},

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`code`|表单字段 `id `，用于配合 `m-form-btn` 提交数据使用|`String`|`id`|-|
|`value`|`list`数据对应的id,初始值，用于编辑页面绑定值| `Array`|[]|-|
|`list`|带选择的数据列表，对象结构得满足{id:0,label:'名称'}|`Array`|[]|-|

#### 说明
当未选中任何值时，返回数据为[]，否则返回数据对象[{id:0,label:'名称'}]。