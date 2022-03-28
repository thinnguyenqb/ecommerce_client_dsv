import { TYPES } from "../actions/productAction";

const initialState = {
  items: [],
};


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
