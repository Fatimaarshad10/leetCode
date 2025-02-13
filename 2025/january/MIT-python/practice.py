
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


# Traveling Salesman problem
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits> // Include this for LLONG_MAX and LLONG_MIN
# using namespace std;
# int main() {
#     int T;
#     cin >> T;
#     while (T--) {
#         int N;
#         cin >> N;
#         long long min_s = LLONG_MAX;
#         long long max_s = LLONG_MIN;
#         for (int i = 0; i < N; ++i) {
#             long long x, y;
#             cin >> x >> y;
#             long long s = x + y;
#             if (s < min_s) min_s = s;
#             if (s > max_s) max_s = s;
#         }
#         cout << 2 * (max_s - min_s) << endl;
#     }
#     return 0;
# }


# Problem no 04
# Scoreboard Screenshots

# def valid_ordering(N, K, screenshots):
#     sorted_indices = sorted(range(N), key=lambda i: screenshots[i])
    
#     for j in range(K):  
#         for i in range(1, N): 
#             if screenshots[sorted_indices[i - 1]][j] > screenshots[sorted_indices[i]][j]:
#                 print("NO")
#                 return
    
#     print("YES")
#     print(" ".join(map(str, [index + 1 for index in sorted_indices])))

# # Input Handling
# if __name__ == "__main__":
#     import sys
#     input = sys.stdin.read
#     data = input().split()
    
#     N, K = map(int, data[:2])
    
#     screenshots = []
#     idx = 2
#     for _ in range(N):
#         screenshots.append(list(map(int, data[idx:idx + K])))
#         idx += K
    
#     valid_ordering(N, K, screenshots)

class Animal:
        def __init__(self, name, species):
                self.name = name
                self.species = species
        def move(self):
                print("Mehow")
        
class Lion:
        def __init__(self,name, species):
                self.name = name
                self.species = species
        def move(self):
                print("ehw")
        
lion_no_01 = Lion('lion' , 'animal')
print(lion_no_01.name)
print(lion_no_01.species)

