def double_power(a, b):
    z = 1
    for i in range(0, b):
        z *= a 
    return z

a, b = list(map(int, input().split()))
print(double_power(a, b))