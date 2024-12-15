---
title: The procedure of C programming in Linux
date: 2024-11-15 06:36:46
category: [C]
---

# The procedure of C programming in Linux

## Set up essential environment

Linux have set up all default. 
```
sudo apt update
sudo apt install build-essential
```
If you Linux didn't set up well. 

## Write

- create a file name <filename>.c. 
- write the programme. For example: 
```
# include <stdio.h>

int main() {
	printf("Hello, world!\n");
	
	return 0;
}
```

## Complie

```
gcc -o <whatever> <filename>.c
./<whatever>
```
