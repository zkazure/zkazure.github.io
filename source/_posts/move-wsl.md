---
title: move wsl
date: 2024-12-12 09:48:55
categories:
tags:
---

wsl install in C default.

```
wsl --export Debian D:\wsl
wsl --unregister Debian
wsl --import Debian D:\wsl\Debian.tar
```

move the wsl, you default user will change to root

```
vim /etc/wsl.conf
```

add

```
[user]
default=<your user>
```
