import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../../store/actions/Post';
import UserHeader from '../UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderPosts() {
    return this.props.postList.map(post => {
      return (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
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
