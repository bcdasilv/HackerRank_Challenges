# -*- coding: utf-8 -*-
"""
Created on Mon Sep 26 16:48:05 2016

@author: bruno
"""


import sys

## the string input is supposed to be in camel case format
def how_many_words(str_camel):
    count = 1
    for i in range(0,len(str_camel)):
        if str_camel[i].isupper() and i !=0:
            count += 1
    return count

s = input().strip()

print(how_many_words(s))