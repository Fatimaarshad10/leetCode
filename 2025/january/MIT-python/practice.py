
# location = [2,2,3]
# def checkSteps (S,K):
#     start_point = location[S]
#     for i in range(S , K):
#         if(i == S):
#             S = S + 1
            
#     if(start_point == K):
#         print('Zainab win this game')
#     else:
#         print("Fatima win this game")
# checkSteps(1, 2)

# def reducer(k):
#     check_digit = len(str(k))
#     count = 9 
#     if(k == 1):
#         return True
#     if(check_digit == 1):
#         print(k)
#     else:
#         for i in range(k):
#             if(i/2 == 6):
#                 count = count + 1 
#                 print(count)                          
# reducer(36)



#  for i in range(k):
        # change_into_float = float(i)
        # print(math.trunc(change_into_float))
       
        # print(digits)
        # print(int(change_into_float % 10 // 1))
        # integer or float 
        # 1.0 , 2.0 ===> valid 
        # 11.0 , 12.0 
        # if have an 2 value before point 
        # condition
        
        
# def is_valid(k):
#     if k == 1:
#         return True

#     visited = set() 
#     while k > 1:
#         if k in visited:  
#             return False
#         visited.add(k)

#         digits = [int(d) for d in str(k) if int(d) > 1]
#         divisible = False

#         for d in digits:
#             if k % d == 0:
#                 k //= d
#                 divisible = True
#                 break  

#         if not divisible:  
#             return False

#     return True

# def count_valid_numbers(N):
#     valid_count = 0
#     for k in range(1, N + 1):
#         if is_valid(k):
#             valid_count += 1
#     return valid_count

# N = int(input())  # Read the input

# print(count_valid_numbers(N))


# Beginner level test mit 
# Problem no 01

# def mit_timer(k):
#     if k <= 5:
#         return "MIT time"
#     elif k <= 25:
#         return "MIT^2 time"
#     else:
#         return "MIT^4 time"

# # Example usage:
# print(mit_timer(5))  # Output: MIT time
# print(mit_timer(20))  # Output: MIT^2 time


# def mit_time(t, test_cases):
#     results = []
#     for n in test_cases:
#         k = 1
#         power = 5
#         while n > power:
#             k += 1
#             power *= 5
#         if k == 1:
#             results.append("MIT time")
#         else:
#             results.append(f"MIT^{k} time")
#     return results

# # Input handling
# N = int(input())  
# test_cases = [int(input()) for _ in range(N)]

# output = mit_time(N, test_cases)
# for line in output:
#     print(line)


# import math

# def minimum_round_trip(x1, y1, x2, y2):
#     distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
#     return 2 * distance

# # Input coordinates
# x1, y1 = map(int, input("Enter coordinates of city 1 (x1 y1): ").split())

# x2, y2 = map(int, input("Enter coordinates of city 2 (x2 y2): ").split())

# # Compute minimum round-trip distance
# result = minimum_round_trip(x1, y1, x2, y2)
# print(f"The minimum round-trip distance is: {result:.2f}")


from collections import deque

def is_valid_ordering(N, K, scores):
    graph = [[] for _ in range(N)]
    in_degree = [0] * N
    
    for i in range(N):
        for j in range(i + 1, N):
            valid = True
            for team in range(K):
                if scores[i][team] > scores[j][team]:
                    valid = False
                    break
            if valid:
                graph[i].append(j)
                in_degree[j] += 1
            valid = True
            for team in range(K):
                if scores[j][team] > scores[i][team]:
                    valid = False
                    break
            if valid:
                graph[j].append(i)
                in_degree[i] += 1
                
    queue = deque()
    result = []
    
    for i in range(N):
        if in_degree[i] == 0:
            queue.append(i)
    
    while queue:
        node = queue.popleft()
        result.append(node + 1) 
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    if len(result) == N:
        return "YES", result
    else:
        return "NO", []

N, K = map(int, input().split())
scores = [list(map(int, input().split())) for _ in range(N)]
result, order = is_valid_ordering(N, K, scores)
print(result)
if result == "YES":
    print(" ".join(map(str, order)))
