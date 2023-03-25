import math

x = int(input())
count = 0
sqrt_x = int(math.sqrt(x))

for i in range(1, sqrt_x + 1):
    if x % i == 0:
        count += 1
        if i != x // i: 
            count += 1

print(count)