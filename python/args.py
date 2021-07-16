from functools import reduce

def plus(a, b, *positional_args, **keyword_args):
    print(positional_args)
    print(keyword_args)
    return reduce(lambda acc, cur: acc + cur, positional_args, a + b)

result = plus(1,2,3,4,5,6,7,8,9,10, num1=11, num2=12, num3=13)
print(result)
