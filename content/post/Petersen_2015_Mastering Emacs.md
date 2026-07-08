+++
title = "Petersen_2015_Mastering Emacs"
author = ["Kazure Zheng"]
date = 2026-06-30T00:00:00+08:00
tags = ["emacs", "blog"]
draft = false
+++

## Preface {#preface}

<span class="timestamp-wrapper"><span class="timestamp">[2026-06-30 Tue 19:59]</span></span>
完整看完这本书了，感觉这本书只是适合完全没有使用过 Emacs 的人使用。
因此读书笔记也没什么好写的，只能记录一下，书里面写了什么我从没用过的命令。


## Main {#main}


### apropos-command `C-h a` {#apropos-command-c-h-a}

使用正则的匹配，批量搜索类似的命令，弹出一个界面显示搜索的结果。
除了会展示所有类似的命令，还会显示一些 description 同时可以使用 `RET` 快速跳转到指定命令的 help 界面。


### marks in dired {#marks-in-dired}

可以使用 `*` 来标记需要修改的文件，然后进行批量修改。

其他：

`</>`
: prev/next directory


### shell-command `M-|` {#shell-command-m}

这个命令可以把选中的区域作为之后运行 shell-command 的输入。
和其他的 shell-command 不同，这个命令是直接在 buffer 内对选中的区域进行一个操作。

`M-|`
: 这个命令只是把内容输出到 **Shell Command Output**

`C-u M-|`
: 会直接把得到的结果和选中的区域进行一个替换。

选中下面的内容，尝试使用 `jq .` 进行替换。

```json
{"user":"kasure","system":"Debian","langs":["C++","Go","Elisp"],"hpc_active":true}
```


### 输入特殊符号 `C-x 8` {#输入特殊符号-c-x-8}

这个前缀命令可以输入很多特殊的符号，比如：

-   ¶
-   🐂
-   Ä
-   ¾

是谁闲着无聊，把这些字符塞进来的，:'D


### bookmark system {#bookmark-system}

看上去这个书签系统很好用，但是目前 roam 提供的搜索功能已经基本能满足我需要的文件跳转功能了。

`C-x r m`
: 设置书签

`C-x r l`
: 浏览书签

`C-x r b`
: 跳转书签

`C-x r` 还有临时寄存器的功能，这个我倒是用得比较多，可以保存各种内容，比如文本、鼠标位置等等信息，确实比较好用。
可以用 `C-x r s` 保存一些经常需要复制粘贴的内容，然后结合键盘宏，进行批量的操作。


### sort-regexp-fields {#sort-regexp-fields}

很难想象前人都用 Emacs 干什么，居然把文本排序的命令都做了进来。

```fundamental
Price, Product
$3.50, Cappuccino
$4.00, Caramel Latte
$2.00, Americano
```

选中上面的段落然后使用该命令，输入这样的正则 `^\([^,]+\),\([^,]+\)$`, 然后使用 `\1` 选择要排序依据的文本，你会神奇地发现居然选中的段落按照价格排好了序。


### align {#align}

真没想到还内置了文本对齐的功能。

align
: 选中区域，然后应用默认的对齐规则

align-current
: 自动选择区域应用默认的对齐规则。

align-regexp
: 找到你指定的正则表达式，并把它前面的空格调整到对齐。

<!--listend-->

```fundamental
apple = 1 = 1
banana = 200 = 2
cherry_pie = 30 = 3
```
