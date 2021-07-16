class Car():
    wheels = 4
    doors = 2
    windows = "window"
    seats = "seats"

    def start(self):
        print("I started")

    def __init__(self, *args, **kwargs):
        self.wheels = 1
        self.doors = 2
        self.windows = 3
        self.seats = 4


    def __str__(self):
        return str({
            "wheels": self.wheels,
            "doors": self.doors,
            "windows": self.windows,
            "seats": self.seats
        })

class Convertible(Car):
    def take_off(self):
        return "taking off"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.color = kwargs.get("color", "black")
        self.price = kwargs.get("price", "$0")

    def __str__(self):
        return f"Convertible {super().__str__()}"


porche = Convertible(color="Red", price="$40")
print(dir(porche))
porche.start()
print(porche)
print(porche.color)
print(porche.price)
print(porche.take_off())
