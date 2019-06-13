import { combineReducers } from 'redux';
import Auth from './authReducer';
import songsReducer from './songsReducer';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const Reducers = combineReducers({
  auth: Auth,
  songs: songsReducer,
  posts: postsReducer,
  users: usersReducer
});

export default Reducers;
