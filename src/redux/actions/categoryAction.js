import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";

export const TYPES = {
  GET_CATEGORY: "GET_CATEGORY",
};

export const getCategory = () => async (dispatch) => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + '/category')
    dispatch({
      type: TYPES.GET_CATEGORY,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
};


