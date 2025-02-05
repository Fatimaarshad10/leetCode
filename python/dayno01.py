# MYSQL 
# Insert , select all , where , like , in , not in , condition all 
# \e databasename , \dt table check

# list_data = [1,"fatima" , 3.16 , True]
# list_data.append("Noor")
# list_data[1]
# print(list_data[1])

# data =  object()
# print(data)

# All the functions in the __init__()
class Person:
    def __init__(self , first_name , last_name):
        self.first_name = first_name
        self.last_name = last_name
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    def talk_me(self):
        return f"Hello my name is {self.first_name}"
        
first_person = Person("Fatima" ,"Arshad")
print(first_person)
call_me_fun = first_person.talk_me()
print(call_me_fun)
# print(first_person.last_name)
# print(first_person.first_name)

# Lambda function 
def lambda_fun (n):
    return lambda a : a - n
make_it_double = lambda_fun(2)
print(make_it_double(8))

