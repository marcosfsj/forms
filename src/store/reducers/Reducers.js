import { combineReducers } from 'redux';
import Auth from './Auth';
import SongList from './SongList';
import PostList from './PostList';

const Reducers = combineReducers({
  auth: Auth,
  songList: SongList,
  postList: PostList
});

export default Reducers;
