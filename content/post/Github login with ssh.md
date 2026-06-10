+++
title = "Github login with ssh"
author = ["Kazure Zheng"]
date = 2025-12-20T00:00:00+08:00
tags = ["ssh", "git", "blog"]
draft = false
+++

## Main {#main}


### Generate a key pair {#generate-a-key-pair}

```sh
ssh-keygen
```

这个命令会生成两个文件，一个对应钥匙，一个对应锁头。pub 后缀的文件就是公钥，可以随意分发，我们需要把它配置到 GitHub 上面。


### Specify the 'door' and 'key' {#specify-the-door-and-key}

单单生成一个密钥没有什么作用，我们需要指定那个在那个地方使用那个密钥。
在用户目录下的 `.ssh` 路径下选择创建一个 `config` 文件

```cfg
Host github.com
    HostName ssh.github.com
    User github
    Port 443
```
