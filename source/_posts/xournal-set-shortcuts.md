---
title: how to personalize the shortcut of the software
categories: [software]
tags: [xournal++]
---


we can use the plugins of the xournal++^[https://blog.csdn.net/qq_41776453/article/details/128764167]. 

1. enter the path /Xournal++/share/xournalpp/plugins/Example. 
2. if you like change the plugin.lua
```
[about]
## Author / Copyright notice
author=xxxxx
# 插件描述
description=This is a minimal example plugin, for reference

## If the plugin is packed with Xournal++, use
## <xournalpp> then it gets the same version number
version=0.1

#这个是配置插件的开关，记得设为true就行
[default]
enabled=true
# 插件函数的主入口，lua的集成方式，性能很好！=_=
[plugin]
mainfile=main.lua
```

3. change the main.lua
```
-- This is an example Xournal++ Plugin - copy this to get started

var_dump = require "var_dump"

-- Register all Toolbar actions and intialize all UI stuff
function initUi()
  -- print("Hello from Example: Plugin initUi called\n");

  -- ref = app.registerUi({["menu"] = "Tests123", ["callback"] = "exampleCallback", ["accelerator"] = "<Control>t"});
  -- app.uiAction({["action"] = "ACTION_TOOL_LINE_STYLE_DASH"})
  -- print("Menu reference:");
  -- var_dump(ref);

  -- print("Example plugin registered\n");

  app.registerUi({["menu"] = "Black Pen", ["callback"] = "black_pen", ["accelerator"] = "d"});
  app.registerUi({["menu"] = "Blue Pen", ["callback"] = "blue_pen", ["accelerator"] = "f"});
  app.registerUi({["menu"] = "Red Pen", ["callback"] = "red_pen", ["accelerator"] = "w"});
  app.registerUi({["menu"] = "Green Pen", ["callback"] = "green_pen", ["accelerator"] = "r"});

  app.registerUi({["menu"] = "Eraser", ["callback"] = "eraser", ["accelerator"] = "e"});
  app.registerUi({["menu"] = "Select Region", ["callback"] = "select_region", ["accelerator"] = "a"});
  app.registerUi({["menu"] = "Hand", ["callback"] = "hand", ["accelerator"] = "s"});
end

-- Callback if the menu item is executed
function exampleCallback()
  result = app.msgbox("Test123", {[1] = "Yes", [2] = "No"});
  print("result = " .. result)
end



function black_pen()
  app.uiAction({["action"] = "ACTION_TOOL_PEN"})
  app.changeToolColor({["color"] = 000000, ["tool"] = "pen"})
end

function blue_pen()
  app.uiAction({["action"] = "ACTION_TOOL_PEN"})
  app.changeToolColor({["color"] = 0x3333CC, ["tool"] = "pen"})
end

function red_pen()
  app.uiAction({["action"] = "ACTION_TOOL_PEN"})
  app.changeToolColor({["color"] = 0xEF0044, ["tool"] = "pen"})
end

function green_pen()
  app.uiAction({["action"] = "ACTION_TOOL_PEN"})
  app.changeToolColor({["color"] = 0x008000, ["tool"] = "pen"})
end

function orange_pen()
  app.uiAction({["action"] = "ACTION_TOOL_PEN"})
  app.changeToolColor({["color"] = 0xEF7000, ["tool"] = "pen"})
end

-- Highlighter
function blue_highlighter()
  app.uiAction({["action"] = "ACTION_TOOL_HIGHLIGHTER"})
  app.changeToolColor({["color"] = 0x20D0FF, ["tool"] = "highlighter"})
end

function red_highlighter()
  app.uiAction({["action"] = "ACTION_TOOL_HIGHLIGHTER"})
  app.changeToolColor({["color"] = 0xFF55FF, ["tool"] = "highlighter"})
end

function green_highlighter()
  app.uiAction({["action"] = "ACTION_TOOL_HIGHLIGHTER"})
  app.changeToolColor({["color"] = 0x00FF00, ["tool"] = "highlighter"})
end

function yellow_highlighter()
  app.uiAction({["action"] = "ACTION_TOOL_HIGHLIGHTER"})
  app.changeToolColor({["color"] = 0xEEFF00, ["tool"] = "highlighter"})
end

--other function
function undo()
  app.uiAction({["action"] = "ACTION_UNDO"})
end

function eraser()
  app.uiAction({["action"] = "ACTION_TOOL_ERASER"})
end

function select_region()
  app.uiAction({["action"] = "ACTION_TOOL_SELECT_REGION"})
end

function hand()
  app.uiAction({["action"] = "ACTION_TOOL_HAND"})
end
```

4. attention you can not use number as shorcut because xournal has setted. 

5. if you want add other function, you may change the language to english and then you could know what the tool's name in english
