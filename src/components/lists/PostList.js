import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../store/actions/Post";

class PostList extends Component {
	componentDidMount() {
		this.props.loadPosts();
	}

	render() {
		return (
			<div>
				post list
			</div>
		)
	}
}

export default connect(null, { loadPosts })(PostList);
