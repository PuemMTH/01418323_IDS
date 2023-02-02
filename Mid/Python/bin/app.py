import os
os.system("CLS")
from src.modules import prop
prop.test()
prop.oops()

# asterisk paramiter
def test(*args):
    print(args)
    print(type(args))
test(1,2,3,4,5,6,7,8,9,10)

# Asterisk unpacking operator type check
def test2(*args):
    print(args)
    print(type(args))

# s = list('Ascii is a great language')
# p = list('Python is a great language')
# k, m = zip(*zip(s,p))
# set_s = set(s)
# set_p = set(p)
# # print(set_s & set_p) # intersection
# # print(set_s | set_p) # union
# # print(set_s - set_p) # set_s - set_p


# # dictionary
# d = {'a': 1, 'b': 2, 'c': 3}
# print(d.keys())
# print(d.values())
# print(d.items())
# print(d.get('a'))
# del d['b']
# print(d.get('b', 'Not found'))

# for k, v in d.items():
#     print(k, v)


# def sum(*args):
#     total = 0
#     for i in args:
#         total += i
#     return total
# print(sum(1,2,3,4,5,6,7,7,8))

# # using asterisk
# def food(**kwargs):
#     for items in kwargs:
#         print(f"{kwargs[items]} is a {items}")
# food(fruit = 'cherry', vegetable = 'potato', boy = 'srikrishna')

# x_vals = [0.1, 0.3, 0.6, 0.9]
# tu = tuple(x_vals)
# # print([(x, x*2) for x in x_vals])

# print(tuple(x_vals))

# print(''.join(tup[1] for tup in sorted(zip(s,p))))
# __name__ == "__main__" and String()