import { HIDE_NAV } from "../actions/types";

const initialState = {
  navHidden: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HIDE_NAV:
      return {
        ...state,
        navHidden: action.payload
      };
    default:
      return state;
  }
};
