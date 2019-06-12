import { combineReducers } from 'redux';
import Auth from './Auth';
import SongList from './SongList';

const Reducers = combineReducers({
	auth: Auth,
	songList: SongList
});

export default Reducers;