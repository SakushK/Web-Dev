n = int(input())
A = list(map(int, input().split()))

for i in range(0, n, 2):
    print(A[i], end=" ")