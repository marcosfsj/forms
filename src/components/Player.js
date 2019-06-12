import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
	render() {
		if (!this.props.selectedSong) {
			return <div>Select a song.</div>
		}

		return (
			<div>
				<div>{this.props.selectedSong.name}</div>
				<div>{this.props.selectedSong.duration}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { selectedSong: state.songList.selectedSong };
};

export default connect(mapStateToProps)(Player);
