import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";

export const TYPES = {
  AUTH: "AUTH",
  GET_USER: "GET_USER",
  UPDATE_USER: "UPDATE_USER"
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const res = await axios.post( process.env.REACT_APP_API_URL + '/user/login', data)

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

export const loginSeller = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const res = await axios.post( process.env.REACT_APP_API_URL + '/user/login', data)

    if (res.data.user.role !== "seller") {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: "Seller resources access denied"
        }
      })
    }
    else {
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

      setTimeout(function () { window.location.href = "/seller/product-manage" }, 2000);
    }
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
    localStorage.removeItem('react-use-cart')
  
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

export const register = (data) => async (dispatch) => {
  console.log(data)
 
  try {
    //action loading
    dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

    const res = await axios.post(process.env.REACT_APP_API_URL + '/user/register', {
      name: data.name,
      email: data.email,
      password: data.password
    })   
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

export const activationEmail = (activation_token) => async(dispatch) => {
  try {
    //action loading
    dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
   
    const res = await axios.post(process.env.REACT_APP_API_URL + '/user/activation', { activation_token })
  
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })
    if (res.status === 200)
    setTimeout(function(){window.location.href = "/"} , 5000);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

export const forgotPassword = (data) => async(dispatch) => {
  try {
    //action loading
    dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
    
    const res = await axios.post(process.env.REACT_APP_API_URL + '/user/forgot', data)
    
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })
    
    // if (res.status === 200)
    // setTimeout(function(){window.location.href = "/"} , 5000);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

export const resetPassword = (data) => async(dispatch) => {
  try {
    console.log(data)
    //action loading
    dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
    
    const res = await axios.post(process.env.REACT_APP_API_URL + '/user/reset', data, {
      headers: {Authorization: data.token} 
    })
    
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })
    
    if (res.status === 200)
      setTimeout(function(){window.location.href = "/"} , 4000);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

