from string import ascii_uppercase
import random

def random_str(digit=7):
    return "".join([random.choice(ascii_uppercase) for _ in range(digit)])