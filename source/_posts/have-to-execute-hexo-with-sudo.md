---
title: Have To Execute Hexo With Sudo
date: 2024-11-15 04:53:31
category: hexo

---

# Have to execute hexo with sudo

## Reason

```sudo hexo init``` is the reason. 

## Solution

```
sudo chown -R azureuser:azureuser /path/to/hexo/folder
chmod -R u+rwX /path/to/hexo/folder
```
- change the /path/to/hexo/folder to that init executed. 
- remember do not ```sudo hexo init``` again. 
