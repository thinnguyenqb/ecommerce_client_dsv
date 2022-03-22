import { PROFILE_TYPES } from '../actions/profileAction'

const initialState = {
  loading: false,
  users: [],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.UPDATE_PROFILE:
      return {
        ...state
      };

    default:
      return state;
  }
}

export default profileReducer