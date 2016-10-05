# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 10:23:46 2016

@author: bruno
"""

def fibonacci_modified(t1, t2, current, n):
    if current == n:
        return t1 + math.pow(t2,t2)
    else:
        fibonacci_modified(t2, t1 + math.pow(t2,t2), current + 1, n)
    
input_t1t2n = input().strip().split(" ")
fibonacci_modified(input_t1t2n[0], input_t1t2n[1], 2, input_t1t2n[2])
"""
print(input_t1t2n[0])
print(input_t1t2n[1])
print(input_t1t2n[2])
print(len(input_t1t2n))
"""