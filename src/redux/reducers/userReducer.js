import { actionTypes } from "../actions/actionTypes";

const initState = {
  user: null,
};

const userReducer = (
  state = initState,
  action
) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default userReducer;
