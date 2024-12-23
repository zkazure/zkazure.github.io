---
title: How to backup your wsl
subtitle: 如何备份你的wsl子系统
type: blog
categories: softeware
tags:
  - wsl
date: 2024-12-22
location: sysu
---
1. stop wsl
```powershell
wsl --shutdown
```
2. backup
```powershell
wsl --export Debian D:\wsl\debian.tar
```
3. unregister
```powershell
wsl --unregister Debian
```
## Recover
```powershell
wsl --import Debian <the folder path to put Debian> <your backup file path>
```
### change the default user
1. check the current user `ls /home/`
2. change user `su <user>`
3. then `sudo su`
4. change config
```zsh
cp /etc/wsl.conf /etc/wsl.conf.bk
vim /etc/wsl.conf
```
5. change the content
```conf
[user]
default=<user>
```
6. reboot
```powershell
wsl --shutdown
wsl
```
