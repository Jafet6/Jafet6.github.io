from abc import ABC, abstractmethod


class LogManipulator(ABC):
    @abstractmethod
    def log(self):
        raise NotImplementedError


class FileLog(LogManipulator):
    @classmethod
    def log(cls):
        print("File Log")


class ScreenLog(LogManipulator):
    @classmethod
    def log(cls):
        print("Screen Log")


class Log:
    def __init__(self, manipulators):
        self.__manipulators = set(manipulators)

    def add(self, manipulator):
        self.__manipulators.add(manipulator)
