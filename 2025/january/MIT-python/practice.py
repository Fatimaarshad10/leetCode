
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

def reducer(k):
    check_digit = len(str(k))
    count = 9 
    if(k == 1):
        return True
    if(check_digit == 1):
        print(k)
    else:
        for i in range(k):
            if(i/2 == 6):
                count = count + 1 
                print(count)                          
reducer(36)



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
        
        
def is_valid(k):
    if k == 1:
        return True

    visited = set() 
    while k > 1:
        if k in visited:  
            return False
        visited.add(k)

        digits = [int(d) for d in str(k) if int(d) > 1]
        divisible = False

        for d in digits:
            if k % d == 0:
                k //= d
                divisible = True
                break  

        if not divisible:  
            return False

    return True

def count_valid_numbers(N):
    valid_count = 0
    for k in range(1, N + 1):
        if is_valid(k):
            valid_count += 1
    return valid_count

N = int(input())  # Read the input

print(count_valid_numbers(N))
