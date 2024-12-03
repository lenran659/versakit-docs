# Divider 分割线

<p>区隔内容的分割线。</p>

## 基础用法

<p>对不同段落的文本进行分割。</p>

<demo vue="../../example/divider/base.vue"></demo>

## 虚线

<p>您可以设置分隔符的样式。</p>

<demo vue="../../example/divider/style.vue"></demo>

## 设置文案

可以在分割线上自定义文本内容。

<demo vue="../../example/divider/text.vue"></demo>

## 垂直分割线

<p>垂直方向的分割线。</p>

<demo vue="../../example/divider/vertical.vue"></demo>


## Devider API

| 属性       | 说明                                                                                              | 类型      | 默认值    |
| ---------- | ------------------------------------------------------------------------------------------------- | --------- | --------- |
| `direction`     | 分隔线的方向，可以是`vertical`、`horizontal` | `string`  | `horizontal` |
| `position` | 分割线的位置，例如`top`、`right`   | `string` | `left`   |
| `line` | 分隔线的虚实    | `string` | `solid`   |