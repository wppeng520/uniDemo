#### 组件说明

此组件为一个日期选择框

#### 基本使用

```
<m-form-date label="开始日期" code="beginDate" required placeholder="请选择开始日期" value="2021年12月20日" />

```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|:----|:----|:----|:----|:----|
|`label`|标题|`String`|标题|-|
|`code`|表单字段 `id `，用于配合 `m-form-btn` 提交数据使用|`String`|`id`|-|
|`value`|日期数据，例如：2021年11月11日，必须带上年月日| `String`|-|-|
|`placeholder`|`placeholder`显示值|`String`|请输入数据|-|
|`required`|是否必填|`Boolean`|`false`|`false` / `true`|
