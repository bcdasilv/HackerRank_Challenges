# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 11:25:25 2016

@author: bruno
"""

import sys

def array_reverse(arr):
    arr_rev = [None] * len(arr)
    for i in range(len(arr)-1,-1,-1):
            arr_rev[len(arr)-i-1] = arr[i]
    return arr_rev

def print_array_in_line(arr):
    for i in range(0,len(arr)):
        print(arr[i], end=" ")
        
n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]
print_array_in_line(array_reverse(arr))