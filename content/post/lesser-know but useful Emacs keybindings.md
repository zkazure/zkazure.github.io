+++
title = "lesser-know but useful Emacs keybindings"
author = ["Kazure Zheng"]
date = 2025-12-01T00:00:00+08:00
tags = ["emacs", "blog"]
draft = false
+++

## Main {#main}


### Transpose {#transpose}

1.  `C-t`: from ba to ab
2.  `M-t`: transpose words
3.  `C-x C-t`: line transpose


### word manipulation {#word-manipulation}

1.  `M-c`: Capitalize Word.
2.  `M-u`: UPPERCASE WORD.
3.  `M-l`: lowercase word.


### navigation {#navigation}

1.  `M-m`: move to first non-whitespace character on line.
2.  `M-{/}`: move by paragraph
3.  `C-M-f/b`: (forward/backward over balanced expressions.)
4.  `C-M-u/d`: (Move up/down in (parentheses hierarchy))
5.  `C-M-a/e`: beginning/end of function
    ```cpp
    int main() {
        // this is crazy
    }
    ```
6.  `C-x r SPC <REGISTER>`: mark the place with a register.
7.  `C-x r j <REGISER>`: jump to target register
8.  `C-M-l`: try to show you all the block where you cursor is.


### editing {#editing}

1.  `C-M-k`: (kill balanced expression) ()
    ```elisp
    ("exp1"  "exp2" (exp3))
    ```
2.  `C-M-@`: (mark balanced expression)
    ```elisp
    ("this is a balanced expression")
    ```
3.  `M-@`: Mark word word word word
4.  `M-h`: mark paragraph
5.  `C-M-h`: Mark function
6.  `M-^`: join linesxen
    delete indentation
7.  `C-o`: open line (insert newline without moving cursor)
8.  `M-\`: remove the duplicate             space to no space
9.  `M-SPC`: remove duplicate       space to one
10. `M-z`: zap to target character to here Z good.
11. `C-x TAB`: indent rigidly.
12. `C-x C-o`: delete blank lines


### Windows &amp; Buffers {#windows-and-buffers}

1.  `C-x 4 f`: Find file in other window
2.  `C-x 5 f`: Find file in new frame
3.  `C-x r j`: Jump to register
4.  `C-x r w`: Window configuration to register


### others {#others}

1.  `C-u C-@`: Pop mark ring
2.  `C-x C-@`: Pop global mark ring
3.  `C-x z`: repeat last command, press z to continue
4.  **expand-region** packages will help a lot.
