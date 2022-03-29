import { TYPES } from "../actions/productAction";

const initialState = {
  items: [],
  totalPage: 0
};


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT: {
      return {
        ...state,
        items: action.payload.products,
        totalPage: action.payload.totalPage,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
