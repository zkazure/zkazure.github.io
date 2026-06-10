+++
title = "Fuck CSDN"
author = ["Kazure Zheng"]
date = 2025-12-20T00:00:00+08:00
tags = ["web", "blog"]
draft = false
+++

## Preface {#preface}

CSDN 的界面广告太多，并且还爬取其他网站的文章。绝大部分内容质量差，没有一个有效的交流环境。
关键是搜送引擎的权重还这么高。每次搜索都让我恶心。特此尝试屏蔽 CSDN。


## Main {#main}

**Dependency**: uBlock 插件

进入 uBlock 的设置界面，然后进入 My Filter，在合适的地方填入下列内容：

```fundamental
! 屏蔽 DuckDuckGo 搜索结果中的 CSDN 链接
duckduckgo.com##.result:has(a[href*="csdn.net"])

! 屏蔽 Google 搜索中的 CSDN 结果
www.google.com##div.g:has(a[href*="csdn.net"])

! 屏蔽 Bing 搜索中的 CSDN 结果
www.bing.com##li.b_algo:has(a[href*="csdn.net"])
```

然后应用就可以了。
