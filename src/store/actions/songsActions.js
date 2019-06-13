import {
	SELECT_SONG,
	LOAD_SONGS
} from './Types';

export const selectSong = song => {
	return {
		type: SELECT_SONG,
		payload: song
	};
};

export const loadSongs = songs => {
	return {
		type: LOAD_SONGS,
		payload: songs
	};
};