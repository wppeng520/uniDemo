#### 组件说明

此组件为一个单选框，数据在当前页面

#### 基本使用

```
<m-form-radio label="水果" code="Fruit" :list="Fruits" />
data() {
	return {
		Fruits:[{
			id:1,
			label:'苹果'
		},{
			id:2,
			label:'香蕉'
		}]
	}
},

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`code`|表单字段 `id `，用于配合 `m-form-btn` 提交数据使用|`String`|`id`|-|
|`value`|`list`数据对应的索引，-1代表不选中，用于编辑页面绑定值| `Number`|-1|-|
|`list`|带选择的数据列表，对象结构得满足{id:0,label:'名称'}|`Array`|[]|-|
|`required`|是否必填|`Boolean`|`false`|`false` / `true`|

#### 说明
当未选中任何值时，返回数据为null，否则返回数据对象{id:0,label:'名称'}。