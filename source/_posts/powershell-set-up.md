---
title: set up a perfect powershell
subtitle: 完美配置你的powershell
type: blog
categories: software
tags:
  - powershell
date: 2024-12-18
location: sysu
---
## insatll windows terminal
I had already installed one. 

## install font
1. download [here](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0/FiraCode.zip)
2. unzip
3. right click one .ttf file and click install. 

## insatll powershell core
1. dowload [here]([Releases · PowerShell/PowerShell](https://github.com/PowerShell/PowerShell/releases))
2. install
3. open it and :
```powershell
# 1. 安装 PSReadline 包，该插件可以让命令行很好用，类似 zsh
Install-Module -Name PSReadLine  -Scope CurrentUser

# 2. 安装 posh-git 包，让你的 git 更好用
Install-Module posh-git  -Scope CurrentUser

# 3. 安装 oh-my-posh 包，让你的命令行更酷炫、优雅
Install-Module oh-my-posh -Scope CurrentUser
```
4. config your powershell
  i don't want to config too much.
  