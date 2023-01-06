import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESSFULL,
  LOGIN_RESET,
} from "./auth.types";
import { getFromCloud, removeFromCloud, sendToCloud } from "../../main";
const initial = {
  loading: false,
  error: false,
  token: getFromCloud("token") || "",
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case LOGIN_SUCCESSFULL:
      sendToCloud("token", action.payload);
      return {
        loading: false,
        error: false,
        token: action.payload,
      };
    case LOGIN_RESET:
        removeFromCloud('token')
      return {
        loading: false,
        error: false,
        token: "",
      };d
    default:
      return state;
  }
};

export default authReducer;
