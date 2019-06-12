const initialState = {
	songs: [
		{ id: 1, name: "You've got a friend", duration: "2:40" },
		{ id: 2, name: "Amanha sera um novo dia", duration: "5:00" }
	],
	selectedSong: null
}

const SongList = (state = initialState, action) => {
	switch (action.type) {
		case "SELECT_SONG":
			return { ...state, selectedSong: action.payload };
		case "LOAD_SONGS":
			return { ...state, songList: action.payload };
		default:
			return state;
	}
};

export default SongList;