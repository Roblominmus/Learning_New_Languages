import turtle
import random

turtle.Screen().bgcolor("black")



t = turtle.Turtle()
t.speed(10)
t.pensize(3)

numbra = 0

while numbra < 10:
    for colors in ["red", "blue", "green", "white", "cyan"]:
        t.color(colors)
        t.pencolor(colors)
        t.pendown
        t.forward(200)
        t.left(60)
        t.forward(90)
        t.left(120)
        t.forward(200)
        t.left(60)
        t.forward(90)
        t.left(120)
        t.penup
        t.penup
        numbra + 1
        t.setposition(random.randrange(-300, 200), random.randrange(-300, 200))



