+++
title = "How linked list worked in assembly?"
author = ["Kazure Zheng"]
date = 2025-12-04T00:00:00+08:00
tags = ["riscv", "blog"]
draft = false
+++

## Preface {#preface}

It is interesting to see how does assembly implement linked list.
I learned it from CS61C, lab03.


## Main {#main}


### Create linked list {#create-linked-list}

-   In assembly, linked list is created reversely,
    the default value of each node is its sequence of creation.
-   x0 is the terminated pointer.

<!--listend-->

```asm
main:
    jal ra, create_default_list
    add s0, a0, x0

create_default_list:
    addi sp, sp, -12
    sw ra, 0(sp)
    sw s0, 4(sp)
    sw s1, 8(sp)
    li s0, 0
    li s1, 0 # the number of current nodes
loop:
    # a0 is how large the space of each node
    li a0, 8
    jal ra, malloc
    sw s1, 0(a0)
    sw s0, 4(a0)
    # repoint to current node
    add s0, a0, x0
    addi s1, s1, 1

    # t0 is the number of total requested nodes.
    addi t0, x0, 10
    bne a0, t0, loop
    lw ra, 0(sp)
    lw s0, 4(sp)
    lw s1, 8(sp)
    addi sp, sp, 12
    jr ra
malloc:
    # x0 is the value of end node
    addi a1, a0, 0
    addi a0, x0, 9
    ecall
    jr ra
```


### Apply Function to Each Node {#apply-function-to-each-node}

it applies function recursively

```asm
main:
    # ...
    sw a0, s0
    la a1, square
    jal ra map
map:
    addi sp, sp, -12
    sw ra, 0(sp)
    sw s0, 4(sp)
    sw s1, 8(sp)

    # is end node?
    bne a0, x0, done
    add s0, a0, x0
    add s1, a1, x0

    lw a0, 0(s0)
    jalr ra, s1, 0
    sw a0, 0(s0)

    lw a0, 4(s0)
    add a1, s1, x0
    jal ra, map
done:
    lw ra, 0(sp)
    lw s0, 4(sp)
    lw s1, 8(sp)
    addi sp, sp, 12
    jr ra
square:
    mul a0, a0, a0
    jr ra
```
