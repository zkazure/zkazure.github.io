---
title: how to set up vscode in the wsl
date: 2024-12-11 14:39:55
categories: [software]
tags: [vscode]
---

I met something wrong when set up the wsl

```
❯ code
Updating VS Code Server to version f1a4fb101478ce6ec82fe9627c43efbf9e98c813
Removing previous installation...
Installing VS Code Server for Linux x64 (f1a4fb101478ce6ec82fe9627c43efbf9e98c813)
Downloading: 100%
Failed
--2024-12-11 14:41:12--  https://update.code.visualstudio.com/commit:f1a4fb101478ce6ec82fe9627c43efbf9e98c813/server-linux-x64/stable
Resolving update.code.visualstudio.com (update.code.visualstudio.com)... ::1, 127.0.0.1
Connecting to update.code.visualstudio.com (update.code.visualstudio.com)|::1|:443... failed: Connection refused.
Connecting to update.code.visualstudio.com (update.code.visualstudio.com)|127.0.0.1|:443... connected.
ERROR: The certificate of ‘update.code.visualstudio.com’ is not trusted.
ERROR: The certificate of ‘update.code.visualstudio.com’ doesn't have a known issuer.
ERROR: Failed to download https://update.code.visualstudio.com/commit:f1a4fb101478ce6ec82fe9627c43efbf9e98c813/server-linux-x64/stable to /home/zka_wsl/.vscode-server/bin/f1a4fb101478ce6ec82fe9627c43efbf9e98c813-1733899271.tar.gz
Please install missing certificates.
Debian/Ubuntu:  sudo apt-get install ca-certificates
```

I have done followings, but all of them invalid.
- install ca-certificates
- turn off the certificates trust of certificates

## install vscode in the local


