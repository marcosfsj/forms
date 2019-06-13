import { FETCH_USER } from './Types';

export const fetchUser = id => async dispatch => {
  const response = await Backend.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};
