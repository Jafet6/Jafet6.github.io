const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  address: '',
  compl: '',
  adNumb: '',
  city: '',
  state: '',
}

const formReducer = (state = INITIAL_STATE, action) => {
  console.log(action.value);
  return action.type ? {...state, [action.type]: action.value} : state
  // switch (action.type) {
  //   case action.type:
  //     return {
  //       ...state,
  //       [action.type]: action.value,
  //     }
  //   default:
  //     return state;
  // }
}

export default formReducer;
