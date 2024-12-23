---
title: how to sync different folder in git
subtitle: 如何让不同的git仓库下的不同文件夹进行同步
type: blog
categories: software
tags:
  - git
date: 2024-12-17
location: sysu
---
我利用hexo博客搭建了自己的个人博客，但是使用vscode总是感觉无法很好的管理整理自己的博客，这时候我想到了obsidian，我希望利用obsidian作为我的博客管理软件。但是我的博客obsidian已经利用git同步了。这时有两个办法
- 在obsidian的博客下建立一个hexoblog
- 在wsl下安装obsidian
- 利用git对两个文件夹进行同步。
这里先介绍第三个版本
可以让两个不同Git仓库中的一个文件夹保持同步。
 
一种常见的方法是使用 git subtree 或 git submodule 。不过 git subtree 相对来说更容易上手用于这种场景。
 
例如，假设你有仓库A和仓库B，想要同步仓库A中的 folder1 到仓库B中。
 
1. 在仓库B中添加仓库A作为一个远程仓库：
-  git remote add repoA <仓库A的远程路径> 
2. 用 git subtree 拉取仓库A中的 folder1 ：
-  git subtree add --prefix=<仓库B中的目标路径> repoA <分支名> --squash ，这里的 --squash 参数是把从远程仓库拉取的提交合并成一个，减少历史记录的混乱。
 
之后如果仓库A中的 folder1 有更新，在仓库B中同步更新可以使用：
 git subtree pull --prefix=<仓库B中的目标路径> repoA <分支名> --squash 。
 
另外，如果不想使用 git subtree 这种方式，也可以编写脚本，通过 git checkout 和 cp （复制文件）命令组合来手动实现从一个仓库的文件夹复制到另一个仓库的对应文件夹，但这种方式比较麻烦，并且容易出错。

