# -*- coding: utf-8 -*-
"""
Created on Fri Sep 23 10:23:46 2016

@author: bruno
"""

def time_conversion(original):
    am_pm = original[-2:]
    original = original[:-2]
    str_split = original.split(":")
    target = ""
    if am_pm == "PM" and str_split[0] < "12":
        target = str(int(str_split[0])+12)
    elif am_pm == "AM" and str_split[0] == "12":
        target = "00"
    else:
        target = str_split[0]
    target += ":" + str_split[1] + ":" + str_split[2]
    return target
    
time = input().strip()
print(time_conversion(time))