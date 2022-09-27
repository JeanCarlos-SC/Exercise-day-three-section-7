const REGISTER_ACTION = 'REGISTER_ACTION';

const registerAction = (action) => ({
  type: REGISTER_ACTION,
  registerInfo: action,
});

export default registerAction;