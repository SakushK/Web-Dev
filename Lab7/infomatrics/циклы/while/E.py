n = int(input())
k = 0
while (1 << k) < n:
    k += 1
print( k )