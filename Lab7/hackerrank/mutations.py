def mutate_string(string, position, character):
    str_as_list = list(string)
    str_as_list[position] = character
    return "".join(str_as_list)


if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)