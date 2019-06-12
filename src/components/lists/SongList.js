import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../store/actions/SongList';

class SongList extends Component {
	renderSongList() {
		return this.props.songs.map(song => {
			return (
				<div key={song.id}>
					<div>
						<button onClick={() => this.props.selectSong(song)}>Select</button>
					</div>
					<div>{song.name}</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSongList()}</div>;
	}
}

const mapStateToProps = state => {
	return { songs: state.songList.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);