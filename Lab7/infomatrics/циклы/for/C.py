import math
a = int(input())
b = int(input())

for i in range(a,b+1):
    z = math.sqrt(i)
    
    if(z == round(math.sqrt(i))):
        print(i, end=" ")