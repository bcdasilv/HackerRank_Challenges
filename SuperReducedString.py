# -*- coding: utf-8 -*-
"""
Created on Sun Sep 25 23:21:31 2016

@author: bruno
"""            
            
def super_reduce(str_in):     
    if len(str_in) == 1 or len(str_in) == 0:
        return str_in
        
    str_out = ""        
    s_prev = ""    
    for i in range(0,len(str_in)):
        if s_prev == "":
            s_prev = str_in[i]
            if i == len(str_in) -1:
                str_out += str_in[i]
        elif s_prev != "" and s_prev != str_in[i]:
            str_out += s_prev
            if i == len(str_in) -1:
                str_out += str_in[i]
            else:
                s_prev = str_in[i]
        elif s_prev != "" and s_prev == str_in[i]:
            s_prev = ""
    if str_out == "":
        return ""
    elif str_in == str_out:
        return str_in
    return super_reduce(str_out)

str_in  = input().strip()

str_out = super_reduce(str_in)
if str_out == "":
    print("Empty String")
else:
    print(str_out)