x = int(input())
d = int(input())
sum = 0

for i in range(x+1):
    
    if(x>0):
        if(x%10 ==d):
            sum+=1
        x/=10
            
print(sum)