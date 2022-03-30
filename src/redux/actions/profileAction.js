import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";

export const PROFILE_TYPES = {
  UPDATE_PROFILE: "UPDATE_PROFILE",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
};

export const updateProfileUser = ({userData, auth}) => async (dispatch) => {
}

export const changePassword = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const token = localStorage.getItem("access_token")
    const res = await axios.post(process.env.REACT_APP_API_URL + '/user/change', data, {
      headers: {Authorization: token} 
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

