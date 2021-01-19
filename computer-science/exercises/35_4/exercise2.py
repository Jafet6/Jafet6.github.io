input = 'MY-MISERABLE-JOB'


def convert_character(character):
    upper_character = character.upper()
    if upper_character in ['A', 'B', 'C']:
        return '2'
    elif upper_character in ['D', 'E', 'F']:
        return '3'
    elif upper_character in ['G', 'H', 'I']:
        return '4'
    elif upper_character in ['J', 'K', 'L']:
        return '5'
    elif upper_character in ['M', 'N', 'O']:
        return '6'
    elif upper_character in ['P', 'Q', 'R', 'S']:
        return '7'
    elif upper_character in ['T', 'U', 'V']:
        return '8'
    else:
        return '9'
    
    
def turn_str_into_numbers(str):
    splited_str = [character for character in str]
    converted_str = [
      convert_character(character) if character.isalpha() else character for character in splited_str
    ]
    return ''.join(converted_str)

print(turn_str_into_numbers(input))
