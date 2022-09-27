const LOGIN_ACTION = 'LOGIN_ACTION';

const loginAction = (action) => ({
  type: LOGIN_ACTION,
  loginInfo: action,
});

export default loginAction;