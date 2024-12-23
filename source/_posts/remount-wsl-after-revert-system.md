---
title: wsl移动系统镜像之后，还原系统之后重新挂载wsl
subtitle: remount wsl after revert system
date: 2024-12-16 17:07:40
categories: [software]
tags: [wsl]
---


for some reason I move my wsl_debian to D disk, however I met some problem when reset my network and have to revert my system. And although my wsl_debian keep still, but system could not find it anymore.
1. install and update wsl, then install a linux the same as your original linux.
2. press <win> + <r>, and input regedit.
3. find `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss`

5. find ```BasePath```, and change it to your original wsl_path.