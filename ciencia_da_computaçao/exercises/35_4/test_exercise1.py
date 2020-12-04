import pytest
from exercise1 import fizz_buzz

@pytest.fixture
def list_of_10():
    return ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz']

def test_output_fizz_buz(list_of_10):
    assert fizz_buzz(10) == list_of_10

def test_failed_especific_index(list_of_10):
    assert fizz_buzz(10)[0] != 0

def test_str_as_an_input(list_of_10):
    with pytest.raises(TypeError, match="'str' object cannot be interpreted as an integer"):
      fizz_buzz('dummy')