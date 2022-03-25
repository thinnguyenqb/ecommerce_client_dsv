import { GLOBALTYPES } from "./globalTypes";

export const pushAlert = (msg) => async (dispatch) => {
  dispatch({
    type: GLOBALTYPES.ALERT,
    payload: {
      warning: msg
    }
  })
};


