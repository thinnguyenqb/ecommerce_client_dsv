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

export const fetchUser = (token) => async (dispatch) => {
  if (token) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + '/user/infor', {
        headers: { Authorization: token },
      });
      dispatch({
        type: TYPES.GET_USER,
        payload: {
          token: token,
          user: res.data.user,
          isLogged: true
        },
      });
      dispatch({type: GLOBALTYPES.ALERT, payload: {}})
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg
        }
      })
    }
  }
};

export const logout = () => async(dispatch) => {
  try {
    //action loading
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {},
    });
    localStorage.removeItem('access_token')
  
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: "Logout successful!"
      }
    })
    window.location.href = "/"
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}