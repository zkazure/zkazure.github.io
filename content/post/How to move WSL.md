+++
title = "How to move WSL"
author = ["Kazure Zheng"]
date = 2025-12-20T00:00:00+08:00
tags = ["windows", "blog"]
draft = false
+++

wsl install in `C:\` default.

```shell
wsl --export Debian D:\wsl\debian.tar
wsl --unregister Debian
wsl --import Debian D:\wsl D:\wsl\Debian.tar
```
