berkhee = "human"
print(berkhee)
students = [1,2,3,4,5,6,7,8,9]
print(students[6])
rooms = {1:"a",
         2:"b",
         3:"c",
         4:"d",
         5:"f",
         6:"G"
         }
print(rooms)
print(rooms[6])
friuts = ["alim", "banana", "guzeelzgene"]


print(friuts)
friuts = ["alim", "banana", "guzeelzgene", "tomd"]
friuts.insert(0,"tarvas")
friuts.append("zairmag")
print(friuts)
dun = [
    {1:"mat", 2:"b", 3:"himi", 4:"d", 5:"f"},
    {1:"a", 2:"b",3:"himi",4:"da",5:"f"},
    {1:"a",2:"b",3:"himi",4:"da",5:"f"},
    {1:"a",2:"b",3:"himi",4:"da",5:"f"},
    {1:"a",2:"b",3:"himi",4:"da",5:"f"},
    {1:"a",2:"b",3:"himi",4:"da",5:"f"},
    {1:"a",2:"b",3:"himi",4:"da",5:"f"}]
print(dun[2][2])
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)
fruits.insert(0, "liir")
print(fruits)



fruits = ['apple', 'banana', 'cherry']
tropical = ['mango', 'pineapple', 'papaya']
fruits.extend(tropical)
print(fruits)
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
mylist = ['apple', 'banana', 'cherry']
mylist.pop(1) # 1 dugaar gishuunees busad
print(mylist)
fruits = ['apple', 'banana', 'cherry']
fruits.clear()
print(fruits)

fruits.append("orange")
print(fruits)
fruits.insert(0, "liir")

friuts_copy = fruits.copy()
print(fruits)
mylist = ['apple', 'banana', 'cherry','mango', 'pineapple', 'papaya','hoorhon jims']
i = 0 
while i < len(mylist):
  
  print(mylist[i])
  i = i + 1

    
