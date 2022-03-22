import { TYPES } from "../actions/categoryAction";

const initialState = {
  items: [],
};


const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CATEGORY: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
