import loginReducer  from "./loginReducer";
import { combineReducers } from "redux";
import clientRegisterReducer from "./clientRegisterReducer";

const rootReducers = combineReducers({
  loginReducer,
  clientRegisterReducer,
});

export default rootReducers;