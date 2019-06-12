import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongList from '../../components/lists/SongList';
import Player from '../../components/Player';

class SongPlayer extends Component {
	render() {
		return (
			<div>
				<div><SongList /></div>
				<div><Player /></div>
			</div>
		);
	}
}

export default connect()(SongPlayer);