import * as ActionTypes from "../ActionTypes";
import { baseURL } from "../../Utils/baseURL";
import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: baseURL,
});

const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await instance.post("api/users/register", formData);

    dispatch({
      type: ActionTypes.USER_REGISTER,
      payload: data,
    });

    toast.success(data.message);

    navigate("/login");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
};

const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await instance.post("/api/users/login", formData);

    console.log("action response", data);

    dispatch({
      type: ActionTypes.USER_LOGIN,
      payload: data,
    });
    toast.success(data.message);

    // navigation after request fullfillment
    navigate("/dashboard");
  } catch (error) {
    toast.error(error.response.data.message);

    console.log(error);
  }
};

const logout = (navigate) => async (dispatch) => {
  try {
    toast.info("Logged out successfully");
    await dispatch({
      type: ActionTypes.USER_LOGOUT,
    });

    sessionStorage.clear();
    navigate("/login");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const deleteUser = (param) => async (dispatch) => {
  try {
    const { data } = await instance.delete(`/api/users/${param}`);

    dispatch({
      type: ActionTypes.USER_DELETE,
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);

    console.log(error);
  }
};

// const getAllUsers = (token) => async (dispatch) => {
//   try {
//     const { users } = await instance.get("/api/users/getAllUsers", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return users;
//   } catch (error) {
//     toast.error(error.response.data.message);
//   }
// };

export { signup, login, logout, deleteUser };
