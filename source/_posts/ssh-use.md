---
tilte: How to manage you ssh key
subtitle: 如何管理你的ssh密钥
categories: [software]
tags: [ssh]
---

##

```
ssh-keygen -t rsa -b 4096 -f my_custom_key
```

remember it will create under the current directory, please move to the path="~/.ssh"

##

```
vim ~/.ssh/config
```

add

```
Host github.com
    HostName ssh.github.com
    Port 443
    IdentityFile ~/.ssh/id_rsa
```
