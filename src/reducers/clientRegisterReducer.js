const INITIAL_STATE = {
  registerInfo: [],
}

const REGISTER_ACTION = 'REGISTER_ACTION';

export default function clientRegisterReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case REGISTER_ACTION:
      return {
        ...state,
        registerInfo: [...state.registerInfo, action.registerInfo],
      }
     default:
      return state;
  }
}