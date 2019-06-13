import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../../store/actions/PostList';

class PostList extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderPosts() {
    return this.props.postList.map(post => {
      return <div key={post.id}>{post.id}</div>;
    });
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

const mapStateToProps = state => {
  return { postList: state.postList };
};

export default connect(
  mapStateToProps,
  { loadPosts }
)(PostList);
