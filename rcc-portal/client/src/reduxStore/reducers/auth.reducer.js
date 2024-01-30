import * as ActionTypes from "../ActionTypes";

import { credState } from "./initalState/states";

const authReducer = (prevState = credState, action) => {
  console.log(prevState);
  switch (action.type) {
    case ActionTypes.USER_REGISTER:
      // console.log("signup time", action);
      return {
        ...prevState,
      };

    case ActionTypes.USER_LOGIN:
      // console.log("login action output", action, action.payload);
      sessionStorage.setItem("first_name", action.payload.user.first_name);
      sessionStorage.setItem("last_name", action.payload.user.last_name);
      sessionStorage.setItem("rollno", action.payload.user.rollno);
      sessionStorage.setItem("email_id", action.payload.user.email_id);
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("is_active", action.payload.user.is_active);
      sessionStorage.setItem("admin_status", action.payload.user.admin_status);
      return {
        ...prevState,
        // creds: {
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        rollno: action.payload.user.rollno,
        email_id: action.payload.user.email_id,
        is_active: action.payload.user.is_active,
        admin_status: action.payload.user.admin_status,
        token: action.payload.token,
        // },
      };

    case ActionTypes.USER_LOGOUT:
      sessionStorage.clear();
      return {
        ...prevState,
        // creds: {
        first_name: "",
        last_name: "",
        rollno: "",
        email_id: "",
        token: "",
        // },
      };

    default:
      return prevState;
  }
};

export default authReducer;
