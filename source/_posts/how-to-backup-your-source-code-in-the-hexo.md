---
title: how to backup your source code in the hexo
date: 2024-12-15 13:40:07
categories: [software]
tags: [hexo]
---

由于hexo上传的总是编译后的静态文件，如果源文件丢失了就很尴尬了。所以备份源文件还是必要的。由于hexo-deploy插件不会创建.git文件，所以我们可以利用git进行备份。

```zsh
git init
git checkout -b backup
git add remote origin <your github path>
git add .
git commit -m backup
git push origin backup
```

