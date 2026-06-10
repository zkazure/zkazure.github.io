+++
title = "key remapping in Debian"
author = ["Kazure Zheng"]
date = 2026-03-19T00:00:00+08:00
tags = ["blog"]
draft = false
+++

## Preface {#preface}

使用 Emacs 这样的工具，虽然极大提升了效率，但是大量的修饰键，容易 rsi。
因此我尝试了一些社区主流的 key remapping。


## Main {#main}

有两种方法，


### Global {#global}

修改 `/etc/default/keyboard`,

```cfg
XKBOPTIONS="ctrl:swapcaps, ctrl:swap_ralt_rctl"
```

交换了左 ctrl 和 CapsLock，右 ctrl 和右 alt。


### Temporal {#temporal}

```sh
setxkbmap -option "ctrl:swapcaps"
```
