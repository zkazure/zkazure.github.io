+++
title = "Ring Linked List Entry"
author = ["Kazure Zheng"]
date = 2025-12-16T00:00:00+08:00
tags = ["algorithm", "blog"]
draft = false
+++

## Main {#main}

确认是否环形链表，只需要使用快慢指针就可以轻松解决。
但是确认环形链表的入口就有一点复杂了，不需要增加新的技巧，但是却有一个神奇的数学规律。


### 判断环形链表 {#判断环形链表}

```cpp
struct Node {
  int val;
  Node *next;
}

bool detectCycle(Node *head) {
  if (head == nullptr || head->next == nullptr)
    return nullptr;
  Node *slow = head;
  Node *fast = head;
  while (fast != nullptr && fast->next != nullptr) {
    fast = fast->next->next;
    slow = slow->next;
    if (fast == slow)
      return true;
  }

  return false;
}
```


### 寻找环形链表的入口 {#寻找环形链表的入口}

这里有一个非常关键的代码, **fast** 指针一次移动两个节点，巧妙之处在后文会体现。

Denoted

-   \\( x \\) is the length from head to entry of ring linked list.
-   \\( y \\) is the length from entry to encounter point of slow and fast pointer.
-   \\( z \\) is the length from encounter pointer to entry.
-   \\( a \\) is distance of slow pointer had pasted.
-   \\( b \\) is distance of fast pointer had pasted.

So that, we has,

\begin{equation}
\label{eq:1}
a = x + y
\end{equation}

\begin{equation}
\label{eq:2}
b = x + y + n \cdot (y+z)
\end{equation}

\begin{equation}
\label{eq:3}
b = 2a
\end{equation}

As a result, we got,

\begin{equation}
\label{eq:4}
2 \cdot (x+y) = x+ y + n \cdot (y+z)
\end{equation}

which means,

\begin{equation}
\label{eq:5}
x = z + (n-1)(y+z)
\end{equation}

and \\( y+z \\) is the length of ring.
so if we set a new pointer at head, step one per time with slow pointer,
then will encounter at the entry!!!

```cpp
struct Node {
  int val;
  Node *next;
}

Node *detectCycle(Node *head) {
  if (head == nullptr || head->next == nullptr)
    return nullptr;
  Node *slow = head;
  Node *fast = head;
  while (fast != nullptr && fast->next != nullptr) {
    fast = fast->next->next;
    slow = slow->next;
    if (fast == slow)  {
      Node *node = head;
      while (node != slow) {
        node = node->next;
        slow = slow->next;
      }
      return node;
    }
  }

  return nullptr;
}
```


### 如果快指针一次不止移动两步 {#如果快指针一次不止移动两步}

Assumed that fast pointer move \\( k \\) step per time, then we got

\\(\\)\\[  (k-1)(x+y) = n \cdot (y+z) \\]
\\[ x = z + \frac{1-k+n}{k-1} (y+z) \\]

可以发现这个时候 \\( x, z \\) 的差值不一定是环形的长度的整数倍了。
