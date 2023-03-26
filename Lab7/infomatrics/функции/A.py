def min4(a, b, c, d):
    return min(min(a, b), min(c,d))
 
 
a,b,c,d =input().split()
a=int(a)
b=int(b)
c=int(c)
d=int(d)


print(min4(a, b, c, d))