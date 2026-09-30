---
title: Markdown2
tags:
  - markdown
createTime: 2023/10/10 22:00:00
permalink: /article/za450uyl/
---

## 1 Markdown语言简介

- Markdown 是一种轻量级的标记语言。
- Markdown 介于Word与txt之间，既省去了Word中各种类型格式的臃肿与不兼容，又优化了txt的单一格式，使写作更具有层次与条理。
- 使用Markdown 编写的文档可以轻松地导出为 HTML、Word、图像、PDF、Epub 等多种格式的文档，十分方便写作。

[Markdown官方教程](https://markdown.com.cn/)

[Markdown在线编辑器](https://markdown.com.cn/editor/)

P.S.不想看文字的可以看[推荐的B站精简教程](https://www.bilibili.com/video/BV1JA411h7Gw/?share_source=copy_web&vd_source=49c2bcdba7dd8d023c3c0da8434e569a)（非本人制作）

## 2 Markdown语法教程

### 2.1 标题

不同数量的`#`可以完成不同的标题，在符号`#`后加`空格`使用，效果如下：

# 一级标题 

## 二级标题 

### 三级标题 

#### 四级标题 

##### 五级标题

### 2.2 字体

粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。效果如下：

**这个是粗体** `**+文字+**`

*这个是斜体* `*+文字+*`

***这个是粗体加斜体*** `***+文字+***`

~+空格+文字
~ 删除文字间距行

注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌HTML来实现。

### 2.3 无序列表

无序列表的使用，在符号`-`后加`空格`使用。效果如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号`-`前使用`空格`。效果如下：

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2

**微信公众号文章最多支持到二级列表**。

### 2.4 有序列表

有序列表的使用，在数字及符号`.`后加`空格`后输入内容，效果如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 2.5 引用

引用的格式是在符号`>`后面书写文字。效果如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 2.6 链接

微信公众号仅支持公众号文章链接，即域名为`https://mp.weixin.qq.com/`的合法链接。使用方法如下所示：

对于该论述，欢迎读者查阅之前发过的文章，[你是《未来世界的幸存者》么？](https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA)
<a id="jump_8"></a>

`格式：[文字](链接)`
### 2.7 图片

插入图片，格式如下：

`![这里写图片描述](https://www.nginx.cn/wp-content/uploads/2020/03/qrcode_for_gh_82cf87d482f0_258.jpg)`

效果如下：

![这里写图片描述](https://www.nginx.cn/wp-content/uploads/2020/03/qrcode_for_gh_82cf87d482f0_258.jpg)

支持 jpg、png、gif、svg 等图片格式，**其中 svg 文件仅可在微信公众平台中使用**，svg 文件示例如下：

`![](https://markdown.com.cn/images/i-am-svg.svg)`

效果如下：

![](https://markdown.com.cn/images/i-am-svg.svg)

支持图片**拖拽和截图粘贴**到编辑器中。

注：支持图片 ***拖拽和截图粘贴*** 到编辑器中，仅支持 https 的图片，图片粘贴到微信时会自动上传微信服务器。[本地图片转网络链接在线网站](https://blog.csdn.net/hon_vin/article/details/111323935?spm=1001.2101.3001.6650.8&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-8-111323935-blog-128920713.235%5Ev38%5Epc_relevant_anti_t3_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-8-111323935-blog-128920713.235%5Ev38%5Epc_relevant_anti_t3_base&utm_relevant_index=12)

### 2.8 分割线

可以在一行中用<u>三个以上的减号</u>来建立一个分隔线，同时需要<u>在分隔线的上面空一行</u>。效果如下：

---

### 2.9 表格

可以使用冒号来定义表格的对齐方式，格式如下：
```
| 姓名   | 年龄   |  工作 |   
| :----- | :--: | -------: |   
| 小可爱 |  18  | 吃可爱多 |   
| 小小勇敢 |  20  | 爬棵勇敢树 |     
| 小小小机智 |  22  | 看一本机智书 |
```
效果如下：
| 姓名   | 年龄   |  工作 |   
| :----- | :--: | -------: |
| 小可爱 |  18  | 吃可爱多 |
| 小小勇敢 |  20  | 爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

### 2.10 高亮文字

`==文字==`

==这是一段高亮文字==

### 2.11 下划线
`<u>文字</u>`<u>文字</u>

### 2.12 标准的表情符号
`:smile:`
:smile:(参考[emoji国际通用表情代码](https://unicode.org/emoji/charts/full-emoji-list.html))

### 2.13 上标&下标

`H_2_O` H_2_O

`X^2^`X^2^

### 2.14 复选框

`未选：- [ ]
选中：- [x]
`
- [ ] 未选
- [x] 选中


## 3. 特殊语法

### 3.1 脚注

> 支持平台：微信公众号、知乎。

脚注与链接的区别如下所示：

```markdown
链接：[文字](链接)
脚注：[文字](脚注解释 "脚注名字")
```

有人认为在[大前端时代](https://en.wikipedia.org/wiki/Front-end_web_development "Front-end web development")的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。

[全栈工程师](是指掌握多种技能，并能利用多种技能独立完成产品的人。 "什么是全栈工程师")在业务开发流程中起到了至关重要的作用。

脚注内容请拉到最下面观看。

### 3.2 代码块

> 支持平台：微信代码主题仅支持微信公众号！其他主题无限制。

如果在一个行内需要引用代码，只要用反引号引起来就好，效果如下：

Use the `printf()` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，效果如下：

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

支持以下语言种类：

```
bash
clojure，cpp，cs，css
dart，dockerfile, diff
erlang
go，gradle，groovy
haskell
java，javascript，json，julia
kotlin
lisp，lua
makefile，markdown，matlab
objectivec
perl，php，python
r，ruby，rust
scala，shell，sql，swift
tex，typescript
verilog，vhdl
xml
yaml
```

如果想要更换代码高亮样式，可在上方**代码主题**中挑选。

其中**微信代码主题与微信官方一致**，有以下注意事项：

- 带行号且不换行，代码大小与官方一致
- 需要在代码块处标志语言，否则无法高亮
- 粘贴到公众号后，用鼠标点代码块内外一次，完成高亮

diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:

```diff
+ 新增项
- 删除项
```

**其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致**

### 3.3 数学公式

> 支持平台：微信公众号、知乎。

行内公式使用方法，比如这个化学公式：
$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$

`$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$`

块公式使用方法如下：

$$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$$

`$$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$$`

矩阵：

$$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
$$


```
$$     
  \begin{pmatrix}    
  1 & a_1 & a_1^2 & \cdots & a_1^n \\                      
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
$$
```


公式由于微信不支持，目前的解决方案是转成 svg 放到微信中，无需调整，矢量不失真。

目前测试如果公式量过大，在 Chrome 下会存在粘贴后无响应，但是在 Firefox 中始终能够成功。

### 3.4 TOC

> 支持平台：微信公众号、知乎。

TOC 全称为 Table of Content，列出全部标题。

[TOC]

由于微信只支持到二级列表，本工具仅支持二级标题和三级标题的显示。

### 3.5 注音符号

> 支持平台：微信公众号。

支持注音符号，用法如下：

`Markdown Nice 这么好用，简直是{喜大普奔|hē hē hē hē}呀！`

Markdown Nice 这么好用，简直是{喜大普奔|hē hē hē hē}呀！

### 3.6 横屏滑动幻灯片

> 支持平台：微信公众号。

通过`<![](url),![](url)>`这种语法设置横屏滑动滑动片，具体用法如下：

`<![蓝1](https://markdown.com.cn/images/blue.jpg),![绿2](https://markdown.com.cn/images/green.jpg),![红3](https://markdown.com.cn.jpg)>`

<![蓝1](https://markdown.com.cn/images/blue.jpg),![绿2](https://markdown.com.cn/images/green.jpg),![红3](https://markdown.com.cn.jpg)>

## 4 其他语法

### 4.1 HTML

支持原生 HTML 语法，请写内联样式，如下：

`<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>`

<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>

### 4.2 UML

不支持，推荐使用开源工具`https://draw.io/`制作后再导入图片

