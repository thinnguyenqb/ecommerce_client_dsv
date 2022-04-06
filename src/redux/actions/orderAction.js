import { GLOBALTYPES } from "./globalTypes";
import axios from "axios";

export const ORDER_TYPES = {
  CANCEL_ORDER: "CANCEL_ORDER",
  CHECKOUT_ORDER: "CHECKOUT_ORDER",
  GET_ORDERS: "GET_ORDERS",
};

export const cancelOrder = () => async (dispatch) => {
  try {
    localStorage.removeItem("react-use-cart")
    
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: "Order cancelled!"
      }
    })
    
    setTimeout(function(){window.location.href = "/"} , 2000);
  
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

export const checkoutOrder = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    const token = localStorage.getItem("access_token");

    const res = await axios.post(process.env.REACT_APP_API_URL + '/api/order', data, {
      headers: {Authorization: token} 
    })
    //console.log(res.data.products)

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })

    // dispatch({
    //   type: ORDER_TYPES.CHECKOUT_ORDER,
    //   payload: res.data,
    // });

    if (res.status === 200) {
      localStorage.removeItem("react-use-cart")
      setTimeout(function(){window.location.href = "/"} , 3000);
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

export const getListOrderForSeller = (data, dataUpdate) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
    // const token = localStorage.getItem("access_token");

    // const res = await axios.get(process.env.REACT_APP_API_URL + '/api/order', {
    //   headers: {Authorization: token} 
    // })

    // dispatch({
    //   type: GLOBALTYPES.ALERT,
    //   payload: {
    //     success: res.data.msg
    //   }
    // })
    
    if (dataUpdate) {
      dispatch({
        type: ORDER_TYPES.GET_ORDERS,
        payload: data.orders,
      });
    } 
    if (data) {
      dispatch({
        type: ORDER_TYPES.GET_ORDERS,
        payload: data.orders,
      });
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

