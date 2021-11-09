#### 组件说明

此组件为一个多行输入框，利用它可以快速实现表单验证，输入内容

#### 基本使用

```
<m-form-textarea label="备注(必填)" code="Remark0" required placeholder="请填写备注" />
```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`code`|表单字段 `id `，用于配合 `m-form-btn` 提交数据使用|`String`|`id`|-|
|`value`|初始值|`String`，用于编辑页面绑定值|-|-|
|`placeholder`|`placeholder`显示值|`String`|请输入数据|-|
|`required`|是否必填|`Boolean`|`false`|`false` / `true`|
|`maxlength`|限制文本输入的最长字符串|`Number`|100|-|
