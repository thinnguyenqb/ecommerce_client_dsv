import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";

export const TYPES = {
  GET_PRODUCT: "GET_PRODUCT",
};

export const productFilter = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const res = await axios.post(process.env.REACT_APP_API_URL + '/product', data)
    //console.log(res.data.products)

    dispatch({
      type: TYPES.GET_PRODUCT,
      payload: res.data.products,
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


