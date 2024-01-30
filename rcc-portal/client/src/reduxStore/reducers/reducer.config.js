import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import attendanceReducer from "./attendance.reducer";

export default combineReducers({
  authReducer,
  attendanceReducer,
});
