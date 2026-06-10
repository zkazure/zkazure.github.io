+++
title = "Make SamSung Tablet Fluent"
author = ["Kazure Zheng"]
date = 2025-12-20T00:00:00+08:00
tags = ["technology", "blog"]
draft = false
+++

## Preface {#preface}

My tablet is a little slow, blow is some steps to make it more fluent. My tablet actually perform better.

可能二手收到维修机了，不是原装的屏幕。
这个机器的屏幕亮瞎我眼，已出。


## Main {#main}


### Version {#version}

Samsung s7 fe with 4+64G.


### Enable the developer options {#enable-the-developer-options}

1.  In the Setting.
2.  tap the `About tablet`
3.  tap `Software information`
4.  tap `Build number` for 5 times.


### Setting in the Developer options {#setting-in-the-developer-options}

-   under the `Debugging`, enable `Enable GPU debug layers`
-   under the `Hardware accelerated rendering`, enable `Disable HW overlays`[^fn:1]
-   under the `Apps`, enable
    -   `Suspend execution for cached apps`
    -   set the `Background process limit` to `At most 2 process`

[^fn:1]: : This options seem to be disabled automatically after reboot.
