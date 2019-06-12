import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
	render() {
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
