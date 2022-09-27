const INITIAL_STATE = {
  loginInfo: {},
}

const LOGIN_ACTION = 'LOGIN_ACTION';

export default function loginReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case LOGIN_ACTION:
      return {
        ...state,
        loginInfo: action.loginInfo,
      }
     default:
      return state;
  }
}
