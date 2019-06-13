import { FETCH_USER } from '../actions/Types';

const initialState = {
  userList: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, userList: [...state.userList, action.payload] };
    default:
      return state;
  }
};

export default usersReducer;
