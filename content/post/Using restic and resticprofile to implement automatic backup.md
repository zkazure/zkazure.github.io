+++
title = "Using restic and resticprofile to implement automatic backup"
author = ["Kazure Zheng"]
date = 2025-11-23T00:00:00+08:00
tags = ["blog", "tools"]
draft = false
+++

## Preface {#preface}

我是一个爱折腾电脑的人，但是我只有一台电脑，最近差点把系统搞崩。那次教训让我深刻意识到数据备份的重要性。

在使用 restic[^fn:1] 之前我也尝试过手动备份，但是手动备份有几个缺点：

1.  无法定时备份，完全依靠自身的习惯。在特别忙的时候容易忘记备份，这个时候恰恰也是最没有时间修复电脑的时候，出不得问题
2.  如果只是单纯的复制粘贴，容易文件冗余，对硬盘空间要求大，其次复制时间长。

**restic** 是一个数据加密增量备份工具，可以做到对备份的数据加密，能够增量备份[^fn:2]，从而做到多份备份的同时占用空间小。

**resticprofile**[^fn:3] 是一个基于 restic 的自动化工具。


## Main {#main}


### Prerequisite {#prerequisite}

1.  restic
2.  resticprofile


### Get Started {#get-started}

实际上我们只需要配置好 resticprofile 就行了。


#### Make config {#make-config}

```sh
mkdir -p ~/.config/resticprofile/
touch profiles.toml
```


#### Setup config {#setup-config}

```toml
version = "1"

[default]
  # local mean in backup in this computer
  repository = "local:/path/to/backup"
  password-file = "/path/to/password-file"
  verbose = true

[project1]
  inherit = "default"
  initialize = true
  [project1.backup]
    source = [
      "/path/to/source-file-1",
      "/path/to/source-file-2",
      "/path/to/source-file-3"
    ]
    # backup every day at 3 a.m.
    schedule = "03:00"
    schedule-permission = "user"
    schedule-lock-wait = "2h"
  [project1.retention]
    before-backup = false
    after-backup = true
    # keep the newest one
    keep-last = 1
    # keep the newest one in this week
    keep-weekly = 1
    prune = true

[project2]
  inherit = "default"
  initialize = true

  [project2.backup]
    prune = true
    verbose = true
    source = [
    # ...
    ]
    # backup every Monday at 4 a.m.
    schedule = "Mon 04:00"
    schedule-permission = "user"
    schedule-lock-wait = "2h"

  [project2.retention]
    before-backup = false
    after-backup = true
    keep-last = 1
    prune = true
```


#### Begin backup {#begin-backup}

```sh
resticprofile init
resticprofile --name project1 backup
resticprofile --name project2 backup
```


#### Set schedule {#set-schedule}

```sh
sudo resticprofile -c ~/.config/resticprofile/profiles.toml schedule --all
```


#### check {#check}

```sh
resticprofile -n default snapshots --latest 1
```

[^fn:1]: <https://restic.net/>
[^fn:2]: 只备份产生变化的文件
[^fn:3]: <https://creativeprojects.github.io/resticprofile/configuration/getting_started/index.html>
