+++
title = "How to configure dwm"
author = ["Kazure Zheng"]
date = 2025-11-26T00:00:00+08:00
tags = ["tools", "blog"]
draft = false
+++

## Main {#main}

DWM[^fn:1] is a dynamic window manager for X.
The reason why I want to change form xfce4 to it is that
I want to concentrate more on my code, rather than a bunch of information.
And I want to increase my laptop's battery duration.


### Get Started {#get-started}

1.  dwm: dynamic window manager
2.  dmenu: a program help you launch other programs easily while running dwm.

<!--listend-->

```sh
git clone https://git.suckless.org/dwm
cd dwm
sudo make clean install
```

```sh
git clone git clone https://git.suckless.org/dmenu
cd dmenu
sudo make clean install
```


### Configuration {#configuration}


#### dwm {#dwm}

in `dwm/config.h`

```C
#define MODKEY Mod4Mask
// Mod4Mask is super
// Mod1Mask is alt
```


#### xinitrc {#xinitrc}

we are going to modify `/home/usr/.xinitrc`.

```sh
# exchange left control and capslock
setxkbmap -option ctrl:swapcaps &

# set the wallpaper
feh --bg-scale ~/Pictures/wallpapers/coding.jpg

# Set keyboard repeat rate.
xset r rate 300 50

xautolock -time 5 -locker "slock" -corners 000- &
xautolock -time 15 -killer "systemctl suspend" -corners 000- &

exec dwm
```


### Patches {#patches}


#### j4-dmenu-desktop {#j4-dmenu-desktop}

help us to search for `.desktop`.

```sh
sudo apt install j4-dmenu-desktop
```

in `dwm/config.h`

```C
static const char *dmenucmd[] = { "dmenu_run", "-m", dmenumon, "-fn", dmenufont, "-nb", col_gray1, "-nf", col_gray3, "-sb", col_cyan, "-sf", col_gray4, NULL };
static const char *dmenucmd_j4[] = { "j4-dmenu-desktop", NULL };

//...
    { MODKEY,                       XK_p,      spawn,          {.v = dmenucmd_j4 } },
    { MODKEY|ShiftMask,             XK_p,      spawn,          {.v = dmenucmd } },
//...
```


#### right master window {#right-master-window}

use `dwm-rmaster`[^fn:2]

in `dwm/config.h`

```C
static const float mfact     = 0.45; /* factor of master area size [0.05..0.95] */
static const int rmaster     = 1;
```


#### appearance {#appearance}

in `dwm/config.h`

```C
static const unsigned int borderpx  = 2;        /* border pixel of windows */
static const int showbar            = 0;        /* 0 means no bar */
static const int topbar             = 0;        /* 0 means bottom bar */

// ...
static const char *fonts[]          = {
    "Maple Mono NF:size=10",
    /* "monospace:size=10" */
};
static const char dmenufont[]       = "Maple Mono NF:size=10";
static const char col_gray1[]       = "#222222";
static const char col_gray2[]       = "#444444";
static const char col_gray3[]       = "#bbbbbb";
static const char col_gray4[]       = "#eeeeee";
static const char col_selb[]        = "#9932cc";
static const char col_cyan[]        = "#005577";
static const char *colors[][3]      = {
    /*               fg         bg         border   */
    [SchemeNorm] = { col_gray3, col_gray1, col_gray2 },
    [SchemeSel]  = { col_gray4, col_cyan,  col_selb  },
};
```


#### full screen {#full-screen}

in `dwm/config.h`

```C
static const Layout layouts[] = {
    /* symbol     arrange function */
    { "[]=",      tile },    /* first entry is default */
    { "[M]",      monocle },
    { "><>",      NULL },    /* no layout function means floating behavior */
};

// ...
    { MODKEY|ShiftMask,             XK_f,      setlayout,      {.v = &layouts[2]} },
    { MODKEY,                       XK_f,      setlayout,      {0} },
// ...
```

[^fn:1]: <https://dwm.suckless.org/>
[^fn:2]: <https://dwm.suckless.org/patches/rmaster/>
