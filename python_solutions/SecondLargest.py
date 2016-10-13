# -*- coding: utf-8 -*-
"""
Created on Thu Oct 13 15:44:44 2016

@author: bruno
"""

## Here I take the challenge constraint stating that the array has at least
# two elements.
def find_second_largest(arr):    
    ##the challenge also states that lowest accepted input for an element is -100
    largest = -100
    second_largest = -100
    for i in range(0,len(arr)):
        if int(arr[i]) > largest:
            second_largest = largest
            largest = int(arr[i])
        elif int(arr[i]) > second_largest and int(arr[i]) != largest:
            second_largest = int(arr[i])
    return second_largest        
    
n = input().strip()
arr = input().strip().split(" ")
print(find_second_largest(arr))
