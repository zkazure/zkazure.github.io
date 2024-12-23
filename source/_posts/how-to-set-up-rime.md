---
title: how to set up rime
date: 2024-12-13 17:00:06
categories: [software]
tags: [rime]
---

小狼毫是我最喜欢的输入法，自由强大，没有广告。

1. install [here](https://rime.im/)
2. choose a input method [双拼](https://github.com/gaboolic/rime-shuangpin-fuzhuma)
3. unzip to the correct path.
4. appearance and some preferences.
in the default.custom.yaml
```yaml
patch:
  menu/page_size: 4
  schema_list:
    - {schema: moqi_wan_flypymo}
  
  switcher/hotkeys:
    - F4
  ascii_composer/switch_key/Caps_Lock: noop
  ascii_composer/switch_key/Shift_L: noop
  ascii_composer/switch_key/Shift_R: noop
```
in your_input_method.schema.yaml
```yaml
switches:
  - name: ascii_mode
    reset: 1
    states: [ 中文, 西文 ]

```