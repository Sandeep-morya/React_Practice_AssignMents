import axios from "axios";
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESSFULL,LOGIN_RESET } from "./auth.types";

export const loginRequest = (formData) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    try {
      const {data}  = await axios.post(
        `https://reqres.in/api/login`,
        formData
      );
      dispatch({ type: LOGIN_SUCCESSFULL, payload: data.token });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR });
    }
  };
};

export const loginReset = () =>{
    return (dispatch)=>{
        dispatch({type:LOGIN_RESET})
    }
}
