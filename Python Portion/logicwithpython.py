from fileinput import close
from tkinter import Y

#These are variables
sys_name = "Delta " #This is a string
sys_no =  1 # this is an integer

def Go_Crazy(): #a function should com before the section it will be used in
    x = 0
    while(x < 10001): # a while loop
        print(x)
        x = x + 1

print(sys_name + str(sys_no) +" Starting up") #putting a float into the str() function, lets you concatenate it with a string
print("Hello, How are you ?")
print("My name is " + sys_name)
print("My Build Number is " + str(sys_no) + "and i'm the first OS ever built")
print("Pardon me")
Go_Crazy()
username = input("So what is your name? ")

def Check_The_Code(): #def is used to define a function in python, like using void to define a function in C#
    if str(code) == "4395":
        clear
        print("Access Granted")
    elif str(code) != "4395":
        clear
        print("Unauthorized Access Detected")
        print("Diminished")
        close


def Test_Calculator():
    no_1 = input("First Number ")
    arithmetic_function = input("Arithmetic Function ")
    no_2 = input("Your second figure ")
    answer = no_1 + arithmetic_function + no_2
    print("answer = " + answer)

if username == "Admin":
    code = input("Code?")
    Check_The_Code()
else:
    print("Hello " + username)
    print("Would you please help me with my calculator check? Y/N")
    reply = input()
    if reply == "Y" or reply == "y":
        print("Thanks, Please Follow the prompt")
        Test_Calculator()
    elif reply == "N" or reply == "n":
        print("GoodBye")
    else:
        print("Your are too illiterate for this test")


