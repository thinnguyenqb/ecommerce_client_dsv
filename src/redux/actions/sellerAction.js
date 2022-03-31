import { GLOBALTYPES } from "./globalTypes";

export const PROFILE_TYPES = {
  LOGOUT_SELLER: "LOGOUT_SELLER",
};


export const logoutSeller = () => async (dispatch) => {
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
    window.location.href = "/seller/login"
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

