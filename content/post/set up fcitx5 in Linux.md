+++
title = "set up fcitx5 in Linux"
author = ["Kazure Zheng"]
date = 2025-12-03T00:00:00+08:00
tags = ["blog"]
draft = false
+++

## Main {#main}

Fcitx5[^fn:1] is a great input tools for Linux.


### Installation {#installation}

```sh
sudo apt install fcitx5
sudo apt fcitx5-rime
```

then copy the input method files to `~/.local/share/fcitx5/rime`


### Configuration {#configuration}


#### autostart {#autostart}

For DE, edit the `~/.xprofile`,

```cfg
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

For WM, edit `~/.xinitrc`

```cfg
# 确保 D-Bus 启动
eval $(dbus-launch --sh-syntax --exit-with-session)

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"

fcitx5 &
```


#### disable shift switch {#disable-shift-switch}

in rime schema

```yaml
switch_key: {Shift_L: noop, Shift_R: noop}
```

[^fn:1]: <https://fcitx-im.org/wiki/Fcitx_5>
