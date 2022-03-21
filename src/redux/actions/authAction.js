import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";

export const TYPES = {
  AUTH: "AUTH",
  GET_USER: "GET_USER"
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const res = await axios.post( process.env.REACT_APP_API_URL + '/user/login', data)

    console.log(res)
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
        isLogged: true,
      },
    });
    localStorage.setItem('access_token', res.data.access_token);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })
    //if(res.data.access_token) setTimeout(function(){window.location.href = "/"} , 2000);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
};