# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 18:04:12 2016

@author: bruno
"""

import sys

def highest_hour_glass(arr):
    started = False    
    sum_ = 0
    highest_sum = 0
    for i in range(0,len(arr)):
        for j in range(0,len(arr)):
            if j+2 < len(arr) and i+2 < len(arr):
                sum_ += arr[i][j]
                sum_ += arr[i][j+1]
                sum_ += arr[i][j+2]
                sum_ += arr[i+1][j+1]
                sum_ += arr[i+2][j]
                sum_ += arr[i+2][j+1]
                sum_ += arr[i+2][j+2]
                if not started :
                    highest_sum = sum_
                    started = True
                if started and sum_ > highest_sum:
                    highest_sum = sum_
                sum_ = 0
    return highest_sum

arr = []
for arr_i in range(6):
   arr_t = [int(arr_temp) for arr_temp in input().strip().split(' ')]
   arr.append(arr_t)
   
print(highest_hour_glass(arr))
    