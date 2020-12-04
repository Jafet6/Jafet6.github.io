from abc import ABC, abstractmethod


class Figura_Geometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError

    def teste(self):
        return print('kkkk')


class Rectangle(Figura_Geometrica):
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def perimeter(self):
        return (self.a * 2) + (self.b * 2)
    
    def area(self):
        return self.a * self.b
