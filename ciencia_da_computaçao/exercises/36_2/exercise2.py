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
    def __init__(self, manipulator):
        self.__manipulator = manipulator

    def print(self):
        self.__manipulator.log()
