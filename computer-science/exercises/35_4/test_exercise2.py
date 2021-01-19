import pytest
from exercise2 import turn_str_into_numbers

@pytest.fixture
def str_to_convert():
    return '69-647372253-562'

def test_convert_str_without_str():
    with pytest.raises(TypeError):
        turn_str_into_numbers()

def test_successful_converted_str(str_to_convert):
    assert turn_str_into_numbers('MY-MISERABLE-JOB') == str_to_convert

