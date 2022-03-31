import { ORDER_TYPES } from "../actions/orderAction";

const initialState = {
  items: [],
};


const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_TYPES.GET_ORDERS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
