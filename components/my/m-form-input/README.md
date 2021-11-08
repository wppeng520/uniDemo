#### 组件说明

此组件为一个输入框，利用它可以快速实现表单验证，输入内容

#### 基本使用

```
<m-form-input label="邮箱" code="Email" rule="^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$" errTip="请输入正确的邮箱地址" />
```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`type`|输入内容的类型|`String`|`text`|`text` / `number`|
|`code`|表单字段 `id `，用于配合 `m-form-btn` 提交数据使用|`String`|`id`|-|
|`value`|初始值|`String`, `Number`|-|-|
|`placeholder`|`placeholder`显示值|`String`|请输入数据|-|
|`required`|是否必填|`Boolean`|`false`|`false` / `true`|
|`rule`|正则表达式，用于表单验证|`String`|-|-|
|`errTip`|错误提示|`String`|请输入正确的数据|-|


