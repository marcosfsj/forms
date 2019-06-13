import { LOAD_POSTS } from '../actions/Types';

const initialState = {
  postList: []
};

const PostList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
};

export default PostList;
