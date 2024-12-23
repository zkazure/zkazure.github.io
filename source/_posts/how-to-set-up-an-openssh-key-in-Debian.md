---
title: how to set up an openssh key in Debian
date: 2024-12-23 11:11:48
categories: [software]
tags: [openssh]
---

1. install ssh
```zsh
sudo apt install ssh -y
```

2. how to generate
```zsh
ssh-keygen --help
ssh-keygen -s rsa -b 4096 -f ~/.ssh/<your keyname>
nvim ~/.ssh/config
```
add:
```config
Host github.com
  HostName github.com
  IdentityFile ~/.ssh/git_wsl
```

