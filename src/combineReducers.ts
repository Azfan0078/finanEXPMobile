import { combineReducers } from "redux";
import authenticationFormReducer from "./authentication/reducers/authenticationFormReducer";
import authenticationReducer from "./authentication/reducers/authenticationReducer";
import { alertsStateReducer } from "./global/reducers/alertReducers";
import { modalsStateReducer } from "./global/reducers/modalReducers";
import { userIdStateReducer } from "./global/reducers/userIdReducers";
import mainValuesReducer from "./home/reducers/mainValuesReducer";

export default combineReducers({
  authenticationFormReducer,
  modalsStateReducer,
  alertsStateReducer,
  authenticationReducer,
  userIdStateReducer,
  mainValuesReducer
});
